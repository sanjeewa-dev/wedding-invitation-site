import Link from "next/link";
import { notFound } from "next/navigation";
import { RsvpForm } from "@/components/RsvpForm";
import { getGuestByToken } from "@/lib/guests";
import { dict } from "@/lib/i18n/dictionaries";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import { getWeddingSettings } from "@/lib/wedding";

export default async function InviteRsvpPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const settings = await getWeddingSettings();

  if (!isSupabaseConfigured()) {
    notFound();
  }

  const invite = await getGuestByToken(token);
  if (!invite) {
    notFound();
  }

  const deadlinePassed =
    Date.now() > new Date(`${settings.rsvp_deadline}T23:59:59`).getTime();

  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-4 py-12">
      <div className="mb-6">
        <Link href={`/invite/${token}`} className="text-sm text-gold">
          ← {dict.rsvp.backToInvite}
        </Link>
      </div>
      <h1 className="mb-2 text-center font-display text-4xl text-mauve">
        {dict.rsvp.title}
      </h1>
      <p className="mb-8 text-center text-ink/65">{invite.guest.full_name}</p>
      <RsvpForm
        token={token}
        maxAttendees={invite.guest.max_attendees}
        existing={invite.rsvp}
        dict={dict}
        deadlinePassed={deadlinePassed}
      />
    </div>
  );
}
