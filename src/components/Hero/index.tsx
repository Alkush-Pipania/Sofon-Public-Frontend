"use client";

import Image from "next/image";
import StatusBadge from "./StatusBadge";
import ToCloudButton from "./ToCloudButton";
import SelfHostedButton from "./SelfHostedButton";
import FeatureHighlights from "./FeatureHighlights";
import ThroughputCard from "./ThroughputCard";
import NodeStatusCard from "./NodeStatusCard";

export default function Hero() {
    return (
        <section className="relative w-full max-w-[1440px] mx-auto px-10 pt-24 pb-32 flex flex-col lg:flex-row items-center justify-between z-10">
            {/* Left Column */}
            <div className="flex flex-col items-start max-w-xl pr-8">
                <StatusBadge />

                <h1
                    className="mt-8 text-white text-[74px] leading-[1.05] font-bold tracking-tight"
                    style={{ fontFamily: "var(--font-space-grotesk), 'Space Grotesk', sans-serif" }}
                >
                    Observe.<br />
                    Understand.<br />
                    Act.
                </h1>

                <p
                    className="mt-6 text-[#94A3B8] text-lg leading-relaxed max-w-[460px]"
                    style={{ fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif" }}
                >
                    Piercing the veil of digital entropy. Illuminate the dark matter of your infrastructure with precision telemetry and celestial clarity.
                </p>

                <div className="flex items-center gap-4 mt-10">
                    <ToCloudButton />
                    <SelfHostedButton />
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 w-full">
                    <FeatureHighlights />
                </div>
            </div>

            {/* Right Column */}
            <div className="relative w-full lg:w-[700px] h-[600px] mt-16 lg:mt-0 flex items-center justify-center">
                {/* Background graphic */}
                <div className="absolute inset-0 flex items-center justify-center z-0">
                    <Image
                        src="/Container.png"
                        alt="Background Graphic"
                        width={700}
                        height={700}
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Floating Cards */}
                <div className="absolute z-10 top-12 right-0">
                    <NodeStatusCard />
                </div>

                <div className="absolute z-10 bottom-12 left-0">
                    <ThroughputCard />
                </div>
            </div>
        </section>
    );
}
