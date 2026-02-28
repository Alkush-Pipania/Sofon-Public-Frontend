"use client";

import { ArrowRight } from "lucide-react";

export default function ToCloudButton() {
    return (
        <button
            className="relative flex items-center justify-center gap-3 w-[150px] h-[56px] rounded-full border border-gray-200 bg-white cursor-pointer transition-all duration-200 hover:bg-gray-100"
            style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
        >
            <span className="text-black text-sm font-medium">To Cloud</span>
            <ArrowRight className="text-black" size={16} />
        </button>
    );
}
