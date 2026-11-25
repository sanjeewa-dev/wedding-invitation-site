import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { computeStats, getGuestsWithRsvps } from "@/lib/admin-data";
import { isSupabaseConfigured } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const guests = await getGuestsWithRsvps();
  const stats = computeStats(guests);
  const configured = isSupabaseConfigured();

  const cards = [
    ["Invited", stats.invited],
    ["Attending", stats.attending],
    ["Declined", stats.declined],
    ["Pending", stats.pending],
    ["Confirmed guests", stats.confirmedHeadcount],
  ] as const;

  return (
    <>
      <AdminNav />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl text-mauve">Dashboard</h1>
            <p className="mt-1 text-sm text-ink/60">
              Wedding guest invitations & RSVP overview
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin/guests"
              className="border border-gold bg-gold/90 px-4 py-2 text-sm text-ivory"
            >
              Manage guests
            </Link>
            <a
              href="/admin/export"
              className="border border-gold/50 px-4 py-2 text-sm text-mauve"
            >
              Export CSV
            </a>
          </div>
        </div>

        {!configured ? (
          <p className="mb-6 rounded-sm border border-gold/30 bg-blush/40 p-4 text-sm">
            Supabase is not configured. Stats will appear once the database is
            connected.
          </p>
        ) : null}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map(([label, value]) => (
            <div key={label} className="paper-card rounded-sm p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">
                {label}
              </p>
              <p className="mt-3 font-display text-4xl text-mauve">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
