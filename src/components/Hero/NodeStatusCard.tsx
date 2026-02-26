"use client";

import ChipIcon from "@/components/icon/ChipIcon";

export default function NodeStatusCard() {
    return (
        <div
            className="relative flex items-center gap-3 rounded-xl p-4 min-w-[220px] border border-[rgba(63,63,77,0.60)] backdrop-blur-[6px]"
            style={{
                background: "rgba(12, 12, 29, 0.40)",
                boxShadow: "0 0 40px 0 rgba(0, 0, 0, 0.50)",
            }}
        >
            {/* Chip icon box */}
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)]">
                <ChipIcon className="w-3.5 h-3.5" />
            </div>

            {/* Status info */}
            <div className="flex flex-col flex-1 pl-1">
                <span
                    className="text-[#64748B] text-[10px] tracking-[0.15em] uppercase font-semibold leading-tight"
                    style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                >
                    NODE STATUS
                </span>
                <span
                    className="text-white text-lg font-bold leading-tight mt-0.5"
                    style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                >
                    Operational
                </span>
            </div>

            {/* Glowing dot */}
            <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_1.5px_rgba(255,255,255,0.50)] ml-1" />
        </div>
    );
}
