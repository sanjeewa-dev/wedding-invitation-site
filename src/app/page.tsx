import { Countdown } from "@/components/Countdown";
import { PublicShell } from "@/components/PublicShell";
import { SectionHeading } from "@/components/SectionHeading";
import {
  coupleNames,
  formatWeddingDate,
  formatWeddingTime,
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

function CornerLotus({ flip = false }: { flip?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute top-0 z-10 w-44 opacity-90 sm:w-64 md:w-80 ${
        flip
          ? "left-0 -translate-x-3 -translate-y-3 scale-x-[-1]"
          : "right-0 translate-x-3 -translate-y-3"
      }`}
      aria-hidden
    >
      <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M300 0 C250 80 180 120 100 130 C170 170 230 220 300 300"
          stroke="#C5A059"
          strokeWidth="2.5"
        />
        <path
          d="M220 60 C210 100 160 130 120 140 C170 160 200 200 230 260"
          stroke="#B80E65"
          strokeWidth="1.5"
        />
        <g transform="translate(190, 70) scale(0.65)">
          <path
            d="M50 10 C35 35, 10 45, -20 50 C10 55, 35 65, 50 90 C65 65, 90 55, 120 50 C90 45, 65 35, 50 10 Z"
            fill="#C5A059"
          />
          <path
            d="M50 20 C40 38, 20 46, 0 50 C20 54, 40 62, 50 80 C60 62, 80 54, 100 50 C80 46, 60 38, 50 20 Z"
            fill="#B80E65"
            opacity="0.85"
          />
        </g>
        <line
          x1="150"
          y1="0"
          x2="150"
          y2="120"
          stroke="#C5A059"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        <circle cx="150" cy="125" r="5" fill="#C5A059" />
      </svg>
    </div>
  );
}

export default async function HomePage() {
  const settings = await getWeddingSettings();
  const names = coupleNames(settings);

  return (
    <PublicShell>
      {/* Hero invitation card */}
      <section
        id="home"
        className="relative flex min-h-[calc(100svh-4rem)] scroll-mt-20 flex-col items-center justify-center overflow-hidden px-3 py-10 sm:px-6 md:min-h-[92vh] md:scroll-mt-24 md:py-16"
      >
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-15">
          <svg
            className="h-full w-full max-w-5xl text-gold"
            viewBox="0 0 800 1000"
            fill="none"
            aria-hidden
          >
            <path
              d="M400 50 C200 50 50 200 50 450 L50 950 L750 950 L750 450 C750 200 600 50 400 50 Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M400 300 C370 380, 260 420, 160 440 C260 460, 370 500, 400 580 C430 500, 540 460, 640 440 C540 420, 430 380, 400 300 Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <CornerLotus />
        <CornerLotus flip />

        <div className="invite-frame animate-fade-up relative z-20 w-full max-w-2xl p-4 sm:p-8 md:p-12">
          <div className="invite-frame-inner flex flex-col items-center px-4 py-8 text-center sm:px-8 sm:py-10 md:px-10">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-deep bg-gradient-to-br from-[#FAF4E1] to-[#E4D098] shadow-md sm:mb-5 sm:h-16 sm:w-16">
              <LotusIcon className="h-8 w-8 text-burgundy-deep sm:h-9 sm:w-9" />
            </div>

            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.22em] text-burgundy-dark sm:text-xs sm:tracking-[0.25em]">
              {dict.home.youAreInvited}
            </p>

            <h1 className="font-script script-glow mt-4 flex flex-col items-center gap-1 text-[2.6rem] leading-[1.05] text-burgundy-deep sm:mt-5 sm:text-6xl md:block md:text-7xl md:leading-tight">
              <span>{names.bride}</span>
              <span className="font-display mx-0 text-2xl font-normal text-gold sm:text-4xl md:mx-3 md:inline md:text-5xl">
                {dict.home.and}
              </span>
              <span>{names.groom}</span>
            </h1>

            <div className="my-5 flex w-full items-center justify-center gap-3 text-gold sm:my-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold sm:w-16" />
              <LotusIcon className="h-5 w-5 text-burgundy-deep" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold sm:w-16" />
            </div>

            <p className="font-display text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep sm:text-xs sm:tracking-widest">
              {dict.togetherWith}
            </p>

            <div className="mt-4 space-y-3 font-display text-burgundy-dark sm:mt-5 sm:space-y-4">
              <div>
                <p className="font-script text-2xl text-burgundy-deep sm:text-4xl">
                  {names.bride}
                </p>
                <p className="mt-1 text-xs italic tracking-wide text-ink/70 sm:text-sm">
                  {settings.bride_parents}
                </p>
              </div>
              <p className="text-lg font-bold text-gold">{dict.home.and}</p>
              <div>
                <p className="font-script text-2xl text-burgundy-deep sm:text-4xl">
                  {names.groom}
                </p>
                <p className="mt-1 text-xs italic tracking-wide text-ink/70 sm:text-sm">
                  {settings.groom_parents}
                </p>
              </div>
            </div>

            <p className="my-6 max-w-md text-xs italic tracking-wide text-ink/70 sm:my-8 sm:text-sm">
              {dict.joyfullyInvite}
            </p>

            <div className="grid w-full grid-cols-2 gap-3 border-y border-gold/40 py-4 text-center">
              <div className="border-r border-gold/30 pr-2">
                <span className="font-display block text-[10px] font-bold uppercase tracking-widest text-gold-deep sm:text-xs">
                  {dict.details.date}
                </span>
                <span className="font-display mt-1 block text-sm font-bold text-burgundy-deep sm:text-lg">
                  {formatWeddingDate(settings.wedding_date)}
                </span>
              </div>
              <div className="pl-2">
                <span className="font-display block text-[10px] font-bold uppercase tracking-widest text-gold-deep sm:text-xs">
                  {dict.details.time}
                </span>
                <span className="font-display mt-1 block text-sm font-bold text-burgundy-deep sm:text-lg">
                  {formatWeddingTime(settings.wedding_time)}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <LotusIcon className="mx-auto mb-2 h-5 w-5 text-gold" />
              <p className="font-display px-1 text-sm font-semibold tracking-wide text-burgundy-dark sm:text-base">
                {settings.venue_name}
              </p>
            </div>

            <div className="mt-7 flex w-full max-w-sm flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a
                href="#story"
                className="tap-target rounded-md border border-gold bg-[#FAF4E1] px-6 py-2.5 font-display text-xs uppercase tracking-wider text-burgundy-dark transition hover:bg-[#E4D098]"
              >
                {dict.home.ctaStory}
              </a>
              <a
                href="#rsvp"
                className="tap-target rounded-md border border-gold-deep bg-gold px-8 py-2.5 font-display text-xs uppercase tracking-wider text-white shadow-md transition hover:bg-gold-deep"
              >
                {dict.nav.rsvp}
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-6 w-full max-w-3xl px-1 sm:mt-8">
          <Countdown
            weddingDate={settings.wedding_date}
            weddingTime={settings.wedding_time}
            dict={dict}
          />
        </div>
      </section>

      {/* Story */}
      <section
        id="story"
        data-reveal
        className="mx-auto max-w-5xl scroll-mt-24 px-3 py-14 sm:px-6 md:py-20"
      >
        <SectionHeading
          title={dict.story.title}
          lead={dict.story.lead}
          eyebrow="Love Story"
        />
        <article className="invite-panel grid items-center gap-6 rounded-2xl p-6 sm:p-8 md:grid-cols-2 md:gap-8">
          <div className="space-y-4 text-sm leading-relaxed text-ink/80 sm:text-base">
            <p>{settings.story}</p>
            <p className="font-script text-2xl text-burgundy-deep sm:text-3xl">
              &ldquo;Two souls, one lotus promise, a lifetime together.&rdquo;
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-xl border-4 border-gold/50 shadow-md sm:h-80">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero-wedding.jpg"
              alt="Sasini and Chathuranga"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-burgundy-dark/10" />
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
        className="section-soft mx-auto my-6 max-w-6xl scroll-mt-24 rounded-3xl px-3 py-14 sm:px-6 md:py-20"
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
        <div className="invite-panel relative overflow-hidden rounded-2xl border-2 border-gold/50 p-8 shadow-xl sm:p-12">
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
        <div className="rounded-2xl border border-gold/40 bg-white/80 p-8 shadow-sm sm:p-10">
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
          lead={settings.venue_name}
          eyebrow="Location"
        />
        <div className="invite-panel grid items-center gap-6 rounded-2xl p-6 shadow-xl sm:p-8 lg:grid-cols-2">
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

      {/* Gallery */}
      <section
        id="gallery"
        data-reveal
        className="mx-auto max-w-6xl scroll-mt-24 px-3 py-14 sm:px-6 md:py-20"
      >
        <SectionHeading
          title={dict.gallery.title}
          lead={dict.gallery.lead}
          eyebrow="Moments"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {settings.gallery_urls.map((src, index) => (
            <figure
              key={`${src}-${index}`}
              className="group h-40 overflow-hidden rounded-xl border-2 border-gold/40 shadow-md sm:h-56 md:h-64"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* RSVP */}
      <section
        id="rsvp"
        data-reveal
        className="mx-auto max-w-3xl scroll-mt-24 px-3 py-14 sm:px-6 md:py-20"
      >
        <div className="rounded-3xl border-4 border-gold bg-gradient-to-b from-cream to-warm-sand p-6 shadow-2xl sm:p-10 md:p-12">
          <SectionHeading
            title={dict.rsvpPublic.title}
            lead={dict.rsvpPublic.lead}
            eyebrow="Response"
          />
          <p className="mx-auto max-w-xl text-center text-sm leading-relaxed text-ink/70 sm:text-base">
            {settings.rsvp_public_text}
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href={whatsappUrl(
                settings.contact_number,
                "Hello! Regarding Sasini & Chathuranga's wedding RSVP...",
              )}
              target="_blank"
              rel="noreferrer"
              className="tap-target w-full max-w-xs rounded-xl border border-gold bg-burgundy-deep px-7 py-3.5 text-center font-display text-sm font-bold uppercase tracking-widest text-gold shadow-lg transition hover:bg-burgundy-dark sm:w-auto"
            >
              {dict.rsvpPublic.whatsappCta}
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        data-reveal
        className="mx-auto max-w-4xl scroll-mt-24 px-3 py-14 text-center sm:px-6 md:py-16"
      >
        <div className="border-t border-gold/40 pt-10">
          <SectionHeading
            title={dict.contact.title}
            lead={dict.contact.lead}
            eyebrow="Questions?"
          />
          <div className="invite-panel mx-auto max-w-md rounded-xl p-6 sm:p-8">
            <p className="font-script text-2xl text-burgundy-deep sm:text-3xl">
              {names.bride} & {names.groom}
            </p>
            <p className="font-display mt-5 text-[11px] uppercase tracking-[0.22em] text-gold-deep">
              {dict.contact.phone}
            </p>
            <a
              href={`tel:${settings.contact_number.replace(/\s/g, "")}`}
              className="tap-target mt-2 inline-flex text-lg text-burgundy-dark sm:text-xl"
            >
              {settings.contact_number}
            </a>
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
