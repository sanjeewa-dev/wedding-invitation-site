export function CakeBox({
  bride,
  groom,
  className = "",
}: {
  bride: string;
  groom: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`flatlay-prop box-shadow-deep absolute top-[8px] left-[38px] z-20 h-[205px] w-[205px] select-none rounded-[2px] border border-[#ded5c7] bg-[#faf7f2] p-[14px] ${className}`}
    >
      <div className="envelope-texture relative flex h-full w-full flex-col items-center justify-center overflow-hidden border border-[#c59b3e]/65 px-3 text-center shadow-inner">
        <svg className="absolute -top-2 -right-2 h-20 w-20 opacity-95" viewBox="0 0 160 160" fill="none">
          <g stroke="url(#metallicGoldFoil)" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
            <path d="M95 125 C95 95, 110 65, 125 45 C128 72, 120 102, 95 125 Z" />
            <path d="M95 125 C82 95, 85 62, 98 38 C108 65, 107 96, 95 125 Z" />
            <path d="M95 125 C72 102, 65 72, 74 48 C88 70, 93 98, 95 125 Z" />
            <path d="M95 125 C112 104, 134 86, 150 75 C138 98, 118 115, 95 125 Z" />
            <path d="M95 125 L82 155" />
          </g>
        </svg>

        <svg className="absolute -bottom-3 -left-3 h-20 w-20 opacity-95" viewBox="0 0 160 160" fill="none">
          <g stroke="url(#metallicGoldFoil)" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round">
            <path d="M65 125 C65 92, 52 60, 38 38 C56 58, 68 90, 65 125 Z" />
            <path d="M65 125 C75 90, 74 56, 62 32 C50 58, 52 92, 65 125 Z" />
            <path d="M65 125 C88 98, 96 68, 86 44 C72 68, 67 96, 65 125 Z" />
            <path d="M65 125 L78 156" />
          </g>
        </svg>

        <div className="relative z-10 leading-tight text-[#8a6418]">
          <p className="font-[family-name:var(--font-foil)] text-[14.5px] font-semibold uppercase tracking-[0.07em]">
            <span className="font-[family-name:var(--font-foil-decor)] inline-block text-[1.28em]">
              {bride.charAt(0)}
            </span>
            {bride.slice(1)}
          </p>
          <p className="my-0.5 text-[7px] font-semibold uppercase tracking-[0.28em]">
            and
          </p>
          <p className="font-[family-name:var(--font-foil)] text-[12.5px] font-semibold uppercase tracking-[0.07em]">
            <span className="font-[family-name:var(--font-foil-decor)] inline-block text-[1.28em]">
              {groom.charAt(0)}
            </span>
            {groom.slice(1)}
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute top-[6px] -right-[5px] bottom-[-5px] w-[5px] border-r border-b border-[#b8ad9d] bg-gradient-to-b from-[#e4ddd1] to-[#c9bfb0]" />
      <div className="pointer-events-none absolute -bottom-[5px] left-[6px] right-[-5px] h-[5px] border-b border-[#b8ad9d] bg-gradient-to-r from-[#dfd7ca] to-[#c4b9a9]" />
    </div>
  );
}
