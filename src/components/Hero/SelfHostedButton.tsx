"use client";

import { Code } from "lucide-react";

export default function SelfHostedButton() {
    return (
        <button
            className="flex items-center justify-center gap-3 px-10 py-3.5 rounded-full bg-[#0E0C0C] shadow-[0_0_21px_0_#B1B1B1] cursor-pointer transition-all duration-200 hover:shadow-[0_0_28px_0_#B1B1B1]"
            style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
        >
            <Code className="text-[#C8C8D0]" size={18} />
            <span className="text-[#C8C8D0] text-sm font-medium">Self Hosted</span>
        </button>
    );
}
