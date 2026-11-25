import { forwardRef } from "react";
import { formatWeddingDate } from "@/lib/format";
import { dict } from "@/lib/i18n/dictionaries";
import type { WeddingSettings } from "@/lib/types";
import { format, parseISO } from "date-fns";

function formatInviteDate(date: string) {
  try {
    return format(
      parseISO(date),
      "'ON' EEEE, 'THE' do 'OF' MMMM yyyy",
    ).toUpperCase();
  } catch {
    return formatWeddingDate(date).toUpperCase();
  }
}

function SwashName({ name, className }: { name: string; className?: string }) {
  const initial = name.charAt(0);
  const rest = name.slice(1);
  return (
    <span className={className}>
      <span className="swash-initial">{initial}</span>
      {rest}
    </span>
  );
}

function LotusPetalBorder() {
  return (
    <svg className="h-7 w-full" viewBox="0 0 420 28" fill="none" preserveAspectRatio="none" aria-hidden>
      <g stroke="url(#metallicGoldHorizontal)" strokeWidth="1.3" strokeLinejoin="round">
        <line x1="0" y1="25" x2="420" y2="25" />
        <path d="M0 25 L15 5 L30 25 L45 5 L60 25 L75 5 L90 25 L105 5 L120 25 L135 5 L150 25 L165 5 L180 25 L195 5 L210 25 L225 5 L240 25 L255 5 L270 25 L285 5 L300 25 L315 5 L330 25 L345 5 L360 25 L375 5 L390 25 L405 5 L420 25" />
        {[11, 41, 71, 101, 131, 161, 191, 221, 251, 281, 311, 341, 371, 401].map((x) => (
          <path
            key={x}
            d={`M${x} 25 C${x} 17, ${x + 4} 13, ${x + 4} 13 C${x + 4} 13, ${x + 8} 17, ${x + 8} 25`}
          />
        ))}
      </g>
    </svg>
  );
}

export const InviteCard = forwardRef<
  HTMLElement,
  {
    settings: WeddingSettings;
    bride: string;
    groom: string;
    className?: string;
    onCardClick?: () => void;
  }
