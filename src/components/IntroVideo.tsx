"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Phase = "intro" | "done";

export function IntroVideo() {
  const pathname = usePathname();
  const videoRef = useRef<HTMLVideoElement>(null);
  const startingRef = useRef(false);
  const [phase, setPhase] = useState<Phase>("intro");
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "playing" | "error">(
    "idle",
  );

  const isPublicPage =
    !pathname?.startsWith("/admin") && !pathname?.startsWith("/invite");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isPublicPage || phase !== "intro") return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Warm the video buffer so the first tap can start faster
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.load();
    }

    return () => {
      document.body.style.overflow = previous;
    };
  }, [mounted, isPublicPage, phase]);

  function finishIntro() {
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
    setPhase("done");
  }

  async function handleOpen() {
    const video = videoRef.current;
    if (!video || opened || startingRef.current) return;

    startingRef.current = true;
    setStatus("loading");

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    try {
      // Must call play() directly from the tap — do not await load first
      await video.play();
      setOpened(true);
      setStatus("playing");

      try {
        video.muted = false;
        if (video.paused) {
          video.muted = true;
          await video.play();
        }
      } catch {
        // Keep muted playback if unmute is blocked
      }
    } catch {
      startingRef.current = false;
      setOpened(false);
      setStatus("error");
    }
  }

  if (!mounted || !isPublicPage || phase === "done") {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      role="dialog"
      aria-modal="true"
      aria-label="Wedding invitation intro video"
    >
      <video
        ref={videoRef}
        src="/assets/invite-intro.mp4"
        className={`h-full w-full bg-black object-contain ${opened ? "opacity-100" : "opacity-0"}`}
        playsInline
        muted
        preload="auto"
        controls={false}
        onEnded={finishIntro}
        onPlaying={() => {
          setOpened(true);
          setStatus("playing");
        }}
      />

      {!opened ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#1a120f]/70 px-5 text-white">
          <span className="font-script max-w-[18ch] text-center text-[2.4rem] leading-tight tracking-wide sm:text-4xl md:max-w-none md:text-6xl">
            Sasini & Chathuranga
          </span>
          <span className="mt-3 text-[11px] uppercase tracking-[0.28em] text-white/80 sm:text-sm sm:tracking-[0.3em]">
            Our Forever Begins
          </span>
          <button
            type="button"
            onClick={handleOpen}
            className="tap-target mt-10 border border-white/70 px-6 py-3 text-[11px] uppercase tracking-[0.24em] sm:px-7 sm:text-xs sm:tracking-[0.28em]"
          >
            {status === "loading"
              ? "Opening…"
              : status === "error"
                ? "Tap again to play"
                : "Tap to open the invitation"}
          </button>
          {status === "error" ? (
            <>
              <span className="mt-4 max-w-xs text-center text-xs text-white/70">
                Video couldn&apos;t start. Tap again, or continue without it.
              </span>
              <button
                type="button"
                onClick={finishIntro}
                className="mt-6 text-xs uppercase tracking-[0.22em] text-white/80 underline"
              >
                Continue without video
              </button>
            </>
          ) : null}
        </div>
      ) : (
        <button
          type="button"
          onClick={finishIntro}
          className="tap-target absolute right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-10 border border-white/40 bg-black/50 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white"
        >
          Skip
        </button>
      )}
    </div>
  );
}
