import { forwardRef } from "react";

export const Envelope = forwardRef<
  HTMLDivElement,
  {
    monogram: { bride: string; groom: string };
    dateLabel: string;
    className?: string;
  }
>(function Envelope({ monogram, dateLabel, className = "" }, ref) {
  const s = monogram.bride.charAt(0).toUpperCase();
  const c = monogram.groom.charAt(0).toUpperCase();

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`flatlay-prop envelope-texture flatlay-shadow stationery-dimensions absolute top-[168px] left-[78px] z-10 select-none overflow-hidden rounded-[2px] border border-[#b3a591]/70 ${className}`}
    >
      <div className="relative z-10 mx-auto h-4 w-8 rounded-b-full bg-[#dfd8cd] shadow-inner" />

      <svg className="absolute -top-2 -right-3 h-36 w-36 opacity-95" viewBox="0 0 160 160" fill="none">
        <g stroke="url(#metallicGoldFoil)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
          <path d="M95 125 C95 95, 110 65, 125 45 C128 72, 120 102, 95 125 Z" />
          <path d="M95 125 C82 95, 85 62, 98 38 C108 65, 107 96, 95 125 Z" />
          <path d="M95 125 C72 102, 65 72, 74 48 C88 70, 93 98, 95 125 Z" />
          <path d="M95 125 C112 104, 134 86, 150 75 C138 98, 118 115, 95 125 Z" />
          <path d="M95 125 C66 112, 48 92, 42 74 C64 85, 82 104, 95 125 Z" />
          <path d="M95 125 L82 155" />
        </g>
      </svg>

      <svg className="absolute top-[25%] -left-4 h-40 w-40 opacity-95" viewBox="0 0 160 160" fill="none">
        <g stroke="url(#metallicGoldFoil)" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
          <path d="M65 125 C65 92, 52 60, 38 38 C56 58, 68 90, 65 125 Z" />
          <path d="M65 125 C75 90, 74 56, 62 32 C50 58, 52 92, 65 125 Z" />
          <path d="M65 125 C88 98, 96 68, 86 44 C72 68, 67 96, 65 125 Z" />
          <path d="M65 125 C46 105, 24 88, 10 78 C22 100, 42 116, 65 125 Z" />
          <path d="M65 125 C94 110, 112 90, 118 72 C96 84, 78 104, 65 125 Z" />
          <path d="M65 125 L78 156" />
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative flex h-[138px] w-[138px] items-center justify-center">
          <svg className="absolute inset-0 h-full w-full opacity-95" viewBox="0 0 160 160" fill="none">
            <g stroke="url(#metallicGoldFoil)" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="80" cy="80" r="68" strokeWidth="1.25" />
              <circle cx="80" cy="80" r="62" strokeWidth="0.75" strokeDasharray="3 2.5" />
              <path d="M80 12 C76 18, 76 23, 80 26 C84 23, 84 18, 80 12 Z" strokeWidth="1" fill="#c4b8a6" />
              <path d="M73 16 C72 21, 74 24, 78 26" strokeWidth="0.9" />
              <path d="M87 16 C88 21, 86 24, 82 26" strokeWidth="0.9" />
              <path d="M80 148 C76 142, 76 137, 80 134 C84 137, 84 142, 80 148 Z" strokeWidth="1" fill="#c4b8a6" />
              <path d="M73 144 C72 139, 74 136, 78 134" strokeWidth="0.9" />
              <path d="M87 144 C88 139, 86 136, 82 134" strokeWidth="0.9" />
            </g>
          </svg>
          <div className="relative z-10 flex select-none flex-col items-center justify-center leading-none text-[#8a6418]">
            <div className="flex items-center justify-center tracking-[-0.04em]">
              <span className="font-[family-name:var(--font-foil-decor)] text-[36px] font-semibold uppercase">
                {s}
              </span>
              <span className="font-invite-serif mx-1 translate-y-0.5 text-[18px] font-semibold italic">
                &amp;
              </span>
              <span className="font-[family-name:var(--font-foil-decor)] text-[36px] font-semibold uppercase">
                {c}
              </span>
            </div>
            <span className="mt-1.5 text-[7px] font-semibold uppercase tracking-[0.34em]">
              {dateLabel}
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[13%] left-[14%] z-20 flex items-start">
        <div className="wedding-ring z-10 h-[48px] w-[48px]" />
        <div className="wedding-ring z-20 mt-6 -ml-1.5 h-[41px] w-[41px]" />
      </div>

      <div className="absolute inset-x-4 bottom-3 opacity-95">
        <svg className="h-7 w-full" viewBox="0 0 420 28" fill="none" preserveAspectRatio="none">
          <g stroke="url(#metallicGoldHorizontal)" strokeWidth="1.3" strokeLinejoin="round">
            <line x1="0" y1="25" x2="420" y2="25" />
            <path d="M0 25 L15 5 L30 25 L45 5 L60 25 L75 5 L90 25 L105 5 L120 25 L135 5 L150 25 L165 5 L180 25 L195 5 L210 25 L225 5 L240 25 L255 5 L270 25 L285 5 L300 25 L315 5 L330 25 L345 5 L360 25 L375 5 L390 25 L405 5 L420 25" />
            {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345, 375, 405].map((cx) => (
              <circle key={cx} cx={cx} cy="18" r="2.2" />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
});
