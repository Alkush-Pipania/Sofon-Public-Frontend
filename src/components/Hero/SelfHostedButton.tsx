"use client";

import { Code } from "lucide-react";
import { motion } from "framer-motion";
export default function SelfHostedButton() {
    return (
        <motion.button
            initial="initial"
            whileHover="hover"
            className="flex items-center justify-center px-10 py-3.5 rounded-full bg-[#0E0C0C] border border-white cursor-pointer transition-all duration-200 overflow-hidden relative"
            style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
        >
            <div className="relative flex items-center justify-center overflow-hidden">
                {/* Invisible placeholder to maintain component size */}
                <div className="flex items-center gap-3 opacity-0 pointer-events-none">
                    <Code size={18} />
                    <span className="text-sm font-medium">Self Hosted</span>
                </div>

                <motion.div
                    variants={{
                        initial: { y: 0 },
                        hover: { y: "-150%" },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute flex items-center gap-3"
                >
                    <Code className="text-[#C8C8D0]" size={18} />
                    <span className="text-[#C8C8D0] text-sm font-medium">Self Hosted</span>
                </motion.div>

                <motion.div
                    variants={{
                        initial: { y: "150%" },
                        hover: { y: 0 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute flex items-center gap-3"
                >
                    <Code className="text-[#C8C8D0]" size={18} />
                    <span className="text-[#C8C8D0] text-sm font-medium">Self Hosted</span>
                </motion.div>
            </div>
        </motion.button>
    );
}
