export function PegDolls({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flatlay-prop pointer-events-none absolute top-[360px] left-[920px] z-20 flex items-end select-none ${className}`}
    >
      <svg width="205" height="275" viewBox="0 0 215 285" fill="none" className="overflow-visible">
        <defs>
          <radialGradient id="peg-birchSkinHead" cx="38%" cy="35%" r="62%">
            <stop offset="0%" stopColor="#fbf0e2" />
            <stop offset="48%" stopColor="#f2d6b6" />
            <stop offset="82%" stopColor="#dfb58b" />
            <stop offset="100%" stopColor="#c69568" />
          </radialGradient>
          <linearGradient id="peg-brideSareeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#faf8f3" />
            <stop offset="52%" stopColor="#ebe5db" />
            <stop offset="100%" stopColor="#cbc2b4" />
          </linearGradient>
          <linearGradient id="peg-groomSuitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3a3f47" />
            <stop offset="46%" stopColor="#202328" />
            <stop offset="100%" stopColor="#111215" />
          </linearGradient>
          <filter id="peg-pegDollShadow" x="-20%" y="-10%" width="155%" height="135%">
            <feDropShadow dx="8" dy="14" stdDeviation="9" floodColor="#443728" floodOpacity="0.32" />
          </filter>
        </defs>

        <g transform="translate(92, 12)" filter="url(#peg-pegDollShadow)">
          <circle cx="52" cy="44" r="32" fill="url(#peg-birchSkinHead)" stroke="#c79a70" strokeWidth="0.6" />
          <path d="M20 40 C20 12, 84 12, 84 40 C76 23, 30 23, 20 40 Z" fill="#231f1e" />
          <circle cx="38" cy="43" r="2.2" fill="#1d1a18" />
          <circle cx="58" cy="43" r="2.2" fill="#1d1a18" />
          <path d="M47 45 Q46 49 48 50" stroke="#b9875b" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <path d="M43 55 Q48 60 54 55" stroke="#6e3f2b" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="31" cy="50" r="3.8" fill="#df8879" opacity="0.38" />
          <circle cx="65" cy="50" r="3.8" fill="#df8879" opacity="0.38" />
          <rect x="33" y="73" width="38" height="7" rx="3.5" fill="#cfa278" />
          <path
            d="M17 85 C17 77, 87 77, 87 85 L92 232 C92 239, 12 239, 12 232 Z"
            fill="url(#peg-groomSuitGrad)"
          />
          <path d="M38 79 L49 114 L60 79 Z" fill="#f7f4ee" />
          <path d="M43 85 L55 90 L55 80 L43 90 Z" fill="#141518" />
          <path d="M36 79 L49 116 L31 102 L38 94 Z" stroke="#b8bec8" strokeWidth="1.2" fill="none" />
          <path d="M62 79 L49 116 L67 102 L60 94 Z" stroke="#b8bec8" strokeWidth="1.2" fill="none" />
          <polygon points="65,116 76,114 74,121 64,122" fill="#f5f2ec" />
          <circle cx="49" cy="128" r="1.8" fill="#d4d9e0" />
          <circle cx="49" cy="144" r="1.8" fill="#d4d9e0" />
          <path d="M74 104 C82 128, 82 152, 62 158" stroke="#b8bec8" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        </g>

        <g transform="translate(8, 52)" filter="url(#peg-pegDollShadow)">
          <circle cx="46" cy="15" r="13" fill="#1e1b1a" />
          <path d="M36 22 Q46 19 56 22" stroke="#c89f54" strokeWidth="1.6" fill="none" />
          <circle cx="46" cy="44" r="30" fill="url(#peg-birchSkinHead)" stroke="#c79a70" strokeWidth="0.6" />
          <path d="M16 44 C15 16, 77 16, 76 44 C68 28, 52 26, 46 31 C40 26, 24 28, 16 44 Z" fill="#1e1b1a" />
          <circle cx="47" cy="35" r="1.3" fill="#9e3d3d" />
          <circle cx="38" cy="45" r="2.1" fill="#1a1716" />
          <circle cx="56" cy="45" r="2.1" fill="#1a1716" />
          <circle cx="31" cy="52" r="3.8" fill="#e28778" opacity="0.48" />
          <circle cx="62" cy="52" r="3.8" fill="#e28778" opacity="0.48" />
          <path d="M43 56 Q47 61 52 56" stroke="#a63f3f" strokeWidth="2" strokeLinecap="round" fill="none" />
          <rect x="29" y="72" width="34" height="6" rx="3" fill="#cfa278" />
          <path
            d="M15 83 C15 76, 77 76, 77 83 L83 206 C83 213, 9 213, 9 206 Z"
            fill="url(#peg-brideSareeGrad)"
          />
          <path d="M31 79 Q46 92 61 79" stroke="#b59254" strokeWidth="1.8" fill="none" />
          <path d="M27 81 Q46 99 65 81" stroke="#b59254" strokeWidth="1.2" fill="none" />
          <path d="M20 82 L72 138 L12 178" stroke="#968d80" strokeWidth="1.4" fill="none" />
          <path d="M26 80 L76 132" stroke="#968d80" strokeWidth="1" fill="none" />
          <g stroke="#8e8579" strokeWidth="1.1" fill="none">
            <circle cx="32" cy="145" r="7" />
            <circle cx="32" cy="145" r="3" />
            <circle cx="54" cy="168" r="8" />
            <circle cx="54" cy="168" r="3.5" />
            <path d="M18 192 Q32 182 46 192 T74 192" />
            <path d="M16 199 Q32 189 46 199 T76 199" />
          </g>
          <g transform="translate(56, 126)">
            <circle cx="0" cy="0" r="13" fill="#6f8263" />
            <circle cx="-4" cy="-3" r="4.5" fill="#ffffff" />
            <circle cx="4" cy="-4" r="4" fill="#f2ede4" />
            <circle cx="0" cy="4" r="4.5" fill="#ffffff" />
            <circle cx="6" cy="3" r="3.5" fill="#d4b475" />
            <circle cx="-5" cy="4" r="3" fill="#8fa382" />
          </g>
        </g>
      </svg>
    </div>
  );
}
