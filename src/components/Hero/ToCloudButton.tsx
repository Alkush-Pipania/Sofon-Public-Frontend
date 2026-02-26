"use client";

import { ArrowRight } from "lucide-react";

export default function ToCloudButton() {
    return (
        <button
            className="relative flex items-center justify-center w-[200px] h-[56px] rounded-full border border-[#5E5E5E] bg-black cursor-pointer transition-all duration-200 hover:bg-white/5"
            style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
        >
            <span className="text-white text-sm font-medium">To Cloud</span>
            <ArrowRight className="text-white absolute right-6" size={16} />
        </button>
    );
}
