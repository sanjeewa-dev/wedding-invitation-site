"use client";

import { useActionState, useState } from "react";
import { submitRsvp, type RsvpActionState } from "@/app/actions/rsvp";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { AttendanceStatus, Rsvp } from "@/lib/types";

const initial: RsvpActionState = { ok: false };

export function RsvpForm({
  token,
  maxAttendees,
  existing,
  dict,
  deadlinePassed,
}: {
  token: string;
  maxAttendees: number;
  existing: Rsvp | null;
  dict: Dictionary;
  deadlinePassed: boolean;
}) {
  const [attendance, setAttendance] = useState<AttendanceStatus>(
    existing?.attendance ?? "attending",
  );
  const [state, formAction, pending] = useActionState(submitRsvp, initial);

  if (state.ok) {
    return (
      <div className="paper-card gold-border rounded-sm p-8 text-center">
        <h2 className="font-display text-3xl text-mauve">
          {dict.rsvp.successTitle}
        </h2>
        <p className="mt-4 text-ink/75">
          {attendance === "attending"
            ? dict.rsvp.successAttending
            : dict.rsvp.successDeclined}
        </p>
        <a
          href={`/invite/${token}`}
          className="mt-8 inline-block border border-gold px-5 py-2 text-sm text-mauve"
        >
          {dict.rsvp.backToInvite}
        </a>
      </div>
    );
  }

  if (deadlinePassed) {
    return (
      <div className="paper-card rounded-sm p-8 text-center text-ink/70">
        {dict.invite.closed}
      </div>
    );
  }

  const errorMessage =
    state.code === "deadline"
      ? dict.rsvp.errorDeadline
      : state.code === "max"
        ? dict.rsvp.errorMax
        : state.error
          ? dict.rsvp.errorGeneric
          : null;

  return (
    <form action={formAction} className="paper-card gold-border space-y-6 rounded-sm p-6 md:p-8">
      <input type="hidden" name="token" value={token} />

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex cursor-pointer items-center gap-3 border border-gold/30 bg-ivory/80 p-4">
          <input
            type="radio"
            name="attendance"
            value="attending"
            checked={attendance === "attending"}
            onChange={() => setAttendance("attending")}
          />
          <span>{dict.rsvp.attending}</span>
        </label>
        <label className="flex cursor-pointer items-center gap-3 border border-gold/30 bg-ivory/80 p-4">
          <input
            type="radio"
            name="attendance"
            value="declined"
            checked={attendance === "declined"}
            onChange={() => setAttendance("declined")}
          />
          <span>{dict.rsvp.declined}</span>
        </label>
      </div>

      {attendance === "attending" ? (
        <div>
          <label className="mb-2 block text-sm text-ink/70">
            {dict.rsvp.guests}
          </label>
          <input
            type="number"
            name="attendee_count"
            min={1}
            max={maxAttendees}
            defaultValue={existing?.attendee_count || 1}
            className="w-full border border-gold/40 bg-ivory px-3 py-2 outline-none focus:border-gold"
            required
          />
          <p className="mt-2 text-xs text-ink/55">
            {dict.rsvp.maxHint.replace("{max}", String(maxAttendees))}
          </p>
        </div>
      ) : (
        <input type="hidden" name="attendee_count" value={0} />
      )}

      <div>
        <label className="mb-2 block text-sm text-ink/70">
          {dict.rsvp.message}
        </label>
        <textarea
          name="message"
          rows={4}
          defaultValue={existing?.message ?? ""}
          className="w-full border border-gold/40 bg-ivory px-3 py-2 outline-none focus:border-gold"
        />
      </div>

      {errorMessage ? (
        <p className="text-sm text-red-700">{errorMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-gold px-4 py-3 text-sm tracking-wide text-ivory transition hover:bg-[#b8945c] disabled:opacity-60"
      >
        {pending
          ? "…"
          : existing
            ? dict.rsvp.update
            : dict.rsvp.submit}
      </button>
    </form>
  );
}
