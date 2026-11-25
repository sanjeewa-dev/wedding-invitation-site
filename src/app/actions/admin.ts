"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { generateInviteToken } from "@/lib/format";
import {
  createClient,
  createServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import type { ScheduleItem } from "@/lib/types";

async function requireAdmin() {
  if (!isSupabaseConfigured()) {
    throw new Error("Supabase is not configured.");
  }
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    throw new Error("Unauthorized");
  }
  return { supabase, user };
}

export async function loginAdmin(formData: FormData) {
  if (!isSupabaseConfigured()) {
    return { error: "Supabase is not configured." };
  }

  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const next = String(formData.get("next") || "/admin");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: error.message };
  }

  redirect(next.startsWith("/admin") ? next : "/admin");
}

export async function logoutAdmin() {
  if (!isSupabaseConfigured()) {
    redirect("/admin/login");
  }
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

const guestSchema = z.object({
  full_name: z.string().min(1).max(200),
  contact: z.string().max(200).optional(),
  max_attendees: z.coerce.number().int().min(1).max(50),
});

export async function createGuest(formData: FormData): Promise<void> {
  await requireAdmin();
  const parsed = guestSchema.safeParse({
    full_name: formData.get("full_name"),
    contact: formData.get("contact") || "",
    max_attendees: formData.get("max_attendees"),
  });

  if (!parsed.success) {
    return;
  }

  const service = createServiceClient();
  await service.from("guests").insert({
    full_name: parsed.data.full_name,
    contact: parsed.data.contact || null,
    max_attendees: parsed.data.max_attendees,
    invite_token: generateInviteToken(),
  });

  revalidatePath("/admin");
  revalidatePath("/admin/guests");
  revalidatePath("/admin/rsvps");
}

export async function updateGuest(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const parsed = guestSchema.safeParse({
    full_name: formData.get("full_name"),
    contact: formData.get("contact") || "",
    max_attendees: formData.get("max_attendees"),
  });

  if (!id || !parsed.success) {
    return;
  }

  const service = createServiceClient();
  await service
    .from("guests")
    .update({
      full_name: parsed.data.full_name,
      contact: parsed.data.contact || null,
      max_attendees: parsed.data.max_attendees,
    })
    .eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/admin/guests");
  revalidatePath("/admin/rsvps");
}

export async function deleteGuest(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  if (!id) {
    return;
  }

  const service = createServiceClient();
  await service.from("guests").delete().eq("id", id);

  revalidatePath("/admin");
  revalidatePath("/admin/guests");
  revalidatePath("/admin/rsvps");
}

export async function updateSettings(formData: FormData): Promise<void> {
  await requireAdmin();

  const scheduleRaw = String(formData.get("schedule_json") || "[]");
  const galleryRaw = String(formData.get("gallery_urls") || "");

  let schedule: ScheduleItem[] = [];
  try {
    schedule = JSON.parse(scheduleRaw) as ScheduleItem[];
  } catch {
    return;
  }

  const gallery_urls = galleryRaw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const payload = {
    bride_name: String(formData.get("bride_name") || ""),
    groom_name: String(formData.get("groom_name") || ""),
    bride_parents: String(formData.get("bride_parents") || ""),
    groom_parents: String(formData.get("groom_parents") || ""),
    wedding_date: String(formData.get("wedding_date") || ""),
    wedding_time: String(formData.get("wedding_time") || ""),
    venue_name: String(formData.get("venue_name") || ""),
    venue_address: String(formData.get("venue_address") || ""),
    contact_number: String(formData.get("contact_number") || ""),
    rsvp_deadline: String(formData.get("rsvp_deadline") || ""),
    story: String(formData.get("story") || ""),
    schedule_intro: String(formData.get("schedule_intro") || ""),
    dress_code_title: String(formData.get("dress_code_title") || ""),
    dress_code: String(formData.get("dress_code") || ""),
    gifts_title: String(formData.get("gifts_title") || ""),
    gifts_text: String(formData.get("gifts_text") || ""),
    rsvp_public_text: String(formData.get("rsvp_public_text") || ""),
    maps_embed_url: String(formData.get("maps_embed_url") || ""),
    schedule,
    gallery_urls,
    updated_at: new Date().toISOString(),
  };

  const service = createServiceClient();
  const { data: existing } = await service
    .from("wedding_settings")
    .select("id")
    .limit(1)
    .maybeSingle();

  if (existing) {
    await service.from("wedding_settings").update(payload).eq("id", existing.id);
  } else {
    await service.from("wedding_settings").insert(payload);
  }

  revalidatePath("/");
  revalidatePath("/admin/settings");
}
