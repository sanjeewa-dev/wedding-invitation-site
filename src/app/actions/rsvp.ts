"use server";

import { z } from "zod";
import {
  createServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import { getWeddingSettings } from "@/lib/wedding";

const schema = z.object({
  token: z.string().min(10),
  attendance: z.enum(["attending", "declined"]),
  attendee_count: z.coerce.number().int().min(0).max(50),
  message: z.string().max(1000).optional(),
});

export type RsvpActionState = {
  ok: boolean;
  error?: string;
  code?: "deadline" | "max" | "generic" | "not_found" | "config";
};

export async function submitRsvp(
  _prev: RsvpActionState,
  formData: FormData,
): Promise<RsvpActionState> {
  if (!isSupabaseConfigured()) {
    return { ok: false, error: "Supabase is not configured.", code: "config" };
  }

  const parsed = schema.safeParse({
    token: formData.get("token"),
    attendance: formData.get("attendance"),
    attendee_count: formData.get("attendee_count") || 0,
    message: formData.get("message") || "",
  });

  if (!parsed.success) {
    return { ok: false, error: "Invalid RSVP data.", code: "generic" };
  }

  const { token, attendance, message } = parsed.data;
  let attendeeCount = parsed.data.attendee_count;

  if (attendance === "declined") {
    attendeeCount = 0;
  }

  try {
    const settings = await getWeddingSettings();
    const deadline = new Date(`${settings.rsvp_deadline}T23:59:59`);
    if (Date.now() > deadline.getTime()) {
      return {
        ok: false,
        error: "The RSVP deadline has passed.",
        code: "deadline",
      };
    }

    const supabase = createServiceClient();
    const { data: guest, error: guestError } = await supabase
      .from("guests")
      .select("id, max_attendees")
      .eq("invite_token", token)
      .maybeSingle();

    if (guestError || !guest) {
      return { ok: false, error: "Invitation not found.", code: "not_found" };
    }

    if (attendance === "attending") {
      if (attendeeCount < 1) {
        attendeeCount = 1;
      }
      if (attendeeCount > guest.max_attendees) {
        return {
          ok: false,
          error: "Guest count exceeds invitation allowance.",
          code: "max",
        };
      }
    }

    const now = new Date().toISOString();
    const { data: existing } = await supabase
      .from("rsvps")
      .select("id")
      .eq("guest_id", guest.id)
      .maybeSingle();

    if (existing) {
      const { error } = await supabase
        .from("rsvps")
        .update({
          attendance,
          attendee_count: attendeeCount,
          message: message || null,
          updated_at: now,
        })
        .eq("id", existing.id);

      if (error) {
        return { ok: false, error: error.message, code: "generic" };
      }
    } else {
      const { error } = await supabase.from("rsvps").insert({
        guest_id: guest.id,
        attendance,
        attendee_count: attendeeCount,
        message: message || null,
        submitted_at: now,
        updated_at: now,
      });

      if (error) {
        return { ok: false, error: error.message, code: "generic" };
      }
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Something went wrong. Please try again.",
      code: "generic",
    };
  }
}
