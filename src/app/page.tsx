import { Countdown } from "@/components/Countdown";
import { FlatLayInvite } from "@/components/FlatLayInvite";
import { PublicShell } from "@/components/PublicShell";
import { SectionHeading } from "@/components/SectionHeading";
import {
  coupleNames,
  formatWeddingDate,
  formatWeddingTime,
  storyParagraphs,
  whatsappUrl,
} from "@/lib/format";
import { dict } from "@/lib/i18n/dictionaries";
import { getWeddingSettings } from "@/lib/wedding";

function LotusIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden
    >
      <path d="M50 15 C40 35, 20 45, 5 50 C20 55, 40 65, 50 85 C60 65, 80 55, 95 50 C80 45, 60 35, 50 15 Z" />
    </svg>
  );
}

export default async function HomePage() {
  const settings = await getWeddingSettings();
  const names = coupleNames(settings);

  return (
    <PublicShell>
      {/* Hero: full flat-lay invitation suite */}
      <section id="home" className="relative scroll-mt-20 md:scroll-mt-24">
        <div className="animate-fade-up w-full">
          <FlatLayInvite
            settings={settings}
            bride={names.bride}
            groom={names.groom}
          />
        </div>
      </section>

      {/* Countdown sits outside the hero */}
      <section className="relative z-20 mx-auto w-full max-w-3xl px-3 py-8 sm:px-4 sm:py-10">
        <Countdown
          weddingDate={settings.wedding_date}
          weddingTime={settings.wedding_time}
          dict={dict}
        />
      </section>

      {/* Story */}
      <section
        id="story"
        data-reveal
        className="mx-auto max-w-5xl scroll-mt-20 px-3 py-10 sm:scroll-mt-24 sm:px-6 sm:py-14 md:py-20"
      >
        <SectionHeading
          title={dict.story.title}
          lead={dict.story.lead}
          eyebrow="Love Story"
        />
        <article className="invite-panel rounded-2xl p-4 sm:p-8 md:p-10">
          <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed break-words text-ink/80 sm:space-y-5 sm:text-base">
            {storyParagraphs(settings.story).map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-justify">
                {paragraph}
              </p>
            ))}
            <p className="font-invite-serif pt-2 text-center text-lg italic leading-relaxed text-burgundy-deep sm:text-xl md:text-2xl">
              &ldquo;From the classrooms where our friendship blossomed to the
              dreams we quietly built together, every little moment brought us
              closer to the forever we now call ours.&rdquo;
            </p>
          </div>
        </article>
      </section>

      {/* Full-bleed wedding illustration */}
      <section aria-label="Wedding illustration" data-reveal className="w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/hero-wedding.jpg"
          alt="Sasini and Chathuranga on the poruwa at their Sri Lankan wedding"
          className="block h-auto w-full max-w-none"
        />
      </section>

      {/* Details */}
      <section
        id="details"
        data-reveal
        className="section-soft mx-auto my-4 max-w-6xl scroll-mt-20 rounded-2xl px-3 py-10 sm:my-6 sm:scroll-mt-24 sm:rounded-3xl sm:px-6 sm:py-14 md:py-20"
      >
        <SectionHeading
          title={dict.details.title}
          lead={dict.details.lead}
          eyebrow="Celebration"
        />

        <div className="mb-10 grid gap-4 sm:mb-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {[
            [dict.details.date, formatWeddingDate(settings.wedding_date)],
            [dict.details.time, formatWeddingTime(settings.wedding_time)],
            [dict.details.venue, settings.venue_name],
          ].map(([label, value]) => (
            <div
              key={label}
              className="invite-panel flex flex-col items-center rounded-xl p-6 text-center shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-[#FAF4E1] text-gold-deep">
                <LotusIcon className="h-6 w-6" />
              </div>
              <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold-deep">
                {label}
              </p>
              <p className="font-display mt-2 text-lg font-bold leading-snug text-burgundy-dark sm:text-xl">
                {value}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mb-3 text-center font-display text-xl uppercase tracking-wider text-burgundy-dark sm:mb-4 sm:text-2xl">
          {dict.details.schedule}
        </h3>
        <p className="mx-auto mb-6 max-w-2xl text-center text-sm leading-relaxed text-ink/65 sm:mb-8">
          {settings.schedule_intro}
        </p>
        <ol className="mx-auto max-w-3xl space-y-3 sm:space-y-4">
          {settings.schedule.map((item) => (
            <li
              key={`${item.time}-${item.title}`}
              className="invite-panel flex flex-col gap-2 rounded-xl p-4 shadow-sm sm:p-5 md:flex-row md:items-start md:gap-8"
            >
              <span className="shrink-0 font-display text-sm font-semibold text-gold-deep md:w-28 md:text-base">
                {item.time}
              </span>
              <div>
                <p className="font-display text-lg font-bold text-burgundy-dark sm:text-xl">
                  {item.title}
                </p>
                {item.description ? (
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">
                    {item.description}
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Dress code */}
      <section
        id="dress"
        data-reveal
        className="mx-auto max-w-4xl scroll-mt-24 px-3 py-14 text-center sm:px-6 md:py-16"
      >
        <div className="invite-panel relative overflow-hidden rounded-2xl border-2 border-gold/50 p-5 shadow-xl sm:p-12">
          <SectionHeading
            title={dict.dress.title}
            lead={dict.dress.lead}
            eyebrow="Attire"
          />
          <p className="font-display mx-auto max-w-xl text-xl font-bold text-burgundy-dark sm:text-2xl">
            {settings.dress_code_title}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
            {settings.dress_code}
          </p>
        </div>
      </section>

      {/* Gifts */}
      <section
        id="gifts"
        data-reveal
        className="mx-auto max-w-4xl scroll-mt-24 px-3 py-10 text-center sm:px-6 md:py-14"
      >
        <div className="rounded-2xl border border-gold/40 bg-white/80 p-5 shadow-sm sm:p-10">
          <SectionHeading
            title={dict.gifts.title}
            lead={dict.gifts.lead}
            eyebrow="Blessings"
          />
          <p className="font-display text-xl font-bold uppercase tracking-wider text-burgundy-dark sm:text-2xl">
            {settings.gifts_title}
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink/70">
            {settings.gifts_text}
          </p>
        </div>
      </section>

      {/* Venue */}
      <section
        id="venue"
        data-reveal
        className="mx-auto max-w-6xl scroll-mt-24 px-3 py-14 sm:px-6 md:py-20"
      >
        <SectionHeading
          title={dict.venue.title}
          eyebrow="Location"
        />
        <div className="invite-panel grid items-center gap-5 rounded-2xl p-4 shadow-xl sm:gap-6 sm:p-8 lg:grid-cols-2">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold text-burgundy-dark">
              {settings.venue_name}
            </h3>
            <p className="text-sm leading-relaxed text-ink/70 sm:text-base">
              <span className="font-display text-xs uppercase tracking-widest text-gold-deep">
                {dict.venue.address}
              </span>
              <br />
              {settings.venue_address}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${settings.venue_name} ${settings.venue_address}`)}`}
              target="_blank"
              rel="noreferrer"
              className="tap-target inline-flex rounded-lg border border-gold bg-burgundy-deep px-6 py-3 font-display text-xs uppercase tracking-widest text-gold transition hover:bg-burgundy-dark"
            >
              {dict.venue.openMaps}
            </a>
          </div>
          <div className="overflow-hidden rounded-xl border-2 border-gold/50 shadow-inner">
            <iframe
              title={settings.venue_name}
              src={settings.maps_embed_url}
              className="h-[260px] w-full border-0 sm:h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        data-reveal
        className="mx-auto max-w-3xl scroll-mt-24 px-3 py-14 sm:px-6 md:py-20"
      >
        <div className="rounded-2xl border-2 border-gold bg-gradient-to-b from-cream to-warm-sand p-4 shadow-2xl sm:rounded-3xl sm:border-4 sm:p-10 md:p-12">
          <SectionHeading
            title={dict.rsvpPublic.title}
            lead={dict.rsvpPublic.lead}
            eyebrow="Response"
          />
          <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-ink/70 sm:text-base">
            {settings.rsvp_public_text}
          </p>
          <div className="mt-8 space-y-6 text-center text-sm text-ink/75">
            <div className="space-y-2">
              <p className="font-display text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                RSVP (Regrets Only)
              </p>
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
                <a href="tel:0713736261" className="tap-target px-2">
                  Bride - 0713736261
                </a>
                <span className="hidden text-ink/30 sm:inline" aria-hidden>
                  |
                </span>
                <a href="tel:0772697028" className="tap-target px-2">
                  Groom - 0772697028
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappUrl(
                  "0713736261",
                  "Dear Sasini,\n\nThank you for the kind invitation to your wedding on 21 January 2027.\n\nI regret to inform you that I will be unable to attend. Please accept my sincere apologies.\n\nWith warm wishes,\n",
                )}
                target="_blank"
                rel="noreferrer"
                className="tap-target w-full max-w-xs rounded-xl border border-gold bg-burgundy-deep px-7 py-3.5 text-center font-display text-sm font-bold uppercase tracking-widest text-gold shadow-lg transition hover:bg-burgundy-dark sm:w-auto"
              >
                WhatsApp Bride
              </a>
              <a
                href={whatsappUrl(
                  "0772697028",
                  "Dear Chathuranga,\n\nThank you for the kind invitation to your wedding on 21 January 2027.\n\nI regret to inform you that I will be unable to attend. Please accept my sincere apologies.\n\nWith warm wishes,\n",
                )}
                target="_blank"
                rel="noreferrer"
                className="tap-target w-full max-w-xs rounded-xl border border-gold bg-burgundy-deep px-7 py-3.5 text-center font-display text-sm font-bold uppercase tracking-widest text-gold shadow-lg transition hover:bg-burgundy-dark sm:w-auto"
              >
                WhatsApp Groom
              </a>
            </div>
          </div>
        </div>
      </section>

    </PublicShell>
  );
}
