import { Heart } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="grid min-h-screen place-items-center bg-[#fff4f8] px-6 text-center text-[#4a2033]">
            <div>
                <Heart className="mx-auto size-8 fill-[#e23e78] text-[#e23e78]" />
                <h1 className="font-display mt-4 text-5xl">This page wandered off.</h1>
                <p className="mt-3 text-[#8a4d66]">The real one is still waiting, and it is very pink.</p>
                <Link
                    href="/"
                    className="mt-6 inline-flex rounded-full bg-[#e23e78] px-5 py-3 text-sm font-extrabold text-white"
                >
                    Back to the date
                </Link>
            </div>
        </main>
    );
}
