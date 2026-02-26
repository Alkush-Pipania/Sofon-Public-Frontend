"use client";

import { TriangleIcon } from "lucide-react";
import BarChartIcon from "@/components/icon/BarChartIcon";
import GaugeIcon from "@/components/icon/GaugeIcon";

export default function ThroughputCard() {
    return (
        <div
            className="relative flex flex-col justify-between rounded-xl p-3.5 min-w-[180px] min-h-[110px] border border-[rgba(63,63,77,0.60)] backdrop-blur-[6px]"
            style={{
                background: "rgba(12, 12, 29, 0.40)",
                boxShadow: "0 0 40px 0 rgba(0, 0, 0, 0.50)",
            }}
        >
            {/* Top row */}
            <div className="flex items-start justify-between">
                {/* Gauge icon box */}
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)]">
                    <GaugeIcon className="w-3.5 h-3" />
                </div>

                {/* Right side info */}
                <div className="flex flex-col items-end gap-0.5">
                    <span
                        className="text-[#64748B] text-[9px] tracking-[0.15em] uppercase font-semibold"
                        style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                    >
                        THROUGHPUT
                    </span>
                    <div className="flex items-center gap-1">
                        <span
                            className="text-white text-[18px] font-bold"
                            style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                        >
                            42.8 TB/s
                        </span>
                        <TriangleIcon className="text-white fill-white" size={6} />
                    </div>
                </div>
            </div>

            {/* Bottom bar chart icon */}
            <div className="mt-auto pt-1">
                <BarChartIcon className="w-6 h-6" />
            </div>
        </div>
    );
}
