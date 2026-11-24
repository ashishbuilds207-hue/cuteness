"use client";

import {
    ArrowDown,
    Flower2,
    Heart,
    Quote,
    Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { DateAsk } from "@/components/romance/date-ask";
import { FallingHearts } from "@/components/romance/falling-hearts";
import { MemoryGallery } from "@/components/romance/gallery";
import { HeartScene } from "@/components/romance/heart-scene";
import { Reels } from "@/components/romance/reels";
import { SongPlayer } from "@/components/romance/song-player";
import { cuteNotes, frames, impressions, lines, moods, questions, type LineMood } from "@/lib/romance";

const ticker = [
    "Eyes, falling",
    "Stay a little longer",
    "Too sweet on purpose",
    "Say yes",
    "Soft trouble",
    "For you, obviously",
    "Hand in hand",
    "Pink hour",
];

export default function HomePage() {
    const [mood, setMood] = useState<LineMood | "all">("all");
    const [open, setOpen] = useState<number | null>(0);
    const [spot, setSpot] = useState(0);

    const visible = useMemo(
        () => (mood === "all" ? lines : lines.filter((line) => line.mood === mood)),
        [mood],
    );

    return (
        <main className="relative min-h-screen overflow-x-hidden bg-[#fff4f8] text-[#4a2033]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,#ffd0e2_0,transparent_32%),radial-gradient(circle_at_90%_0%,#f3d9ff_0,transparent_28%),radial-gradient(circle_at_70%_40%,#ffe8d8_0,transparent_26%)]" />
            <FallingHearts />
            <SongPlayer />

            <header className="sticky top-0 z-40 border-b border-white/50 bg-[#fff4f8]/75 backdrop-blur-xl">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
                    <a href="#top" className="inline-flex items-center gap-2 font-extrabold tracking-tight">
                        <span className="grid size-8 place-items-center rounded-full bg-[#e23e78] text-white">
                            <Heart className="size-4 fill-white" />
                        </span>
                        For you
                    </a>
                    <nav className="flex items-center gap-4 text-sm font-bold text-[#a15d7a] sm:gap-6">
                        <a href="#lines" className="hover:text-[#e23e78]">
                            Lines
                        </a>
                        <a href="#cute" className="hover:text-[#e23e78]">
                            Cute
                        </a>
                        <a href="#frames" className="hidden hover:text-[#e23e78] sm:inline">
                            Photos
                        </a>
                        <a href="#reels" className="hidden hover:text-[#e23e78] md:inline">
                            Reels
                        </a>
                        <a
                            href="#ask"
                            className="rounded-full bg-[#4a2033] px-3 py-1.5 text-white hover:bg-[#e23e78]"
                        >
                            The date
                        </a>
                    </nav>
                </div>
            </header>

            <section id="top" className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:pt-16">
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-[#f4c3d6] bg-white/70 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.22em] text-[#c45b86]">
                        <Sparkles className="size-3.5" />
                        A small page with a big crush
                    </p>
                    <h1 className="font-display mt-5 text-[3.3rem] leading-[0.9] text-[#3d1828] sm:text-7xl lg:text-[5.4rem]">
                        When I see you,
                        <span className="block italic text-[#e23e78]">My eyes just fall.</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#7d4b62]">
                        Not a movie fall. A quiet, honey-sweet one. The room keeps going and
                        I don&apos;t. Flowers do this for the sun. You do it to me, and you
                        don&apos;t even try.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#ask"
                            className="inline-flex items-center gap-2 rounded-full bg-[#e23e78] px-5 py-3 text-sm font-extrabold text-white shadow-[0_16px_40px_-18px_rgba(190,40,100,0.95)]"
                        >
                            Go on a date with me
                            <ArrowDown className="size-4" />
                        </a>
                        <a
                            href="#lines"
                            className="inline-flex items-center gap-2 rounded-full border border-[#f0b7cc] bg-white/70 px-5 py-3 text-sm font-extrabold text-[#8a3d5c]"
                        >
                            Read the lines first
                        </a>
                    </div>
                </div>

                <div className="relative h-[420px] sm:h-[520px]">
                    <div className="absolute inset-8 rounded-full bg-[#ffb3cc]/50 blur-3xl" />
                    <div className="relative h-full overflow-hidden rounded-[40px] border border-white/80 bg-gradient-to-b from-white/40 to-[#ffe4ef]/80 shadow-[0_40px_90px_-40px_rgba(150,40,80,0.55)]">
                        <HeartScene />
                        <p className="pointer-events-none absolute left-6 top-6 max-w-[9rem] font-display text-2xl italic leading-tight text-[#7a3050] sm:max-w-[12rem] sm:text-3xl">
                            Spinning, because so am I
                        </p>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/gallery/photo-extra-02.jpg"
                        alt="The smile I made this page for"
                        className="absolute -left-2 bottom-8 z-10 h-56 w-44 -rotate-6 rounded-[28px] border-[6px] border-white object-cover object-[center_30%] shadow-[0_24px_50px_-18px_rgba(120,30,70,0.65)] sm:-left-6 sm:bottom-10 sm:h-80 sm:w-60"
                    />
                </div>
            </section>

            <div className="relative z-10 overflow-hidden border-y border-[#f6d0e0] bg-[#fff]/55 py-3">
                <div className="romance-marquee flex w-max gap-8">
                    {[...ticker, ...ticker].map((item, index) => (
                        <span key={`${item}-${index}`} className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#c45b86]">
                            ♥ {item}
                        </span>
                    ))}
                </div>
            </div>

            <section className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
                <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c45b86]">
                        the way it lands
                    </p>
                    <h2 className="font-display mt-3 text-5xl leading-[0.95] sm:text-6xl">
                        The sky gets romantic every evening. I just copied it, badly and on purpose.
                    </h2>
                </div>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {impressions.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article
                                key={item.kicker}
                                className="rounded-[28px] border border-white/80 bg-white/70 p-6 shadow-[0_20px_50px_-36px_rgba(120,30,70,0.7)]"
                            >
                                <span className="grid size-11 place-items-center rounded-2xl bg-[#ffe3ee] text-[#e23e78]">
                                    <Icon className="size-5" />
                                </span>
                                <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.2em] text-[#c45b86]">
                                    {item.kicker}
                                </p>
                                <p className="font-display mt-2 text-2xl leading-snug">{item.line}</p>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section id="cute" className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6">
                <div className="rounded-[36px] border border-white/80 bg-white/45 p-5 shadow-[0_30px_80px_-48px_rgba(120,30,70,0.65)] sm:p-8">
                    <div className="max-w-2xl">
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c45b86]">
                            a pocket full of cute
                        </p>
                        <h2 className="font-display mt-3 text-5xl leading-[0.95] sm:text-6xl">
                            Little notes, in case you need something soft.
                        </h2>
                        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#7d4b62]">
                            Not a speech. Just the small romantic things. The kind you can
                            keep, like a flower pressed in a book.
                        </p>
                    </div>
                    <div className="mt-8 rounded-[28px] bg-[#3a1828] px-6 py-8 text-[#fff1f6] sm:px-10">
                        <p className="font-display text-3xl italic leading-snug sm:text-4xl">
                            “If the evening could hold still, I would spend it looking at you
                            like the light forgot how to leave.”
                        </p>
                        <p className="mt-4 text-sm font-semibold text-[#ffb4cc]">
                            That is the whole crush. Pink, a little shy, and very sure.
                        </p>
                    </div>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {cuteNotes.map((note) => {
                            const Icon = note.icon;
                            return (
                                <article
                                    key={note.title}
                                    className={`rounded-[28px] p-5 shadow-[0_18px_40px_-28px_rgba(120,30,70,0.7)] transition duration-300 hover:-translate-y-1 hover:rotate-0 ${note.tint}`}
                                    style={{ transform: `rotate(${note.tilt}deg)` }}
                                >
                                    <span className="grid size-10 place-items-center rounded-2xl bg-white/80 text-[#e23e78]">
                                        <Icon className="size-4" />
                                    </span>
                                    <h3 className="mt-4 text-sm font-extrabold uppercase tracking-[0.16em] text-[#c45b86]">
                                        {note.title}
                                    </h3>
                                    <p className="font-display mt-2 text-2xl leading-snug text-[#4a2033]">
                                        {note.text}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div className="relative z-10 overflow-hidden py-6">
                <div className="romance-marquee flex w-max gap-3">
                    {[...frames, ...frames].map((frame, index) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={`${frame.file}-${index}`}
                            src={`/gallery/${frame.file}`}
                            alt=""
                            className="h-28 w-24 rounded-2xl object-cover sm:h-36 sm:w-28"
                        />
                    ))}
                </div>
            </div>

            <MemoryGallery />
            <Reels />

            <section id="lines" className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6">
                <div className="rounded-[36px] bg-[#3a1828] px-5 py-10 text-[#fff1f6] sm:px-10 sm:py-14">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div className="max-w-xl">
                            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ffb4cc]">
                                pickup lines, but make them honest
                            </p>
                            <h2 className="font-display mt-3 text-5xl leading-[0.95] sm:text-6xl">
                                Sweet, a little shy, and said like I mean it.
                            </h2>
                        </div>
                        <button
                            type="button"
                            onClick={() => setSpot((value) => (value + 1) % lines.length)}
                            className="inline-flex items-center gap-2 rounded-full bg-[#e23e78] px-4 py-2.5 text-sm font-extrabold"
                        >
                            <Flower2 className="size-4" />
                            Another one
                        </button>
                    </div>

                    <blockquote className="mt-8 rounded-[28px] bg-white/10 p-6 sm:p-8">
                        <Quote className="size-6 text-[#ffb4cc]" />
                        <p className="font-display mt-3 text-3xl leading-snug sm:text-4xl">
                            {lines[spot].text}
                        </p>
                    </blockquote>

                    <div className="mt-8 flex flex-wrap gap-2">
                        {moods.map((item) => {
                            const Icon = item.icon;
                            const active = mood === item.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setMood(item.id)}
                                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold ${
                                        active
                                            ? "bg-[#ffe3ee] text-[#7a2348]"
                                            : "bg-white/10 text-[#ffd5e4]"
                                    }`}
                                >
                                    <Icon className="size-3.5" />
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {visible.map((line) => (
                            <article
                                key={line.text}
                                className="rounded-3xl border border-white/10 bg-[#4d2236]/80 p-5"
                            >
                                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#ffb4cc]">
                                    {line.mood === "cheeky" ? "A little rude, still nice" : line.mood[0].toUpperCase() + line.mood.slice(1)}
                                </p>
                                <p className="mt-2 text-base leading-relaxed text-[#fff4f8]">{line.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative z-10 mx-auto max-w-6xl px-4 pb-8 sm:px-6">
                <div className="max-w-2xl">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c45b86]">
                        tiny questions
                    </p>
                    <h2 className="font-display mt-3 text-5xl leading-[0.95] sm:text-6xl">
                        In case you need the fine print.
                    </h2>
                </div>
                <div className="mt-8 grid gap-3">
                    {questions.map((item, index) => {
                        const Icon = item.icon;
                        const active = open === index;
                        return (
                            <button
                                key={item.q}
                                type="button"
                                onClick={() => setOpen(active ? null : index)}
                                className="rounded-[28px] border border-white/80 bg-white/75 p-5 text-left shadow-[0_16px_40px_-32px_rgba(120,30,70,0.8)]"
                            >
                                <span className="flex items-start gap-3">
                                    <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-2xl bg-[#ffe3ee] text-[#e23e78]">
                                        <Icon className="size-4" />
                                    </span>
                                    <span>
                                        <span className="block font-extrabold text-[#4a2033]">{item.q}</span>
                                        {active ? (
                                            <span className="mt-2 block text-sm leading-relaxed text-[#7d4b62]">
                                                {item.a}
                                            </span>
                                        ) : null}
                                    </span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </section>

            <DateAsk />

            <footer className="relative z-10 px-4 pb-12 text-center text-sm font-semibold text-[#b56b88]">
                Too pink, a little shy, and saved for you. The Yes button is the brave one.
            </footer>
        </main>
    );
}
