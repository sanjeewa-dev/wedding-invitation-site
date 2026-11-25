import {
  createServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import type { Guest, Rsvp } from "@/lib/types";

export type InvitePayload = {
  guest: Guest;
  rsvp: Rsvp | null;
};

export async function getGuestByToken(
  token: string,
): Promise<InvitePayload | null> {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = createServiceClient();
  const { data: guest, error } = await supabase
    .from("guests")
    .select("*")
    .eq("invite_token", token)
    .maybeSingle();

  if (error || !guest) {
    return null;
  }

  const { data: rsvp } = await supabase
    .from("rsvps")
    .select("*")
    .eq("guest_id", guest.id)
    .maybeSingle();

  return {
    guest: guest as Guest,
    rsvp: (rsvp as Rsvp | null) ?? null,
  };
}
