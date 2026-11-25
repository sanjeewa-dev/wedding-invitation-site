import { createGuest, deleteGuest, updateGuest } from "@/app/actions/admin";
import { AdminNav } from "@/components/admin/AdminNav";
import { CopyLinkButton } from "@/components/admin/CopyLinkButton";
import { getGuestsWithRsvps } from "@/lib/admin-data";
import { inviteUrl, whatsappShareUrl } from "@/lib/format";

export default async function AdminGuestsPage() {
  const guests = await getGuestsWithRsvps();

  return (
    <>
      <AdminNav />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="font-display text-4xl text-mauve">Guests</h1>
        <p className="mt-1 mb-8 text-sm text-ink/60">
          Add guests to generate personalized invitation links
        </p>

        <form
          action={createGuest}
          className="paper-card mb-10 grid gap-3 rounded-sm p-6 md:grid-cols-4"
        >
          <input
            name="full_name"
            required
            placeholder="Full name"
            className="border border-gold/40 bg-ivory px-3 py-2 md:col-span-1"
          />
          <input
            name="contact"
            placeholder="Contact (optional)"
            className="border border-gold/40 bg-ivory px-3 py-2"
          />
          <input
            name="max_attendees"
            type="number"
            min={1}
            defaultValue={2}
            required
            placeholder="Max attendees"
            className="border border-gold/40 bg-ivory px-3 py-2"
          />
          <button
            type="submit"
            className="bg-gold px-4 py-2 text-sm text-ivory"
          >
            Add guest
          </button>
        </form>

        <div className="space-y-4">
          {guests.length === 0 ? (
            <p className="text-sm text-ink/60">No guests yet.</p>
          ) : (
            guests.map((guest) => {
              const url = inviteUrl(guest.invite_token);
              const status = guest.rsvps?.attendance ?? "pending";
              return (
                <div
                  key={guest.id}
                  className="paper-card rounded-sm p-5"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-2xl text-mauve">
                        {guest.full_name}
                      </h2>
                      <p className="text-sm text-ink/60">
                        {guest.contact || "No contact"} · Max{" "}
                        {guest.max_attendees} ·{" "}
                        <span className="capitalize text-gold">{status}</span>
                      </p>
                      <p className="mt-2 break-all text-xs text-ink/50">{url}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <CopyLinkButton url={url} />
                      <a
                        href={whatsappShareUrl(guest.full_name, guest.invite_token)}
                        target="_blank"
                        rel="noreferrer"
                        className="border border-gold/40 px-2 py-1 text-xs text-mauve hover:bg-blush/40"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <details className="mt-4">
                    <summary className="cursor-pointer text-sm text-gold">
                      Edit guest
                    </summary>
                    <form
                      action={updateGuest}
                      className="mt-3 grid gap-2 md:grid-cols-4"
                    >
                      <input type="hidden" name="id" value={guest.id} />
                      <input
                        name="full_name"
                        defaultValue={guest.full_name}
                        required
                        className="border border-gold/40 bg-ivory px-3 py-2"
                      />
                      <input
                        name="contact"
                        defaultValue={guest.contact ?? ""}
                        className="border border-gold/40 bg-ivory px-3 py-2"
                      />
                      <input
                        name="max_attendees"
                        type="number"
                        min={1}
                        defaultValue={guest.max_attendees}
                        required
                        className="border border-gold/40 bg-ivory px-3 py-2"
                      />
                      <button
                        type="submit"
                        className="border border-gold px-3 py-2 text-sm text-mauve"
                      >
                        Save
                      </button>
                    </form>
                    <form action={deleteGuest} className="mt-2">
                      <input type="hidden" name="id" value={guest.id} />
                      <button
                        type="submit"
                        className="text-xs text-red-700 underline"
                      >
                        Delete guest
                      </button>
                    </form>
                  </details>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
