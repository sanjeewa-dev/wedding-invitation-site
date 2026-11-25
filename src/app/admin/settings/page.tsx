import { updateSettings } from "@/app/actions/admin";
import { AdminNav } from "@/components/admin/AdminNav";
import { getWeddingSettings } from "@/lib/wedding";

export default async function AdminSettingsPage() {
  const settings = await getWeddingSettings();

  return (
    <>
      <AdminNav />
      <div className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="font-display text-4xl text-mauve">Settings</h1>
        <p className="mt-1 mb-8 text-sm text-ink/60">
          Update wedding details shown across the site
        </p>

        <form
          action={updateSettings}
          className="paper-card space-y-5 rounded-sm p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field
              name="bride_name"
              label="Bride name"
              defaultValue={settings.bride_name}
            />
            <Field
              name="groom_name"
              label="Groom name"
              defaultValue={settings.groom_name}
            />
            <Field
              name="bride_parents"
              label="Bride parents line"
              defaultValue={settings.bride_parents}
            />
            <Field
              name="groom_parents"
              label="Groom parents line"
              defaultValue={settings.groom_parents}
            />
            <Field
              name="wedding_date"
              label="Wedding date"
              type="date"
              defaultValue={settings.wedding_date}
            />
            <Field
              name="wedding_time"
              label="Wedding time"
              type="time"
              defaultValue={settings.wedding_time.slice(0, 5)}
            />
            <Field
              name="rsvp_deadline"
              label="RSVP deadline"
              type="date"
              defaultValue={settings.rsvp_deadline}
            />
            <Field
              name="contact_number"
              label="Contact number"
              defaultValue={settings.contact_number}
            />
          </div>

          <Field
            name="venue_name"
            label="Venue name"
            defaultValue={settings.venue_name}
          />
          <Field
            name="venue_address"
            label="Venue address"
            defaultValue={settings.venue_address}
          />
          <Field
            name="maps_embed_url"
            label="Google Maps embed URL"
            defaultValue={settings.maps_embed_url}
          />
          <Field
            name="dress_code_title"
            label="Dress code title"
            defaultValue={settings.dress_code_title}
          />
          <Field
            name="gifts_title"
            label="Gifts title"
            defaultValue={settings.gifts_title}
          />

          <div>
            <label className="mb-1 block text-sm text-ink/70">Dress code</label>
            <textarea
              name="dress_code"
              rows={3}
              defaultValue={settings.dress_code}
              className="w-full border border-gold/40 bg-ivory px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-ink/70">Gifts text</label>
            <textarea
              name="gifts_text"
              rows={3}
              defaultValue={settings.gifts_text}
              className="w-full border border-gold/40 bg-ivory px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-ink/70">RSVP text</label>
            <textarea
              name="rsvp_public_text"
              rows={3}
              defaultValue={settings.rsvp_public_text}
              className="w-full border border-gold/40 bg-ivory px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-ink/70">Our story</label>
            <textarea
              name="story"
              rows={4}
              defaultValue={settings.story}
              className="w-full border border-gold/40 bg-ivory px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-ink/70">
              Schedule intro
            </label>
            <textarea
              name="schedule_intro"
              rows={2}
              defaultValue={settings.schedule_intro}
              className="w-full border border-gold/40 bg-ivory px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-ink/70">
              Schedule JSON
            </label>
            <textarea
              name="schedule_json"
              rows={10}
              defaultValue={JSON.stringify(settings.schedule, null, 2)}
              className="w-full border border-gold/40 bg-ivory px-3 py-2 font-mono text-xs"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-ink/70">
              Gallery image URLs (one per line)
            </label>
            <textarea
              name="gallery_urls"
              rows={6}
              defaultValue={settings.gallery_urls.join("\n")}
              className="w-full border border-gold/40 bg-ivory px-3 py-2 font-mono text-xs"
            />
          </div>

          <button
            type="submit"
            className="bg-gold px-6 py-3 text-sm tracking-wide text-ivory"
          >
            Save settings
          </button>
        </form>
      </div>
    </>
  );
}

function Field({
  name,
  label,
  defaultValue,
  type = "text",
}: {
  name: string;
  label: string;
  defaultValue: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm text-ink/70">{label}</label>
      <input
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="w-full border border-gold/40 bg-ivory px-3 py-2"
      />
    </div>
  );
}
