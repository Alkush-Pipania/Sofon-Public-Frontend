"use client";

export default function StatusBadge() {
    return (
        <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-[rgba(188,189,212,0.30)] shadow-[0_0_15px_0_rgba(34,211,238,0.15)]">
            {/* Glowing dot */}
            <span className="inline-block w-3 h-3 rounded-full bg-white shadow-[0_0_8px_0_rgba(34,211,238,0.80)]" />
            {/* Text */}
            <span
                className="text-white text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
            >
                WE KEEP YOU ALIVE
            </span>
        </div>
    );
}
