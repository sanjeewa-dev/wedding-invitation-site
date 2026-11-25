"use client";

const PETALS = [
  { left: "4%", delay: "0s", duration: "11s", size: 22, drift: 36, color: "#F8A5C2" },
  { left: "12%", delay: "1.4s", duration: "13s", size: 16, drift: -28, color: "#B80E65" },
  { left: "20%", delay: "3.2s", duration: "10s", size: 26, drift: 42, color: "#C5A059" },
  { left: "28%", delay: "0.8s", duration: "14s", size: 18, drift: -22, color: "#FDE8E8" },
  { left: "37%", delay: "2.6s", duration: "12s", size: 24, drift: 30, color: "#F8A5C2" },
  { left: "46%", delay: "4.8s", duration: "15s", size: 17, drift: -34, color: "#B80E65" },
  { left: "55%", delay: "0.4s", duration: "11.5s", size: 23, drift: 26, color: "#C5A059" },
  { left: "64%", delay: "3.6s", duration: "13.5s", size: 15, drift: -30, color: "#F8A5C2" },
  { left: "72%", delay: "1.9s", duration: "12.5s", size: 25, drift: 38, color: "#B80E65" },
  { left: "80%", delay: "5.1s", duration: "10.5s", size: 19, drift: -26, color: "#C5A059" },
  { left: "88%", delay: "2.2s", duration: "14.5s", size: 21, drift: 32, color: "#FDE8E8" },
  { left: "94%", delay: "6s", duration: "11s", size: 16, drift: -20, color: "#F8A5C2" },
  { left: "8%", delay: "7.2s", duration: "12s", size: 20, drift: 24, color: "#B80E65" },
  { left: "52%", delay: "8s", duration: "13s", size: 18, drift: -36, color: "#C5A059" },
  { left: "76%", delay: "9s", duration: "11s", size: 22, drift: 28, color: "#F8A5C2" },
] as const;

function Petal({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size * 1.45}
      viewBox="0 0 40 58"
      aria-hidden
      focusable="false"
      style={{ display: "block", filter: "drop-shadow(0 2px 3px rgba(61,52,44,0.22))" }}
    >
      <path
        d="M20 2C11 14 3 25 5 39c2 11 11 15 15 17 4-2 13-6 15-17 2-14-6-25-15-37Z"
        fill={color}
      />
      <path
        d="M20 12c-2 11-3 19-2 30"
        stroke="#9A7B3C"
        strokeOpacity="0.4"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  );
}

export function FallingPetals() {
  return (
    <>
      <style>{`
        @keyframes lotus-fall {
          0% {
            transform: translate3d(0, -15vh, 0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.95; }
          70% { opacity: 0.9; }
          100% {
            transform: translate3d(var(--petal-drift, 30px), 110vh, 0) rotate(360deg);
            opacity: 0;
          }
        }
        .lotus-petal-fall {
          position: absolute;
          top: -8%;
          animation-name: lotus-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .lotus-petal-fall { display: none !important; }
        }
      `}</style>
      <div
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: 30 }}
        aria-hidden
      >
        {PETALS.map((petal, index) => (
          <span
            key={index}
            className="lotus-petal-fall"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              ["--petal-drift" as string]: `${petal.drift}px`,
            }}
          >
            <Petal color={petal.color} size={petal.size} />
          </span>
        ))}
      </div>
    </>
  );
}
