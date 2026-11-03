import React from 'react';

const HexCageBase: React.FC<{ offsetX: number; showAccessories: boolean }> = ({
  offsetX,
  showAccessories,
}) => {
  // Regular hexagonal prism birdcage centered around offsetX + 185
  // Top hexagon vertices:
  // Back-left (115, 75), Back-right (255, 75)
  // Mid-left (65, 110), Mid-right (305, 110)
  // Front-left (115, 145), Front-right (255, 145)
  // Bottom hexagon vertices (Y + 250):
  // Back-left (115, 325), Back-right (255, 325)
  // Mid-left (65, 360), Mid-right (305, 360)
  // Front-left (115, 395), Front-right (255, 395)
  const x = (v: number) => offsetX + v;

  return (
    <g>
      {/* Floor Base (Sandy yellow hexagon) */}
      <polygon
        points={`${x(115)},325 ${x(255)},325 ${x(305)},360 ${x(255)},395 ${x(115)},395 ${x(65)},360`}
        fill="#fde68a"
        stroke="#1e293b"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Subtle Wire Mesh Vertical Bars */}
      {[82, 98, 135, 155, 175, 195, 215, 235, 272, 288].map((vx, i) => (
        <line
          key={`vw-${i}`}
          x1={x(vx)}
          y1={vx < 115 || vx > 255 ? 95 : 75}
          x2={x(vx)}
          y2={vx < 115 || vx > 255 ? 375 : 395}
          stroke="#94a3b8"
          strokeWidth="0.9"
          strokeOpacity="0.65"
        />
      ))}

      {/* Subtle Wire Mesh Horizontal Rings */}
      {[175, 215, 255, 295, 335].map((hy, i) => (
        <polyline
          key={`hw-${i}`}
          points={`${x(65)},${hy - 20} ${x(115)},${hy} ${x(255)},${hy} ${x(305)},${hy - 20}`}
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1"
          strokeOpacity="0.65"
        />
      ))}

      {/* Back Vertical Pillars */}
      <line x1={x(115)} y1="75" x2={x(115)} y2="325" stroke="#334155" strokeWidth="2.5" />
      <line x1={x(255)} y1="75" x2={x(255)} y2="325" stroke="#334155" strokeWidth="2.5" />

      {/* Outer Left & Right Vertical Pillars */}
      <line x1={x(65)} y1="110" x2={x(65)} y2="360" stroke="#0f172a" strokeWidth="3.5" />
      <line x1={x(305)} y1="110" x2={x(305)} y2="360" stroke="#0f172a" strokeWidth="3.5" />

      {/* Top Hexagon Frame */}
      <polygon
        points={`${x(115)},75 ${x(255)},75 ${x(305)},110 ${x(255)},145 ${x(115)},145 ${x(65)},110`}
        fill="none"
        stroke="#0f172a"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Birdhouse on top-left inside Gambar 2 */}
      {showAccessories && (
        <g>
          <polygon
            points={`${x(118)},145 ${x(142)},120 ${x(166)},145`}
            fill="#78350f"
            stroke="#451a03"
            strokeWidth="2"
          />
          <rect
            x={x(124)}
            y="145"
            width="36"
            height="30"
            fill="#b45309"
            stroke="#451a03"
            strokeWidth="2"
          />
          <circle cx={x(142)} cy="160" r="6" fill="#1e293b" />
        </g>
      )}

      {/* Initial Perch Stick (Batang kayu awal) - Slanted from upper-left to mid-right */}
      <line
        x1={x(138)}
        y1="148"
        x2={x(252)}
        y2="215"
        stroke="#78350f"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <line
        x1={x(138)}
        y1="148"
        x2={x(252)}
        y2="215"
        stroke="#b45309"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Accessories in Gambar 2 */}
      {showAccessories && (
        <g>
          {/* Ladder (Tangga) intersecting Batang kayu awal at (156, 158) down to (250, 365) */}
          <line
            x1={x(152)}
            y1="156"
            x2={x(244)}
            y2="368"
            stroke="#b45309"
            strokeWidth="3.5"
          />
          <line
            x1={x(164)}
            y1="162"
            x2={x(256)}
            y2="368"
            stroke="#b45309"
            strokeWidth="3.5"
          />
          {[0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84].map((t, idx) => {
            const lx = 152 + t * (244 - 152);
            const ly = 156 + t * (368 - 156);
            const rx = 164 + t * (256 - 164);
            const ry = 162 + t * (368 - 162);
            return (
              <line
                key={idx}
                x1={x(lx)}
                y1={ly}
                x2={x(rx)}
                y2={ry}
                stroke="#92400e"
                strokeWidth="2.6"
              />
            );
          })}

          {/* Additional Perch Stick (Batang kayu tambahan) - Horizontal, parallel to Neon Lamp & skew to initial stick */}
          <line
            x1={x(85)}
            y1="268"
            x2={x(285)}
            y2="268"
            stroke="#78350f"
            strokeWidth="7.5"
            strokeLinecap="round"
          />
          <line
            x1={x(85)}
            y1="268"
            x2={x(285)}
            y2="268"
            stroke="#d97706"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Water Container (Wadah minum) on Left-Front Wall */}
          <polygon
            points={`${x(82)},332 ${x(110)},350 ${x(110)},372 ${x(82)},354`}
            fill="#38bdf8"
            stroke="#0284c7"
            strokeWidth="2"
          />
          <ellipse cx={x(96)} cy="342" rx="11" ry="5" fill="#0ea5e9" />

          {/* Food Container (Wadah pakan) on Right-Front Wall (separated by 1 front door wall) */}
          <polygon
            points={`${x(260)},350 ${x(288)},332 ${x(288)},354 ${x(260)},372`}
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="2"
          />
          <ellipse cx={x(274)} cy="342" rx="11" ry="5" fill="#f59e0b" />
        </g>
      )}

      {/* Front Door Frame (Silver/Grey border on the front wall) */}
      <rect
        x={x(115)}
        y="145"
        width="140"
        height="250"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="6"
      />
      <rect
        x={x(115)}
        y="145"
        width="140"
        height="250"
        fill="none"
        stroke="#1e293b"
        strokeWidth="1.8"
      />

      {/* Neon Tube Lamp at Top Front (Lampu neon) - Horizontal */}
      <rect
        x={x(95)}
        y="106"
        width="180"
        height="13"
        rx="6"
        fill={showAccessories ? '#fef9c3' : '#e2e8f0'}
        stroke="#475569"
        strokeWidth="2.2"
      />
      <rect x={x(92)} y="106" width="8" height="13" rx="2" fill="#64748b" />
      <rect x={x(270)} y="106" width="8" height="13" rx="2" fill="#64748b" />
    </g>
  );
};

