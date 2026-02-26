"use client";

import { CircleCheck } from "lucide-react";

const features = ["SELF-HOSTED", "OPEN SOURCE", "ZERO LATENCY"];

export default function FeatureHighlights() {
    return (
        <div className="flex items-center gap-8">
            {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                    <CircleCheck className="text-white/70" size={18} />
                    <span
                        className="text-[#64748B] text-xs tracking-[0.15em] uppercase font-medium"
                        style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                    >
                        {feature}
                    </span>
                </div>
            ))}
        </div>
    );
}
