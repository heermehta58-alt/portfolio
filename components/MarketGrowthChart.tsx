"use client";

import { motion } from "framer-motion";

export default function MarketGrowthChart() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center">
      <div className="text-center mb-8 w-full">
        <h3
          className="font-normal text-base md:text-lg tracking-tight mx-auto"
          style={{ color: "var(--text)" }}
        >
          Global Facial Steaming Device Market Growth
        </h3>
      </div>

      <div className="relative w-full max-w-[900px] mx-auto px-2 flex justify-center items-center">
        <svg
          viewBox="-22 0 900 440"
          className="w-full h-auto overflow-visible mx-auto"
          style={{ display: "block" }}
        >
          {/* Y-Axis Title */}
          <text
            x="-215"
            y="-2"
            fill="var(--text-muted)"
            fontSize="12"
            letterSpacing="0.04em"
            transform="rotate(-90)"
            textAnchor="middle"
            className="select-none font-light"
          >
            Market Size (USD Billion)
          </text>

          {/* Horizontal Grid Lines & Y-Axis Labels - Clean Spacing */}
          {/* 1.3 */}
          <g>
            <line
              x1="75"
              y1="50"
              x2="845"
              y2="50"
              stroke="var(--border)"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <text
              x="60"
              y="54"
              fill="var(--text-muted)"
              fontSize="12"
              textAnchor="end"
              className="font-mono"
            >
              1.3
            </text>
          </g>

          {/* 1.2 */}
          <g>
            <line
              x1="75"
              y1="120"
              x2="845"
              y2="120"
              stroke="var(--border)"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <text
              x="60"
              y="124"
              fill="var(--text-muted)"
              fontSize="12"
              textAnchor="end"
              className="font-mono"
            >
              1.2
            </text>
          </g>

          {/* 1.0 */}
          <g>
            <line
              x1="75"
              y1="250"
              x2="845"
              y2="250"
              stroke="var(--border)"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <text
              x="60"
              y="254"
              fill="var(--text-muted)"
              fontSize="12"
              textAnchor="end"
              className="font-mono"
            >
              1.0
            </text>
          </g>

          {/* 0.8 */}
          <g>
            <line
              x1="75"
              y1="380"
              x2="845"
              y2="380"
              stroke="var(--border)"
              strokeDasharray="4 4"
              strokeWidth="1"
            />
            <text
              x="60"
              y="384"
              fill="var(--text-muted)"
              fontSize="12"
              textAnchor="end"
              className="font-mono"
            >
              0.8
            </text>
          </g>

          {/* X-Axis Baseline */}
          <line
            x1="75"
            y1="395"
            x2="845"
            y2="395"
            stroke="var(--border)"
            strokeWidth="1"
          />

          {/* X-Axis Ticks & Year Labels */}
          {/* 2025 */}
          <g>
            <line
              x1="120"
              y1="395"
              x2="120"
              y2="403"
              stroke="var(--text)"
              strokeWidth="1.5"
            />
            <text
              x="120"
              y="424"
              fill="var(--text)"
              fontSize="13"
              textAnchor="middle"
              className="font-medium"
            >
              2025
            </text>
          </g>

          {/* 2032 */}
          <g>
            <line
              x1="800"
              y1="395"
              x2="800"
              y2="403"
              stroke="var(--text)"
              strokeWidth="1.5"
            />
            <text
              x="800"
              y="424"
              fill="var(--text)"
              fontSize="13"
              textAnchor="middle"
              className="font-medium"
            >
              2032
            </text>
          </g>

          {/* Growth Trend Line (Solid Theme-Aware Line) */}
          <motion.line
            x1="120"
            y1="388"
            x2="800"
            y2="62"
            stroke="var(--text)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          />

          {/* End Node Circles */}
          <circle
            cx="120"
            cy="388"
            r="4.5"
            fill="var(--bg)"
            stroke="var(--text)"
            strokeWidth="2"
          />
          <circle
            cx="800"
            cy="62"
            r="4.5"
            fill="var(--bg)"
            stroke="var(--text)"
            strokeWidth="2"
          />

          {/* Center Callout Badge — Perfectly Centered */}
          <g transform="translate(460, 225)">
            <rect
              x="-165"
              y="-42"
              width="330"
              height="84"
              rx="4"
              fill="var(--bg)"
              stroke="var(--border)"
              strokeWidth="1"
            />
            <text
              x="0"
              y="-10"
              fill="var(--text)"
              fontSize="24"
              fontWeight="600"
              textAnchor="middle"
              letterSpacing="-0.02em"
            >
              ~62.5 %
            </text>
            <text
              x="0"
              y="12"
              fill="var(--text-muted)"
              fontSize="11.5"
              textAnchor="middle"
            >
              market growth is expected between 2025–2032,
            </text>
            <text
              x="0"
              y="28"
              fill="var(--text-muted)"
              fontSize="11.5"
              textAnchor="middle"
            >
              driven by <tspan fill="var(--text)" fontWeight="600">at-home skincare</tspan> demand.
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