export const VisualPaket2Soal23: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 860 465"
        className="w-full max-h-[82vh] h-auto select-none"
        role="img"
        aria-label="Gambar 1 dan Gambar 2 Sangkar Burung Prisma Segienam Beraturan beserta Aksesorisnya"
      >
        <rect
          x="6"
          y="6"
          width="848"
          height="453"
          rx="20"
          className="fill-white dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        <defs>
          <marker
            id="arrow-p2s23"
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="5.5"
            markerHeight="5.5"
            orient="auto"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" className="fill-slate-900 dark:fill-slate-100" />
          </marker>
        </defs>

        {/* Left Cage: Gambar 1 */}
        <HexCageBase offsetX={35} showAccessories={false} />
        <text
          x="220"
          y="436"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[21px]"
        >
          Gambar 1
        </text>

        {/* Pointer: Batang kayu awal on Gambar 1 */}
        <text
          x="52"
          y="156"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[15px]"
        >
          Batang
        </text>
        <text
          x="52"
          y="174"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[15px]"
        >
          kayu awal
        </text>
        <line
          x1="92"
          y1="162"
          x2="182"
          y2="168"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          markerEnd="url(#arrow-p2s23)"
        />

        {/* Divider Line */}
        <line
          x1="395"
          y1="28"
          x2="395"
          y2="438"
          className="stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="2"
        />

        {/* Right Cage: Gambar 2 */}
        <HexCageBase offsetX={410} showAccessories={true} />
        <text
          x="595"
          y="436"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-black text-[21px]"
        >
          Gambar 2
        </text>

        {/* Pointers on Gambar 2 */}
        {/* 1. Lampu neon */}
        <text
          x="765"
          y="50"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[15px]"
        >
          Lampu
        </text>
        <text
          x="765"
          y="68"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[15px]"
        >
          neon
        </text>
        <line
          x1="734"
          y1="62"
          x2="678"
          y2="102"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          markerEnd="url(#arrow-p2s23)"
        />

        {/* 2. Tangga */}
        <text
          x="435"
          y="186"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[15px]"
        >
          Tangga
        </text>
        <line
          x1="466"
          y1="184"
          x2="569"
          y2="210"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          markerEnd="url(#arrow-p2s23)"
        />

        {/* 3. Batang kayu tambahan */}
        <text
          x="785"
          y="175"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[14.5px]"
        >
          Batang kayu
        </text>
        <text
          x="785"
          y="193"
          textAnchor="middle"
          className="fill-slate-900 dark:fill-slate-100 font-extrabold text-[14.5px]"
        >
          tambahan
        </text>
        <line
          x1="748"
          y1="198"
          x2="652"
          y2="262"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          markerEnd="url(#arrow-p2s23)"
        />

        {/* 4. Wadah minum */}
        <text
          x="438"
          y="292"
          textAnchor="middle"
          className="fill-sky-700 dark:fill-sky-300 font-extrabold text-[15px]"
        >
          Wadah
        </text>
        <text
          x="438"
          y="310"
          textAnchor="middle"
          className="fill-sky-700 dark:fill-sky-300 font-extrabold text-[15px]"
        >
          minum
        </text>
        <line
          x1="452"
          y1="316"
          x2="488"
          y2="342"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          markerEnd="url(#arrow-p2s23)"
        />

        {/* 5. Wadah pakan */}
        <text
          x="782"
          y="292"
          textAnchor="middle"
          className="fill-amber-700 dark:fill-amber-300 font-extrabold text-[15px]"
        >
          Wadah
        </text>
        <text
          x="782"
          y="310"
          textAnchor="middle"
          className="fill-amber-700 dark:fill-amber-300 font-extrabold text-[15px]"
        >
          pakan
        </text>
        <line
          x1="762"
          y1="316"
          x2="704"
          y2="342"
          className="stroke-slate-900 dark:stroke-slate-100"
          strokeWidth="3"
          markerEnd="url(#arrow-p2s23)"
        />
      </svg>
    </div>
  );
};