>(function InviteCard(
  { settings, bride, groom, className = "", onCardClick },
  ref,
) {
  return (
    <article
      ref={ref}
      onClick={onCardClick}
      title={onCardClick ? "Click to toggle Flat Lay / Card Focus" : undefined}
      className={`invite-paper invite-flatlay stationery-dimensions absolute top-[252px] left-[404px] z-30 flex cursor-pointer flex-col justify-between overflow-hidden rounded-[2px] border border-[#d6cdc0] px-10 pt-9 pb-5 text-center ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-stone-900/10"
        aria-hidden
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute -top-2 -right-3 h-40 w-40 opacity-95"
        viewBox="0 0 180 180"
        fill="none"
      >
        <g stroke="url(#metallicGoldFoil)" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <path d="M112 132 C112 96, 128 60, 146 34 C150 66, 140 104, 112 132 Z" />
          <path d="M112 132 C98 96, 102 56, 118 26 C130 58, 128 96, 112 132 Z" />
          <path d="M112 132 C86 104, 78 68, 90 38 C106 64, 111 98, 112 132 Z" />
          <path d="M112 132 C132 108, 158 88, 178 76 C164 102, 140 122, 112 132 Z" />
          <path d="M112 132 C78 118, 56 96, 48 74 C74 86, 96 108, 112 132 Z" />
          <path d="M112 132 C138 122, 162 114, 176 112 C158 126, 134 132, 112 132 Z" />
          <path d="M115 124 Q128 84 142 46" strokeWidth="0.75" opacity="0.75" />
          <path d="M112 124 Q112 80 118 36" strokeWidth="0.75" opacity="0.75" />
          <path d="M109 124 Q94 84 92 48" strokeWidth="0.75" opacity="0.75" />
          <path d="M112 132 L96 172" strokeWidth="1.5" />
        </g>
      </svg>

      <svg
        aria-hidden
        className="pointer-events-none absolute top-[26%] -left-4 h-40 w-40 opacity-95"
        viewBox="0 0 180 180"
        fill="none"
      >
        <g stroke="url(#metallicGoldFoil)" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
          <path d="M68 134 C68 96, 52 58, 34 32 C54 56, 68 94, 68 134 Z" />
          <path d="M68 134 C82 94, 80 54, 64 24 C50 56, 52 94, 68 134 Z" />
          <path d="M68 134 C94 104, 104 68, 92 38 C76 64, 70 98, 68 134 Z" />
          <path d="M68 134 C46 110, 22 90, 4 78 C18 104, 42 122, 68 134 Z" />
          <path d="M68 134 C102 118, 124 96, 132 74 C106 86, 84 108, 68 134 Z" />
          <path d="M68 134 C42 124, 18 116, 4 114 C22 128, 46 134, 68 134 Z" />
          <path d="M65 126 Q52 84 38 44" strokeWidth="0.75" opacity="0.75" />
          <path d="M68 126 Q68 80 64 34" strokeWidth="0.75" opacity="0.75" />
          <path d="M71 126 Q86 84 90 48" strokeWidth="0.75" opacity="0.75" />
          <path d="M68 134 L84 174" strokeWidth="1.5" />
        </g>
      </svg>

      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-2.5 text-[10.5px] font-medium uppercase tracking-[0.23em] text-[#4a3b2b]">
          {dict.home.youAreInvited}
        </p>

        <h1 className="my-1 select-text">
          <SwashName name={bride} className="couple-name block text-[38px]" />
          <span className="my-1 block text-[10.5px] font-semibold uppercase tracking-[0.34em] text-[#9e7322]">
            and
          </span>
          <SwashName name={groom} className="couple-name block text-[33px]" />
        </h1>

        <p className="mt-2.5 text-[10.5px] font-medium uppercase tracking-[0.21em] text-[#453728]">
          {dict.togetherWith}
        </p>

        <div className="mt-3.5 space-y-1.5 text-[#382c20]">
          <div>
            <p className="font-invite-serif text-[21px] font-semibold tracking-[0.06em] text-[#8f671c]">
              {bride}
            </p>
            <p className="text-[11px] tracking-[0.08em] text-[#47392b]">
              {settings.bride_parents}
            </p>
          </div>

          <div className="font-invite-serif py-0 text-[16px] italic text-[#b08328]">&amp;</div>

          <div>
            <p className="font-invite-serif text-[21px] font-semibold tracking-[0.06em] text-[#8f671c]">
              {groom}
            </p>
            <p className="text-[11px] tracking-[0.08em] text-[#47392b]">
              {settings.groom_parents}
            </p>
          </div>

          <p className="pt-2 text-[11px] font-medium uppercase tracking-[0.13em] text-[#433527]">
            {dict.joyfullyInvite}
          </p>
        </div>

        <div className="relative my-3.5 w-full max-w-[385px] py-2">
          <div className="mb-2 h-px w-full bg-gradient-to-r from-[#9e7322] via-[#e2bf58] to-[#9e7322]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.17em] text-[#5c4119]">
            {formatInviteDate(settings.wedding_date)}
          </p>
          <div className="mt-2 h-px w-full bg-gradient-to-r from-[#9e7322] via-[#e2bf58] to-[#9e7322]" />
        </div>

        <div className="max-w-[385px] space-y-1.5">
          <p className="text-[11.5px] font-medium uppercase leading-relaxed tracking-[0.14em] text-[#463829]">
            AT ROYAL BANQUET HALL
          </p>
          <p className="text-[11.5px] font-medium uppercase leading-relaxed tracking-[0.14em] text-[#463829]">
            ELLA Flower Garden Resort
          </p>
          <p className="pt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#463829]">
            From 10:30 AM ONWARDS
          </p>
          <p className="pt-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#8a6418]">
            RSVP (REGRETS ONLY)
          </p>
          <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-[#463829]">
            BRIDE - 0713736261
            <span className="mx-1.5 opacity-50" aria-hidden>
              |
            </span>
            GROOM - 0772697028
          </p>
        </div>
      </div>

      <div aria-hidden className="relative z-10 mt-auto w-full pt-4 opacity-95">
        <LotusPetalBorder />
      </div>
    </article>
  );
});
