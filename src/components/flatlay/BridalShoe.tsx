export function BridalShoe({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`flatlay-prop pointer-events-none absolute top-0 left-[530px] z-20 select-none ${className}`}
    >
      <svg width="235" height="255" viewBox="0 0 245 265" fill="none" className="overflow-visible">
        <defs>
          <linearGradient id="satinSole" x1="15%" y1="0%" x2="88%" y2="100%">
            <stop offset="0%" stopColor="#f7f2ea" />
            <stop offset="38%" stopColor="#e5dccf" />
            <stop offset="72%" stopColor="#cfc3b2" />
            <stop offset="100%" stopColor="#b5a794" />
          </linearGradient>
          <linearGradient id="footbedInner" x1="0%" y1="0%" x2="100%" y2="85%">
            <stop offset="0%" stopColor="#ede5d9" />
            <stop offset="55%" stopColor="#dfd5c6" />
            <stop offset="100%" stopColor="#c9bdaa" />
          </linearGradient>
          <linearGradient id="silkStrap" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c7bba9" />
            <stop offset="28%" stopColor="#f5efe6" />
            <stop offset="55%" stopColor="#e2d8c9" />
            <stop offset="82%" stopColor="#f8f3eb" />
            <stop offset="100%" stopColor="#bfb29f" />
          </linearGradient>
          <linearGradient id="crystalFacet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="35%" stopColor="#e4ebf2" />
            <stop offset="70%" stopColor="#9aa5b4" />
            <stop offset="100%" stopColor="#f7fbff" />
          </linearGradient>
          <filter id="shoeDropShadow" x="-25%" y="-15%" width="160%" height="150%">
            <feDropShadow dx="10" dy="16" stdDeviation="11" floodColor="#483b2c" floodOpacity="0.3" />
          </filter>
          <filter id="crystalShadow" x="-20%" y="-20%" width="145%" height="165%">
            <feDropShadow dx="1.5" dy="3.5" stdDeviation="2.2" floodColor="#3a2f22" floodOpacity="0.38" />
          </filter>
        </defs>

        <g transform="rotate(6 122 130)" filter="url(#shoeDropShadow)">
          <path
            d="M72 -12 C66 28, 54 74, 52 116 C50 158, 56 200, 70 225 C80 241, 102 247, 124 246 C146 245, 166 237, 175 219 C186 194, 190 152, 188 110 C186 68, 174 24, 168 -12 Z"
            fill="url(#satinSole)"
            stroke="#b7aa97"
            strokeWidth="1"
          />
          <path
            d="M77 -10 C71 30, 60 75, 58 116 C56 156, 62 195, 75 218 C84 233, 103 239, 124 238 C144 237, 161 229, 169 213 C179 190, 183 150, 181 110 C179 70, 168 26, 162 -10 Z"
            fill="url(#footbedInner)"
            stroke="#9e907d"
            strokeWidth="0.9"
            strokeDasharray="2.4 2.2"
          />
          <ellipse cx="120" cy="46" rx="34" ry="50" fill="#d5c9b8" opacity="0.35" />
          <path d="M68 180 Q120 192 172 180" stroke="#b6a895" strokeWidth="0.9" fill="none" opacity="0.65" />
          <path
            d="M47 128 Q120 144 193 128 L190 163 Q120 179 50 163 Z"
            fill="url(#silkStrap)"
            stroke="#b3a592"
            strokeWidth="0.9"
          />
          <path d="M52 139 Q120 154 188 139" stroke="#b5a794" strokeWidth="0.7" opacity="0.55" fill="none" />
          <path d="M51 152 Q120 167 189 152" stroke="#ffffff" strokeWidth="0.8" opacity="0.65" fill="none" />

          <g filter="url(#crystalShadow)">
            <polygon points="56,140 65,130 71,142 62,152" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <polygon points="69,145 79,133 85,147 75,158" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <polygon points="83,148 94,136 100,150 89,161" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <polygon points="98,150 110,137 117,152 105,164" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <polygon points="114,151 126,138 132,153 120,165" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <polygon points="130,150 142,137 148,151 136,163" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <polygon points="146,147 157,134 163,148 152,160" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <polygon points="161,143 171,131 177,144 167,156" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <polygon points="175,139 184,128 189,140 180,151" fill="url(#crystalFacet)" stroke="#7c8796" strokeWidth="0.6" />
            <circle cx="78" cy="141" r="1.4" fill="#ffffff" />
            <circle cx="109" cy="144" r="1.7" fill="#ffffff" />
            <circle cx="125" cy="145" r="1.6" fill="#ffffff" />
            <circle cx="156" cy="141" r="1.4" fill="#ffffff" />
          </g>
        </g>
      </svg>
    </div>
  );
}
