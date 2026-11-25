"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

const EMPTY: Parts = { days: 0, hours: 0, minutes: 0, seconds: 0 };

/** Build a local Date from Postgres date (`YYYY-MM-DD`) + time (`HH:mm` or `HH:mm:ss`). */
function parseWeddingTarget(weddingDate: string, weddingTime: string): Date {
  const datePart = weddingDate.slice(0, 10);
  const [year, month, day] = datePart.split("-").map(Number);
  const timeMatch = /^(\d{1,2}):(\d{2})(?::(\d{2}))?/.exec(
    (weddingTime || "00:00").trim(),
  );
  const hours = timeMatch ? Number(timeMatch[1]) : 0;
  const minutes = timeMatch ? Number(timeMatch[2]) : 0;
  const seconds = timeMatch?.[3] ? Number(timeMatch[3]) : 0;

  if (
    !year ||
    !month ||
    !day ||
    Number.isNaN(hours) ||
    Number.isNaN(minutes) ||
    Number.isNaN(seconds)
  ) {
    return new Date(NaN);
  }

  return new Date(year, month - 1, day, hours, minutes, seconds);
}

function getParts(target: Date): Parts {
  if (Number.isNaN(target.getTime())) return EMPTY;
  const diff = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown({
  weddingDate,
  weddingTime,
  dict,
}: {
  weddingDate: string;
  weddingTime: string;
  dict: Dictionary;
}) {
  const target = useMemo(
    () => parseWeddingTarget(weddingDate, weddingTime),
    [weddingDate, weddingTime],
  );
  const [parts, setParts] = useState<Parts>(EMPTY);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setParts(getParts(target));
    setReady(true);
    const id = window.setInterval(() => setParts(getParts(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const items = [
    [parts.days, dict.home.days],
    [parts.hours, dict.home.hours],
    [parts.minutes, dict.home.minutes],
    [parts.seconds, dict.home.seconds],
  ] as const;

  return (
    <div
      className="countdown-panel mx-auto w-full max-w-3xl rounded-2xl p-5 text-center sm:p-6"
      aria-live="polite"
      suppressHydrationWarning
    >
      <h3 className="font-display mb-4 text-xs uppercase tracking-[0.2em] text-gold sm:text-sm">
        {dict.home.countdownLead}
      </h3>
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {items.map(([value, label]) => (
          <div key={label} className="countdown-cell rounded-lg p-3">
            <div
              className={`font-display text-2xl font-bold text-white sm:text-4xl ${ready ? "" : "opacity-40"}`}
            >
              {String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-wider text-gold/90 sm:text-xs">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
