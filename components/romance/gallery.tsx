"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { frames } from "@/lib/romance";

export function MemoryGallery() {
    const [open, setOpen] = useState<number | null>(null);

    useEffect(() => {
        if (open === null) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === "Escape") setOpen(null);
            if (event.key === "ArrowRight") setOpen((index) => (index === null ? index : (index + 1) % frames.length));
            if (event.key === "ArrowLeft") {
                setOpen((index) => (index === null ? index : (index - 1 + frames.length) % frames.length));
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open]);

    const current = open === null ? null : frames[open];

    return (
        <section id="frames" className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
                <div className="max-w-xl">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c45b86]">
                        Every photo
                    </p>
                    <h2 className="font-display mt-3 text-5xl leading-[0.95] sm:text-6xl">
                        All of them. I was not going to leave one out.
                    </h2>
                </div>
                <p className="max-w-xs text-sm leading-relaxed text-[#8a4d66]">
                    Tap any frame to open it big. Close it whenever you want. I will still be looking.
                </p>
            </div>

            <div className="mt-10 columns-2 gap-3 sm:columns-3 sm:gap-4">
                {frames.map((frame, index) => (
                    <button
                        key={frame.file}
                        type="button"
                        onClick={() => setOpen(index)}
                        className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-[24px] bg-white p-2 text-left shadow-[0_18px_40px_-28px_rgba(120,30,70,0.75)] transition duration-300 hover:-translate-y-1 sm:mb-4"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`/gallery/${frame.file}`}
                            alt={frame.caption}
                            className="h-auto w-full rounded-[18px] object-cover"
                        />
                        <span className="block px-1 pb-1 pt-2 font-display text-lg leading-snug text-[#7a3050]">
                            {frame.caption}
                        </span>
                    </button>
                ))}
            </div>

            {current ? (
                <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#2a1020]/80 p-4 backdrop-blur-md">
                    <button
                        type="button"
                        aria-label="Close photo"
                        onClick={() => setOpen(null)}
                        className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white text-[#4a2033]"
                    >
                        <X className="size-5" />
                    </button>
                    <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={() => setOpen((index) => (index === null ? index : (index - 1 + frames.length) % frames.length))}
                        className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#4a2033] sm:left-6"
                    >
                        <ChevronLeft className="size-5" />
                    </button>
                    <figure className="max-h-[88vh] max-w-3xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`/gallery/${current.file}`}
                            alt={current.caption}
                            className="max-h-[76vh] w-auto max-w-full rounded-[24px] object-contain"
                        />
                        <figcaption className="mt-3 text-center font-display text-2xl text-white">
                            {current.caption}
                        </figcaption>
                    </figure>
                    <button
                        type="button"
                        aria-label="Next photo"
                        onClick={() => setOpen((index) => (index === null ? index : (index + 1) % frames.length))}
                        className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#4a2033] sm:right-6"
                    >
                        <ChevronRight className="size-5" />
                    </button>
                </div>
            ) : null}
        </section>
    );
}
