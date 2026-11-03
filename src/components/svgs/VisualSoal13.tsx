import React from 'react';

export const VisualSoal13: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 820 520"
        className="w-full max-h-[80vh] h-auto select-none"
        role="img"
        aria-label="Pengamatan Kupu-kupu pada Bunga A dan Bunga B"
      >
        <clipPath id="bunga-clip">
          <rect x="10" y="10" width="800" height="500" rx="22" />
        </clipPath>

        <g clipPath="url(#bunga-clip)">
          <image
            href={`${import.meta.env.BASE_URL}images/soal-13-bunga.jpg`}
            x="10"
            y="10"
            width="800"
            height="500"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Center divider to separate Panel A & Panel B cleanly */}
          <line x1="410" y1="10" x2="410" y2="510" stroke="#ffffff" strokeWidth="10" />
          <line x1="410" y1="10" x2="410" y2="510" stroke="#334155" strokeWidth="3" />

          {/* Badge Bunga A */}
          <rect
            x="235"
            y="34"
            width="148"
            height="48"
            rx="10"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="2.5"
          />
          <text x="309" y="65" textAnchor="middle" fill="#0f172a" className="font-black text-[22px]">
            Bunga A
          </text>

          {/* Badge Bunga B */}
          <rect
            x="635"
            y="34"
            width="148"
            height="48"
            rx="10"
            fill="#ffffff"
            stroke="#1e293b"
            strokeWidth="2.5"
          />
          <text x="709" y="65" textAnchor="middle" fill="#0f172a" className="font-black text-[22px]">
            Bunga B
          </text>
        </g>

        <rect
          x="10"
          y="10"
          width="800"
          height="500"
          rx="22"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-400"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};
