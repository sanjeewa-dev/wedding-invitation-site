"use client";

import { useEffect, useRef, useState } from "react";
import { BridalShoe } from "@/components/flatlay/BridalShoe";
import { CakeBox } from "@/components/flatlay/CakeBox";
import { Envelope } from "@/components/flatlay/Envelope";
import { PegDolls } from "@/components/flatlay/PegDolls";
import { InviteCard } from "@/components/InviteCard";
import type { WeddingSettings } from "@/lib/types";
import { format, parseISO } from "date-fns";

const STAGE_W = 1180;
const STAGE_H = 940;
const MOBILE_QUERY = "(max-width: 767px)";

function crestDateLabel(date: string) {
  try {
    return format(parseISO(date), "dd · MM · yyyy");
  } catch {
    return date;
  }
}

export function FlatLayInvite({
  settings,
  bride,
  groom,
}: {
  settings: WeddingSettings;
  bride: string;
  groom: string;
}) {
  const [cardFocus, setCardFocus] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement | null>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);

  function handleCardClick() {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) return;
    setCardFocus((value) => !value);
  }

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    function syncMobile() {
      const mobile = media.matches;
      setIsMobile(mobile);
      if (mobile) setCardFocus(false);
    }
    syncMobile();
    media.addEventListener("change", syncMobile);
    return () => media.removeEventListener("change", syncMobile);
  }, []);

  // Mobile only: scroll Flat Lay → Card Focus
  useEffect(() => {
    if (!isMobile) return;

    let frame = 0;

    function onScroll() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = scrollRootRef.current;
        if (!el) return;

        const total = el.offsetHeight - window.innerHeight;
        if (total <= 0) return;

        const scrolled = Math.min(
          Math.max(-el.getBoundingClientRect().top, 0),
          total,
        );
        const progress = scrolled / total;
        setCardFocus(progress >= 0.35);
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);

  useEffect(() => {
    function syncStationeryAndScale() {
      const stage = stageRef.current;
      const viewport = viewportRef.current;
      const card = cardRef.current;
      const envelope = envelopeRef.current;
      if (!stage || !viewport) return;

      if (card && envelope) {
        envelope.style.height = `${card.offsetHeight}px`;
      }

      const narrow = window.innerWidth < 768;
      const padX = narrow ? 16 : 24;
      const padY = narrow ? 100 : 72;
      const availW = Math.max(280, window.innerWidth - padX);
      const availH = Math.max(360, window.innerHeight - padY);

      const targetW = cardFocus ? 500 : STAGE_W;
      const targetH = cardFocus ? 740 : STAGE_H;
      const nextScale = Math.min(1, availW / targetW, availH / targetH);

      stage.style.transform = `scale(${nextScale})`;
      viewport.style.height = `${Math.ceil(targetH * nextScale)}px`;
    }

    syncStationeryAndScale();
    window.addEventListener("resize", syncStationeryAndScale);
    document.fonts?.ready.then(syncStationeryAndScale);

    let observer: ResizeObserver | undefined;
    if (cardRef.current && "ResizeObserver" in window) {
      observer = new ResizeObserver(syncStationeryAndScale);
      observer.observe(cardRef.current);
    }

    return () => {
      window.removeEventListener("resize", syncStationeryAndScale);
      observer?.disconnect();
    };
  }, [cardFocus, isMobile]);

  const hero = (
    <div
      className={`flatlay-hero relative w-full ${cardFocus ? "flatlay-closeup" : ""} ${
        isMobile ? "flatlay-hero-mobile" : ""
      }`}
    >
      <div className="linen-weave-overlay absolute inset-0 z-0" aria-hidden />

      <div className="absolute top-2 right-2 z-40 sm:right-6">
        <div
          role="group"
          aria-label="View mode"
          className="inline-flex rounded-full border border-amber-200/35 bg-[#3b3127]/85 p-0.5 shadow-md backdrop-blur-md"
        >
          <button
            type="button"
            aria-pressed={!cardFocus}
            onClick={() => setCardFocus(false)}
            className={`min-h-9 rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide transition-all sm:min-h-0 sm:px-3.5 sm:text-xs ${
              !cardFocus
                ? "bg-amber-100 text-[#3b3127] shadow-sm"
                : "text-amber-50/80 hover:text-amber-50"
            }`}
          >
            Flat Lay
          </button>
          <button
            type="button"
            aria-pressed={cardFocus}
            onClick={() => setCardFocus(true)}
            className={`min-h-9 rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide transition-all sm:min-h-0 sm:px-3.5 sm:text-xs ${
              cardFocus
                ? "bg-amber-100 text-[#3b3127] shadow-sm"
                : "text-amber-50/80 hover:text-amber-50"
            }`}
          >
            Card Focus
          </button>
        </div>
      </div>

      {isMobile ? (
        <div
          className={`scroll-down-hint pointer-events-none absolute inset-x-0 bottom-5 z-40 flex flex-col items-center gap-1 transition-opacity duration-500 ${
            cardFocus ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden={cardFocus}
        >
          <span className="rounded-full bg-[#3b3127]/75 px-3 py-1 text-[10px] tracking-[0.2em] text-amber-50/95 uppercase">
            Scroll down
          </span>
          <span className="scroll-down-chevron text-lg leading-none text-[#3b3127]/80">
            ↓
          </span>
        </div>
      ) : null}

      <div
        ref={viewportRef}
        className="relative z-10 flex w-full justify-center overflow-hidden px-0 pt-0 pb-0 sm:px-2"
      >
        <div
          ref={stageRef}
          id="flatlay-stage"
          className="relative flex shrink-0 items-start justify-center"
        >
          <svg aria-hidden width="0" height="0" className="pointer-events-none absolute">
            <defs>
              <linearGradient id="metallicGoldFoil" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9b701f" />
                <stop offset="28%" stopColor="#d4af37" />
                <stop offset="52%" stopColor="#f2d67c" />
                <stop offset="76%" stopColor="#c69834" />
                <stop offset="100%" stopColor="#8f6418" />
              </linearGradient>
              <linearGradient id="metallicGoldHorizontal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9e7322" />
                <stop offset="25%" stopColor="#d6b03c" />
                <stop offset="50%" stopColor="#f4d982" />
                <stop offset="75%" stopColor="#c89a36" />
                <stop offset="100%" stopColor="#966a1b" />
              </linearGradient>
            </defs>
          </svg>

          <CakeBox bride={bride} groom={groom} />
          <Envelope
            ref={envelopeRef}
            monogram={{ bride, groom }}
            dateLabel={crestDateLabel(settings.wedding_date)}
          />
          <BridalShoe />
          <PegDolls />
          <InviteCard
            settings={settings}
            bride={bride}
            groom={groom}
            onCardClick={handleCardClick}
            ref={cardRef}
          />
        </div>
      </div>
    </div>
  );

  if (!isMobile) return hero;

  return (
    <div ref={scrollRootRef} className="flatlay-scroll-track relative">
      <div className="flatlay-scroll-sticky sticky top-14 z-10 sm:top-20">
        {hero}
      </div>
    </div>
  );
}
