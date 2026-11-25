"use client";

import { useEffect, useState } from "react";

type BurstPetal = {
  id: number;
  left: number;
  size: number;
  drift: number;
  duration: number;
  color: string;
};

const COLORS = ["#FDE8E8", "#F8A5C2", "#C5A059", "#FAF4E1", "#B80E65"];

function revealElement(el: Element) {
  el.classList.add("is-revealed");
}

export function ScrollEffects() {
  const [bursts, setBursts] = useState<BurstPetal[]>([]);

  useEffect(() => {
    document.documentElement.classList.add("js-reveal");

    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    // Always show content if motion is reduced or observer cannot run
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      revealEls.forEach(revealElement);
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            revealElement(entry.target);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: [0, 0.05, 0.1],
        rootMargin: "0px 0px -2% 0px",
      },
    );

    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
      if (inView) {
        revealElement(el);
      } else {
        revealObserver.observe(el);
      }
    });

    // Safety net: never leave sections invisible on mobile
    const fallbackId = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)")
        .forEach(revealElement);
    }, 1200);

    let lastY = window.scrollY;
    let coolDown = false;

    function spawnBurst() {
      if (coolDown) return;
      coolDown = true;
      window.setTimeout(() => {
        coolDown = false;
      }, 700);

      const batch: BurstPetal[] = Array.from({ length: 5 }, (_, i) => ({
        id: Date.now() + i,
        left: 8 + Math.random() * 84,
        size: 14 + Math.random() * 16,
        drift: -40 + Math.random() * 80,
        duration: 2.4 + Math.random() * 1.6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));

      setBursts((prev) => [...prev.slice(-20), ...batch]);

      window.setTimeout(() => {
        setBursts((prev) =>
          prev.filter((p) => !batch.some((b) => b.id === p.id)),
        );
      }, 4200);
    }

    function onScroll() {
      const y = window.scrollY;
      const delta = Math.abs(y - lastY);
      lastY = y;
      if (delta > 40) {
        spawnBurst();
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(fallbackId);
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        [data-reveal] {
          opacity: 1;
          transform: none;
        }
        html.js-reveal [data-reveal]:not(.is-revealed) {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.75s ease,
            transform 0.75s ease;
        }
        html.js-reveal [data-reveal].is-revealed {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes scroll-lotus-burst {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg) scale(0.7);
            opacity: 0;
          }
          15% { opacity: 0.95; }
          100% {
            transform: translate3d(var(--burst-drift, 24px), 70vh, 0) rotate(280deg) scale(1);
            opacity: 0;
          }
        }
        .scroll-lotus-burst {
          position: fixed;
          top: 18%;
          z-index: 55;
          pointer-events: none;
          animation: scroll-lotus-burst linear forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          html.js-reveal [data-reveal]:not(.is-revealed),
          html.js-reveal [data-reveal].is-revealed {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .scroll-lotus-burst { display: none !important; }
        }
      `}</style>
      {bursts.map((petal) => (
        <span
          key={petal.id}
          className="scroll-lotus-burst"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            ["--burst-drift" as string]: `${petal.drift}px`,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 64 64"
            aria-hidden
          >
            <path
              d="M32 50C26 42 18 36 14 28c8 4 14 10 18 18 4-8 10-14 18-18-4 8-12 14-18 22Z"
              fill={petal.color}
            />
            <path
              d="M32 46C28 34 22 24 32 12c10 12 4 22 0 34Z"
              fill="#FFFFFF"
            />
            <path
              d="M32 48C38 38 46 34 52 28c-8 4-14 10-20 18-6-8-12-14-20-18 6 6 14 10 20 20Z"
              fill={petal.color}
              fillOpacity="0.9"
            />
            <circle cx="32" cy="30" r="2.8" fill="#C4A35A" />
          </svg>
        </span>
      ))}
    </>
  );
}
