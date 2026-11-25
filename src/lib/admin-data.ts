import {
  createServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import type { Guest, GuestWithRsvp, Rsvp } from "@/lib/types";

export type DashboardStats = {
  invited: number;
  attending: number;
  declined: number;
  pending: number;
  confirmedHeadcount: number;
};

export async function getGuestsWithRsvps(): Promise<GuestWithRsvp[]> {
  if (!isSupabaseConfigured()) {
    return [];
  }

  const supabase = createServiceClient();
  const { data: guests, error } = await supabase
    .from("guests")
    .select("*")
    .order("created_at", { ascending: false });

  if (error || !guests) {
    return [];
  }

  const { data: rsvps } = await supabase.from("rsvps").select("*");
  const byGuest = new Map(
    ((rsvps as Rsvp[]) || []).map((r) => [r.guest_id, r]),
  );

  return (guests as Guest[]).map((guest) => ({
    ...guest,
    rsvps: byGuest.get(guest.id) ?? null,
  }));
}

export function computeStats(guests: GuestWithRsvp[]): DashboardStats {
  let attending = 0;
  let declined = 0;
  let pending = 0;
  let confirmedHeadcount = 0;

  for (const guest of guests) {
    if (!guest.rsvps) {
      pending += 1;
      continue;
    }
    if (guest.rsvps.attendance === "attending") {
      attending += 1;
      confirmedHeadcount += guest.rsvps.attendee_count;
    } else {
      declined += 1;
    }
  }

  return {
    invited: guests.length,
    attending,
    declined,
    pending,
    confirmedHeadcount,
  };
}

export function guestsToCsv(guests: GuestWithRsvp[]) {
  const header = [
    "full_name",
    "contact",
    "max_attendees",
    "invite_token",
    "status",
    "attendee_count",
    "message",
    "submitted_at",
  ];

  const rows = guests.map((g) => {
    const status = g.rsvps?.attendance ?? "pending";
    return [
      g.full_name,
      g.contact ?? "",
      String(g.max_attendees),
      g.invite_token,
      status,
      String(g.rsvps?.attendee_count ?? ""),
      (g.rsvps?.message ?? "").replace(/\n/g, " "),
      g.rsvps?.submitted_at ?? "",
    ]
      .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
      .join(",");
  });

  return [header.join(","), ...rows].join("\n");
}
