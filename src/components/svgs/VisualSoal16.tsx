import React from 'react';

export const VisualSoal16: React.FC = () => {
  // Exact coordinates aligned with water stream in soal-16-pemadam.jpg (1200x900):
  // Brass hose nozzle tip in firefighter's hands: (552, 650)
  // Water jet hitting the upper window flame: (1065, 222)
  // Right-angle corner on building wall: (1065, 650)
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 1200 900"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Ilustrasi Pemadam Kebakaran Menyemprotkan Air dengan Sudut Elevasi 60 Derajat"
      >
        <clipPath id="pemadam-clip">
          <rect x="12" y="12" width="1176" height="876" rx="28" />
        </clipPath>

        <g clipPath="url(#pemadam-clip)">
          <image
            href={`${import.meta.env.BASE_URL}images/soal-16-pemadam.jpg`}
            x="12"
            y="12"
            width="1176"
            height="876"
            preserveAspectRatio="xMidYMid slice"
          />

          {/* Horizontal dashed base from nozzle (552, 650) to building vertical line (1065, 650) */}
          <line
            x1="552"
            y1="650"
            x2="1065"
            y2="650"
            stroke="#0f172a"
            strokeWidth="5.5"
            strokeDasharray="14 10"
          />

          {/* Vertical dashed height line from (1065, 650) to target window (1065, 222) */}
          <line
            x1="1065"
            y1="650"
            x2="1065"
            y2="222"
            stroke="#fde047"
            strokeWidth="5.5"
            strokeDasharray="14 10"
          />

          {/* Hypotenuse line r right along water stream */}
          <line
            x1="552"
            y1="650"
            x2="1065"
            y2="222"
            stroke="#0284c7"
            strokeWidth="6"
            strokeDasharray="16 10"
          />

          {/* Right Angle Marker at (1065, 650) */}
          <rect x="1033" y="618" width="32" height="32" fill="#0f172a" stroke="#ffffff" strokeWidth="2" />

          {/* Angle Arc 60 deg at (552, 650) */}
          <path
            d="M 652 650 A 100 100 0 0 0 628 586"
            fill="rgba(254, 240, 138, 0.72)"
            stroke="#0f172a"
            strokeWidth="4.5"
          />
          <rect
            x="662"
            y="584"
            width="88"
            height="48"
            rx="10"
            fill="rgba(255,255,255,0.95)"
            stroke="#0f172a"
            strokeWidth="2.5"
          />
          <text x="706" y="618" textAnchor="middle" fill="#0f172a" className="font-black text-[30px]">
            60°
          </text>

          {/* Nozzle Point & Label "Ujung selang" */}
          <circle cx="552" cy="650" r="11" fill="#ef4444" stroke="#ffffff" strokeWidth="3.5" />
          <rect
            x="447"
            y="672"
            width="210"
            height="52"
            rx="12"
            fill="rgba(255, 255, 255, 0.96)"
            stroke="#0f172a"
            strokeWidth="3"
          />
          <text x="552" y="707" textAnchor="middle" fill="#0f172a" className="font-black text-[28px]">
            Ujung selang
          </text>

          {/* Hypotenuse Label "r" */}
          <rect
            x="735"
            y="365"
            width="64"
            height="54"
            rx="12"
            fill="rgba(255, 255, 255, 0.95)"
            stroke="#0284c7"
            strokeWidth="3"
          />
          <text x="767" y="402" textAnchor="middle" fill="#0369a1" className="italic font-black text-[34px]">
            r
          </text>

          {/* Height Label "h = 3√3 m" */}
          <rect
            x="815"
            y="435"
            width="235"
            height="62"
            rx="12"
            fill="rgba(15, 23, 42, 0.94)"
            stroke="#facc15"
            strokeWidth="3"
          />
          <text x="932" y="476" textAnchor="middle" fill="#fef08a" className="font-black text-[30px]">
            h = 3√3 m
          </text>
        </g>

        <rect
          x="12"
          y="12"
          width="1176"
          height="876"
          rx="28"
          fill="none"
          className="stroke-slate-700 dark:stroke-slate-400"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};
