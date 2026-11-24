"use client";

import { Calendar, Clock, MapPin, MessageCircleHeart, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { buildWhatsAppText, PHONE, plans, promises } from "@/lib/romance";

export function DateAsk() {
    const arenaRef = useRef<HTMLDivElement>(null);
    const yesRef = useRef<HTMLButtonElement>(null);
    const noRef = useRef<HTMLButtonElement>(null);
    const moved = useRef(false);
    const lastDodge = useRef(0);
    const [pos, setPos] = useState({ x: 220, y: 12 });
    const [tiny, setTiny] = useState(false);
    const [escapes, setEscapes] = useState(0);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [plan, setPlan] = useState(plans[0].id);
    const [place, setPlace] = useState("");
    const [note, setNote] = useState("");
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);

    useEffect(() => {
        const placeNo = () => {
            const arena = arenaRef.current;
            const button = noRef.current;
            if (!arena || !button) return;
            const small = window.innerWidth < 700;
            setTiny(small);
            if (moved.current) return;
            const width = small ? 52 : button.offsetWidth;
            setPos({
                x: Math.max(8, arena.clientWidth - width - (small ? 10 : 24)),
                y: small ? 64 : 14,
            });
        };
        placeNo();
        window.addEventListener("resize", placeNo);
        return () => window.removeEventListener("resize", placeNo);
    }, []);

    function dodge(clientX?: number, clientY?: number) {
        const now = Date.now();
        if (now - lastDodge.current < 280) return;
        lastDodge.current = now;
        const arena = arenaRef.current;
        const button = noRef.current;
        if (!arena || !button) return;
        moved.current = true;
        const bounds = arena.getBoundingClientRect();
        const maxX = Math.max(8, bounds.width - button.offsetWidth - 8);
        const maxY = Math.max(8, bounds.height - button.offsetHeight - 8);
        const yes = yesRef.current;
        const yesBox = yes
            ? {
                  left: yes.getBoundingClientRect().left - bounds.left - 16,
                  top: yes.getBoundingClientRect().top - bounds.top - 16,
                  right: yes.getBoundingClientRect().right - bounds.left + 16,
                  bottom: yes.getBoundingClientRect().bottom - bounds.top + 16,
              }
            : null;
        const coversYes = (x: number, y: number) => {
            if (!yesBox) return false;
            return (
                x < yesBox.right &&
                x + button.offsetWidth > yesBox.left &&
                y < yesBox.bottom &&
                y + button.offsetHeight > yesBox.top
            );
        };
        let x = 8;
        let y = 8;
        for (let attempt = 0; attempt < 12; attempt += 1) {
            x = Math.random() * maxX;
            y = Math.random() * maxY;
            const nearPointer =
                clientX !== undefined &&
                clientY !== undefined &&
                Math.hypot(x - (clientX - bounds.left), y - (clientY - bounds.top)) < 90;
            if (!coversYes(x, y) && !nearPointer) break;
        }
        if (coversYes(x, y)) {
            x = maxX;
            y = maxY;
        }
        setPos({ x, y });
        setEscapes((count) => count + 1);
    }

    function sayYes() {
        const trimmed = name.trim();
        if (!trimmed || !date) {
            setError(
                trimmed
                    ? "Pick a day. A date without a date is just flirting, and we're past that."
                    : "Tell me your name first. I'm not texting a mystery, even a pretty one.",
            );
            return;
        }
        const chosen = plans.find((item) => item.id === plan) ?? plans[0];
        const text = buildWhatsAppText({
            name: trimmed,
            date,
            time,
            plan: `${chosen.label} — ${chosen.note}`,
            place: place.trim(),
            note: note.trim(),
        });
        const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank", "noopener,noreferrer");
        setError("");
        setSent(true);
    }

    const chosen = plans.find((item) => item.id === plan) ?? plans[0];

    return (
        <section id="ask" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div className="mb-8 max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c45b86]">
                    the only question
                </p>
                <h2 className="font-display mt-3 text-5xl leading-[0.95] text-[#4a2033] sm:text-7xl">
                    Go on a date with me.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[#7d4b62] sm:text-lg">
                    Fill the little details. Press the button that has the decency to stay.
                    The other one has commitment issues and a very small hitbox on your phone.
                </p>
            </div>

            <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <form
                    className="rounded-[32px] border border-white/70 bg-white/75 p-5 shadow-[0_30px_80px_-40px_rgba(120,30,70,0.55)] backdrop-blur-md sm:p-7"
                    onSubmit={(event) => {
                        event.preventDefault();
                        sayYes();
                    }}
                >
                    <label className="block text-sm font-bold text-[#6d314c]">
                        What do I call you
                        <input
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Your name, the real one"
                            className="mt-2 w-full rounded-2xl border border-[#f3c5d6] bg-[#fff7fa] px-4 py-3 text-base font-semibold text-[#4a2033] outline-none ring-[#e56b96] placeholder:font-medium placeholder:text-[#d7a3b8] focus:ring-2"
                        />
                    </label>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <label className="block text-sm font-bold text-[#6d314c]">
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar className="size-4" /> The day
                            </span>
                            <input
                                type="date"
                                value={date}
                                onChange={(event) => setDate(event.target.value)}
                                className="mt-2 w-full rounded-2xl border border-[#f3c5d6] bg-[#fff7fa] px-4 py-3 font-semibold text-[#4a2033] outline-none ring-[#e56b96] focus:ring-2"
                            />
                        </label>
                        <label className="block text-sm font-bold text-[#6d314c]">
                            <span className="inline-flex items-center gap-1.5">
                                <Clock className="size-4" /> The hour
                            </span>
                            <input
                                type="time"
                                value={time}
                                onChange={(event) => setTime(event.target.value)}
                                className="mt-2 w-full rounded-2xl border border-[#f3c5d6] bg-[#fff7fa] px-4 py-3 font-semibold text-[#4a2033] outline-none ring-[#e56b96] focus:ring-2"
                            />
                        </label>
                    </div>

                    <p className="mt-5 text-sm font-bold text-[#6d314c]">What kind of date</p>
                    <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {plans.map((item) => {
                            const Icon = item.icon;
                            const active = plan === item.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setPlan(item.id)}
                                    className={`rounded-2xl border px-3 py-3 text-left transition ${
                                        active
                                            ? "border-[#e56b96] bg-[#ffe3ee] text-[#7a2348]"
                                            : "border-[#f6d5e2] bg-white/60 text-[#8a4d66] hover:border-[#f0b3c9]"
                                    }`}
                                >
                                    <Icon className="size-4" />
                                    <span className="mt-2 block text-sm font-extrabold leading-tight">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#a15d7a]">{chosen.note}</p>

                    <label className="mt-4 block text-sm font-bold text-[#6d314c]">
                        <span className="inline-flex items-center gap-1.5">
                            <MapPin className="size-4" /> Where, if you already know
                        </span>
                        <input
                            value={place}
                            onChange={(event) => setPlace(event.target.value)}
                            placeholder="A café, a lane, 'surprise me'"
                            className="mt-2 w-full rounded-2xl border border-[#f3c5d6] bg-[#fff7fa] px-4 py-3 font-semibold text-[#4a2033] outline-none ring-[#e56b96] placeholder:font-medium placeholder:text-[#d7a3b8] focus:ring-2"
                        />
                    </label>

                    <label className="mt-4 block text-sm font-bold text-[#6d314c]">
                        Anything you want me to remember
                        <textarea
                            value={note}
                            onChange={(event) => setNote(event.target.value)}
                            rows={3}
                            placeholder="I like extra sweet. I get shy. Bring a jacket. Be on time."
                            className="mt-2 w-full resize-none rounded-2xl border border-[#f3c5d6] bg-[#fff7fa] px-4 py-3 font-semibold text-[#4a2033] outline-none ring-[#e56b96] placeholder:font-medium placeholder:text-[#d7a3b8] focus:ring-2"
                        />
                    </label>

                    {error ? (
                        <p className="mt-4 rounded-2xl bg-[#fff1f5] px-4 py-3 text-sm font-semibold text-[#a33b66]">
                            {error}
                        </p>
                    ) : null}
                    {sent ? (
                        <p className="mt-4 rounded-2xl bg-[#ffe9f1] px-4 py-3 text-sm font-semibold leading-relaxed text-[#7a2348]">
                            WhatsApp should be open with the whole plan. Send it. Then act normal
                            for eight minutes. I won&apos;t.
                        </p>
                    ) : null}

                    <div ref={arenaRef} className="relative mt-6 min-h-[190px]">
                        <button
                            ref={yesRef}
                            type="submit"
                            className="relative z-30 inline-flex items-center gap-2 rounded-full bg-[#e23e78] px-6 py-3.5 text-base font-extrabold text-white shadow-[0_16px_40px_-18px_rgba(190,40,100,0.9)] transition hover:-translate-y-0.5 hover:bg-[#cf2f6b]"
                        >
                            <Send className="size-4" />
                            Yes. Take me
                        </button>
                        <button
                            ref={noRef}
                            type="button"
                            aria-label="No, but it will not stay"
                            onMouseEnter={(event) => dodge(event.clientX, event.clientY)}
                            onPointerDown={(event) => {
                                event.preventDefault();
                                dodge(event.clientX, event.clientY);
                            }}
                            className={`absolute z-10 rounded-full border border-[#f3c3d4] bg-white font-bold text-[#c48aa2] shadow-sm transition-[left,top] duration-200 ${
                                tiny ? "h-7 w-12 px-0 text-[10px]" : "px-4 py-3 text-sm"
                            }`}
                            style={{ left: pos.x, top: pos.y }}
                        >
                            {tiny ? "No" : "Nope"}
                        </button>
                    </div>
                    <p className="text-xs font-semibold text-[#c48aa2]">
                        {escapes === 0
                            ? "Hover the little No. On your phone, try to tap the tiny box."
                            : `No has fled ${escapes} ${escapes === 1 ? "time" : "times"}. Yes is still here. Romantic and slightly mean.`}
                    </p>
                </form>

                <aside className="rounded-[32px] bg-[#3a1828] p-6 text-[#ffe4ee] shadow-[0_30px_80px_-36px_rgba(40,8,24,0.8)] sm:p-8">
                    <MessageCircleHeart className="size-7 text-[#ffb4cc]" />
                    <h3 className="font-display mt-4 text-4xl leading-none">How I&apos;ll be</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#f3c6d6]">
                        Caring, a little faulty, funny when it helps, and rude only the way a
                        person is rude when they already like you too much.
                    </p>
                    <ul className="mt-6 space-y-3">
                        {promises.map((promise) => (
                            <li key={promise} className="flex gap-3 text-sm leading-relaxed text-[#ffe9f1]">
                                <span className="mt-1 text-[#ff8fb3]">♥</span>
                                <span>{promise}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 font-display text-2xl italic leading-snug text-[#ffd0e0]">
                        “When I see you, it&apos;s like the evening forgets to get dark.”
                    </p>
                </aside>
            </div>
        </section>
    );
}
