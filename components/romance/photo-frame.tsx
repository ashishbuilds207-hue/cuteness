"use client";

import { Camera } from "lucide-react";
import { useState } from "react";

export function PhotoFrame({
    src,
    tilt,
    caption,
}: {
    src: string;
    tilt: number;
    caption: string;
}) {
    const [failed, setFailed] = useState(false);

    return (
        <figure
            className="polaroid"
            style={{ ["--tilt" as string]: `${tilt}deg` }}
        >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#ffe4ee]">
                {!failed ? (
                    // Plain img so a missing photo falls back instead of breaking the page.
                    // Drop the real file in public/gallery and it will fill this frame.
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={src}
                        alt={caption}
                        className="h-full w-full object-cover"
                        onError={() => setFailed(true)}
                    />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 px-4 text-center text-[#a14b6d]">
                        <span className="grid size-12 place-items-center rounded-full bg-white/80 shadow-sm">
                            <Camera className="size-5" />
                        </span>
                        <p className="font-display text-lg leading-tight text-[#7a3050]">
                            Waiting for you
                        </p>
                        <p className="text-xs leading-relaxed text-[#b56b88]">
                            This little frame turns when you hover. Your photo goes right here.
                        </p>
                    </div>
                )}
            </div>
            <figcaption className="px-1 pt-3 text-center font-display text-lg leading-snug text-[#7a3050]">
                {caption}
            </figcaption>
        </figure>
    );
}
