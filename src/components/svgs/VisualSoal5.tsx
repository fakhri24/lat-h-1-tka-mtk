import React from 'react';

export const VisualSoal5: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 820 470"
        className="w-full max-h-[80vh] h-auto select-none"
        role="img"
        aria-label="Rincian Paket Wisata 3 Hari 2 Malam: Wisata Alam dan Wisata Budaya"
      >
        {/* Top Header Badges */}
        <rect
          x="230"
          y="16"
          width="360"
          height="54"
          rx="14"
          fill="#fef08a"
          stroke="#ca8a04"
          strokeWidth="3"
        />
        <text x="410" y="51" textAnchor="middle" fill="#713f12" className="font-black text-[24px] tracking-wide">
          PAKET WISATA
        </text>

        <rect
          x="260"
          y="76"
          width="300"
          height="50"
          rx="12"
          fill="#b91c1c"
          stroke="#991b1b"
          strokeWidth="2.5"
        />
        <text x="410" y="109" textAnchor="middle" fill="#fef2f2" className="font-extrabold text-[22px] tracking-wide">
          3 HARI 2 MALAM
        </text>

        {/* Left Card: Wisata Alam */}
        <g transform="translate(30, 140)">
          <rect
            x="0"
            y="0"
            width="365"
            height="310"
            rx="20"
            fill="#fefce8"
            stroke="#ca8a04"
            strokeWidth="3"
          />
          <text x="182" y="42" textAnchor="middle" fill="#14532d" className="font-black text-[24px]">
            Wisata Alam
          </text>
          <text x="182" y="76" textAnchor="middle" fill="#1e293b" className="font-bold text-[20px]">
            1 lokasi durasi 4 jam
          </text>
          <text x="182" y="110" textAnchor="middle" fill="#0f172a" className="font-black text-[20px]">
            Harga 1 lokasi Rp300.000,00
          </text>

          {/* Mountain & Sun Illustration Frame */}
          <rect
            x="28"
            y="132"
            width="309"
            height="152"
            rx="14"
            fill="#bae6fd"
            stroke="#0284c7"
            strokeWidth="2"
          />
          {/* Sun */}
          <circle cx="282" cy="174" r="22" fill="#facc15" stroke="#eab308" strokeWidth="3" />
          {/* Mountains */}
          <polygon points="30,282 125,160 220,282" fill="#16a34a" />
          <polygon points="135,282 225,176 320,282" fill="#15803d" />
          <rect x="28" y="274" width="309" height="10" rx="4" fill="#166534" />
        </g>

        {/* Right Card: Wisata Budaya */}
        <g transform="translate(425, 140)">
          <rect
            x="0"
            y="0"
            width="365"
            height="310"
            rx="20"
            fill="#fefce8"
            stroke="#ca8a04"
            strokeWidth="3"
          />
          <text x="182" y="42" textAnchor="middle" fill="#7c2d12" className="font-black text-[24px]">
            Wisata Budaya
          </text>
          <text x="182" y="76" textAnchor="middle" fill="#1e293b" className="font-bold text-[20px]">
            1 lokasi durasi 2 jam
          </text>
          <text x="182" y="110" textAnchor="middle" fill="#0f172a" className="font-black text-[20px]">
            Harga 1 lokasi Rp100.000,00
          </text>

          {/* Cultural Building Illustration Frame */}
          <rect
            x="28"
            y="132"
            width="309"
            height="152"
            rx="14"
            fill="#ffedd5"
            stroke="#d97706"
            strokeWidth="2"
          />
          {/* Traditional Roof (Joglo/Pendopo) */}
          <polygon points="68,206 182,155 296,206" fill="#9a3412" stroke="#7c2d12" strokeWidth="2.5" />
          <rect x="92" y="206" width="180" height="68" fill="#fdba74" stroke="#9a3412" strokeWidth="2.5" />
          {/* Pillars */}
          <line x1="135" y1="206" x2="135" y2="274" stroke="#7c2d12" strokeWidth="4" />
          <line x1="182" y1="206" x2="182" y2="274" stroke="#7c2d12" strokeWidth="4" />
          <line x1="229" y1="206" x2="229" y2="274" stroke="#7c2d12" strokeWidth="4" />
          {/* Base step */}
          <rect x="65" y="274" width="234" height="8" rx="3" fill="#7c2d12" />
        </g>
      </svg>
    </div>
  );
};
