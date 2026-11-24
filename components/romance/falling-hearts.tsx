"use client";

import { useMemo } from "react";

const glyphs = ["♥", "♡", "✿", "•"];

export function FallingHearts() {
    const hearts = useMemo(
        () =>
            Array.from({ length: 28 }, (_, i) => ({
                id: i,
                left: `${(i * 37) % 100}%`,
                delay: `${(i * 0.47) % 8}s`,
                duration: `${9 + (i % 7)}s`,
                size: 10 + (i % 6) * 4,
                drift: i % 2 === 0 ? 28 : -24,
                glyph: glyphs[i % glyphs.length],
                opacity: 0.35 + (i % 5) * 0.1,
            })),
        [],
    );

    return (
        <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden" aria-hidden>
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    className="heart-fall absolute top-0 text-[#e85a8c]"
                    style={{
                        left: heart.left,
                        animationDelay: heart.delay,
                        animationDuration: heart.duration,
                        fontSize: heart.size,
                        opacity: heart.opacity,
                        ["--drift" as string]: `${heart.drift}px`,
                    }}
                >
                    {heart.glyph}
                </span>
            ))}
        </div>
    );
}
