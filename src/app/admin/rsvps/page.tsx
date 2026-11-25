import Link from "next/link";
import { AdminNav } from "@/components/admin/AdminNav";
import { getGuestsWithRsvps } from "@/lib/admin-data";

type Filter = "all" | "attending" | "declined" | "pending";

export default async function AdminRsvpsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>;
}) {
  const { filter: raw } = await searchParams;
  const filter = (["all", "attending", "declined", "pending"].includes(
    raw || "",
  )
    ? raw
    : "all") as Filter;

  const guests = await getGuestsWithRsvps();
  const filtered = guests.filter((g) => {
    const status = g.rsvps?.attendance ?? "pending";
    return filter === "all" ? true : status === filter;
  });

  const tabs: Filter[] = ["all", "attending", "declined", "pending"];

  return (
    <>
      <AdminNav />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl text-mauve">RSVPs</h1>
            <p className="mt-1 text-sm text-ink/60">
              Track responses and attendance counts
            </p>
          </div>
          <a
            href="/admin/export"
            className="border border-gold/50 px-4 py-2 text-sm text-mauve"
          >
            Export CSV
          </a>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <Link
              key={tab}
              href={`/admin/rsvps?filter=${tab}`}
              className={`border px-3 py-1.5 text-xs uppercase tracking-wider ${
                filter === tab
                  ? "border-gold bg-gold text-ivory"
                  : "border-gold/40 text-mauve"
              }`}
            >
              {tab}
            </Link>
          ))}
        </div>

        <div className="overflow-x-auto rounded-sm border border-gold/30 bg-ivory/80">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-gold/20 text-xs uppercase tracking-wider text-gold">
              <tr>
                <th className="px-4 py-3">Guest</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Count</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Updated</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-ink/55">
                    No records for this filter.
                  </td>
                </tr>
              ) : (
                filtered.map((guest) => (
                  <tr
                    key={guest.id}
                    className="border-b border-gold/10 last:border-0"
                  >
                    <td className="px-4 py-3 font-medium text-mauve">
                      {guest.full_name}
                    </td>
                    <td className="px-4 py-3 capitalize">
                      {guest.rsvps?.attendance ?? "pending"}
                    </td>
                    <td className="px-4 py-3">
                      {guest.rsvps?.attendee_count ?? "—"}
                    </td>
                    <td className="max-w-xs truncate px-4 py-3 text-ink/70">
                      {guest.rsvps?.message || "—"}
                    </td>
                    <td className="px-4 py-3 text-ink/55">
                      {guest.rsvps?.updated_at
                        ? new Date(guest.rsvps.updated_at).toLocaleString()
                        : "—"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
