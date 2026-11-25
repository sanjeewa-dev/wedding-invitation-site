import Link from "next/link";
import { notFound } from "next/navigation";
import { coupleNames, formatWeddingDate } from "@/lib/format";
import { getGuestByToken } from "@/lib/guests";
import { dict } from "@/lib/i18n/dictionaries";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import { getWeddingSettings } from "@/lib/wedding";

export default async function InvitePage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const settings = await getWeddingSettings();
  const names = coupleNames(settings);

  if (!isSupabaseConfigured()) {
    return (
      <InviteFrame>
        <div className="paper-card gold-border mx-auto max-w-xl rounded-sm p-10 text-center">
          <p className="text-ink/70">
            Personalized invitations require Supabase configuration. Add your
            environment variables to enable invite links.
          </p>
          <Link href="/" className="mt-6 inline-block text-gold underline">
            {dict.nav.home}
          </Link>
        </div>
      </InviteFrame>
    );
  }

  const invite = await getGuestByToken(token);
  if (!invite) {
    notFound();
  }

  const deadline = new Date(`${settings.rsvp_deadline}T23:59:59`);
  const deadlinePassed = Date.now() > deadline.getTime();

  return (
    <InviteFrame>
      <article className="paper-card gold-border relative mx-auto max-w-xl overflow-hidden rounded-sm px-6 py-12 text-center md:px-12 md:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url(/assets/lotus.svg)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 12%",
            backgroundSize: "160px",
          }}
        />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.35em] text-gold">
            {dict.subtitle}
          </p>
          <h1 className="font-display mt-4 text-4xl text-mauve md:text-5xl">
            {dict.brand}
          </h1>
          <div className="ornament-line mx-auto my-6 w-24" />
          <p className="text-sm text-ink/65">
            {dict.invite.dear}{" "}
            <span className="font-display text-2xl text-mauve">
              {invite.guest.full_name}
            </span>
          </p>
          <p className="mt-4 text-ink/75">{dict.invite.invited}</p>
          <p className="mt-8 font-script text-4xl text-ink">
            {names.bride} <span className="text-gold">&</span> {names.groom}
          </p>
          <p className="mt-4 text-sm tracking-wide text-ink/70">
            {formatWeddingDate(settings.wedding_date)} · {settings.wedding_time}
          </p>
          <p className="mt-2 text-sm text-ink/60">{settings.venue_name}</p>

          <p className="mt-8 text-xs text-ink/55">
            {deadlinePassed
              ? dict.invite.closed
              : `${dict.invite.deadline} ${formatWeddingDate(settings.rsvp_deadline)}`}
          </p>

          {!deadlinePassed ? (
            <Link
              href={`/invite/${token}/rsvp`}
              className="mt-8 inline-block bg-gold px-8 py-3 text-sm tracking-wide text-ivory transition hover:bg-[#b8945c]"
            >
              {invite.rsvp ? dict.invite.updateRsvp : dict.invite.openRsvp}
            </Link>
          ) : null}

          {invite.rsvp ? (
            <p className="mt-4 text-sm text-ink/60">
              {dict.invite.alreadyResponded}:{" "}
              <strong>
                {invite.rsvp.attendance === "attending"
                  ? dict.admin.attending
                  : dict.admin.declined}
              </strong>
            </p>
          ) : null}

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="/#details"
              className="text-gold underline-offset-4 hover:underline"
            >
              {dict.nav.details}
            </Link>
            <Link
              href="/#venue"
              className="text-gold underline-offset-4 hover:underline"
            >
              {dict.nav.venue}
            </Link>
          </div>
        </div>
      </article>
    </InviteFrame>
  );
}

function InviteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4 py-16">
      {children}
    </div>
  );
}
