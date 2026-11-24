"use client";

import { Music, Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SongPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.loop = true;
        audio.volume = 0.85;
        const start = audio.play();
        start?.then(() => setPlaying(true)).catch(() => setPlaying(false));
    }, []);

    function toggle() {
        const audio = audioRef.current;
        if (!audio) return;
        if (!audio.paused) {
            audio.pause();
            setPlaying(false);
            return;
        }
        audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }

    return (
        <>
            <audio ref={audioRef} src="/music/ajab-si.mp3" loop preload="auto" />
            <button
                type="button"
                onClick={toggle}
                className="fixed bottom-5 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#e23e78] px-4 py-3 text-sm font-extrabold text-white shadow-[0_16px_40px_-16px_rgba(190,40,100,0.95)]"
            >
                {playing ? <Square className="size-3.5 fill-white" /> : <Music className="size-4" />}
                {playing ? "Stop the song" : "Play Ajab Si"}
            </button>
        </>
    );
}
