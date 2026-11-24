"use client";

import { Play } from "lucide-react";
import { clips } from "@/lib/romance";

export function Reels() {
    return (
        <section id="reels" className="relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c45b86]">
                    The clips
                </p>
                <h2 className="font-display mt-3 text-5xl leading-[0.95] sm:text-6xl">
                    Five little videos, on a loop, because once was not enough.
                </h2>
            </div>
            <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
                {clips.map((clip) => (
                    <figure
                        key={clip.file}
                        className="w-[220px] shrink-0 snap-center sm:w-[260px]"
                    >
                        <div className="relative overflow-hidden rounded-[28px] bg-[#3a1828] shadow-[0_24px_50px_-30px_rgba(80,20,40,0.8)]">
                            <video
                                src={`/gallery/${clip.file}`}
                                className="aspect-[9/16] w-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                            />
                            <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#c45b86]">
                                <Play className="size-3 fill-[#e23e78] text-[#e23e78]" />
                                Reel
                            </span>
                        </div>
                        <figcaption className="px-1 pt-3 font-display text-xl leading-snug text-[#7a3050]">
                            {clip.caption}
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    );
}
