"use client";

import Link from "next/link";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Docs", href: "#docs" },
    { label: "Community", href: "#community" },
    { label: "Blog", href: "#blog" },
];

export default function Navbar() {
    return (
        <header className="w-full bg-[#060404] border-b border-white/8 sticky top-0 z-100 flex justify-center h-16">
            <nav className="flex items-center justify-between px-10 h-full w-full max-w-[1440px]">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-white text-xl tracking-[2px] no-underline shrink-0"
                    style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif", fontWeight: 700 }}
                >
                    SOFON
                </Link>

                {/* Center nav links */}
                <ul className="flex items-center gap-9 list-none m-0 p-0">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <Link
                                href={link.href}
                                className="text-[#94A3B8] text-sm no-underline transition-colors duration-200 hover:text-[#e2e8f0]"
                                style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right side actions */}
                <div className="flex items-center gap-5 shrink-0">
                    <Link
                        href="#login"
                        className="text-[#94A3B8] text-sm no-underline transition-colors duration-200 hover:text-[#e2e8f0]"
                        style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                    >
                        Log In
                    </Link>
                    <Link
                        href="#get-started"
                        className="text-[#e2e8f0] text-sm font-medium no-underline px-5 py-2 rounded-full border border-[#7E7E7E] bg-white/5 shadow-[0_0_15px_0_rgba(229,229,233,0.10)] transition-all duration-200 hover:bg-[rgba(148,163,184,0.06)] hover:text-white"
                        style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                    >
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    );
}
