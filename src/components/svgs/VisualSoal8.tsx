import React from 'react';

export const VisualSoal8: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 840 530"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Meja Barista: Coffee Latte, Cappuccino, Mochaccino, dan Wadah Susu, Coklat Bubuk 400 ML, Biji Kopi"
      >
        <clipPath id="barista-clip">
          <rect x="8" y="8" width="824" height="514" rx="22" />
        </clipPath>

        <g clipPath="url(#barista-clip)">
          <image
            href={`${import.meta.env.BASE_URL}images/soal-8-barista.jpg`}
            x="8"
            y="8"
            width="824"
            height="514"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Top Dark Menu Board Overlay */}
          <rect
            x="38"
            y="24"
            width="764"
            height="135"
            rx="16"
            fill="rgba(30, 18, 12, 0.92)"
            stroke="#b45309"
            strokeWidth="3"
          />

          {/* Column 1: Coffee Latte */}
          <text x="170" y="68" textAnchor="middle" fill="#fef3c7" className="italic font-black text-[22px]">
            Coffee Latte
          </text>
          <text x="170" y="106" textAnchor="middle" fill="#fde68a" className="font-bold text-[15px]">
            1 Kopi + 4 Susu (250 mL)
          </text>

          <line x1="300" y1="42" x2="300" y2="140" stroke="#78350f" strokeWidth="2" />

          {/* Column 2: Cappuccino */}
          <text x="420" y="68" textAnchor="middle" fill="#fef3c7" className="italic font-black text-[22px]">
            Cappuccino
          </text>
          <text x="420" y="106" textAnchor="middle" fill="#fde68a" className="font-bold text-[15px]">
            1 Kopi + 2 Susu (190 mL)
          </text>

          <line x1="540" y1="42" x2="540" y2="140" stroke="#78350f" strokeWidth="2" />

          {/* Column 3: Mochaccino */}
          <text x="670" y="68" textAnchor="middle" fill="#fef3c7" className="italic font-black text-[22px]">
            Mochaccino
          </text>
          <text x="670" y="106" textAnchor="middle" fill="#fde68a" className="font-bold text-[15px]">
            1 Kopi + 1 Susu + 2 Cokelat
          </text>

          {/* Container Labels at the Bottom */}
          {/* Left: SUSU */}
          <rect
            x="148"
            y="345"
            width="155"
            height="64"
            rx="12"
            fill="rgba(255, 255, 255, 0.95)"
            stroke="#475569"
            strokeWidth="2.5"
          />
          <text x="225" y="385" textAnchor="middle" fill="#0f172a" className="font-black text-[22px] tracking-wider">
            SUSU
          </text>

          {/* Center: COKLAT BUBUK 400 ML */}
          <rect
            x="325"
            y="330"
            width="205"
            height="86"
            rx="12"
            fill="rgba(69, 26, 3, 0.95)"
            stroke="#f59e0b"
            strokeWidth="3"
          />
          <text x="427" y="366" textAnchor="middle" fill="#fef3c7" className="font-extrabold text-[18px] tracking-wide">
            COKLAT BUBUK
          </text>
          <text x="427" y="398" textAnchor="middle" fill="#fbbf24" className="font-black text-[24px]">
            400 ML
          </text>

          {/* Right: BIJI KOPI */}
          <rect
            x="558"
            y="345"
            width="170"
            height="64"
            rx="12"
            fill="rgba(15, 41, 56, 0.95)"
            stroke="#38bdf8"
            strokeWidth="2.5"
          />
          <text x="643" y="385" textAnchor="middle" fill="#f0f9ff" className="font-black text-[21px] tracking-wide">
            BIJI KOPI
          </text>
        </g>

        <rect
          x="8"
          y="8"
          width="824"
          height="514"
          rx="22"
          fill="none"
          className="stroke-slate-300 dark:stroke-slate-700"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};
