"use client";

import { useState } from "react";
import { dict } from "@/lib/i18n/dictionaries";

const links = [
  ["#home", "home"],
  ["#story", "story"],
  ["#details", "details"],
  ["#dress", "dress"],
  ["#gifts", "gifts"],
  ["#venue", "venue"],
  ["#rsvp", "rsvp"],
  ["#contact", "contact"],
] as const;

function LotusMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden
    >
      <path d="M50 15 C45 35, 25 45, 10 50 C25 55, 45 65, 50 85 C55 65, 75 55, 90 50 C75 45, 55 35, 50 15 Z" />
      <path
        d="M50 28 C42 42, 28 50, 18 54 C28 58, 42 66, 50 78 C58 66, 72 58, 82 54 C72 50, 58 42, 50 28 Z"
        fill="#B80E65"
        opacity="0.6"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-gold/40 bg-cream/90 pt-[env(safe-area-inset-top)] shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-3 sm:h-20 sm:gap-3 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-script flex min-w-0 items-center gap-2 text-[1.35rem] leading-none text-burgundy-deep sm:text-3xl md:text-4xl"
        >
          <LotusMark className="hidden h-6 w-6 shrink-0 text-gold sm:block sm:h-7 sm:w-7" />
          <span className="truncate">
            <span className="sm:hidden">Sasini &amp; Chathuranga</span>
            <span className="hidden sm:inline">
              Sasini{" "}
              <span className="font-display text-xl text-gold sm:text-2xl">&</span>{" "}
              Chathuranga
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 font-display text-xs uppercase tracking-wider text-burgundy-dark xl:flex xl:gap-6 xl:text-sm">
          {links.map(([href, key]) => (
            <a
              key={href}
              href={href}
              className="border-b-2 border-transparent py-1 transition hover:border-gold hover:text-gold-deep"
            >
              {dict.nav[key]}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="tap-target inline-flex shrink-0 rounded-md border border-gold/40 px-3 text-burgundy-deep xl:hidden"
        >
          <span className="font-display text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <nav
          className="max-h-[min(70vh,28rem)] space-y-0.5 overflow-y-auto border-t border-gold/30 bg-cream px-3 py-3 text-center font-display text-sm uppercase tracking-wider text-burgundy-dark shadow-lg sm:px-4 sm:py-4 xl:hidden"
          aria-label="Mobile navigation"
        >
          {links.map(([href, key]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="tap-target block rounded-md py-2.5 transition hover:bg-gold/10 hover:text-gold-deep"
            >
              {dict.nav[key]}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
