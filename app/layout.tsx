import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "@/app/globals.css";

const display = Fraunces({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-display",
});

const soft = Nunito({
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
    variable: "--font-soft",
});

export const metadata: Metadata = {
    title: "For you",
    description: "A pink, slightly ridiculous, very sincere page. Say yes.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`scroll-smooth ${display.variable} ${soft.variable}`}>
            <body className="font-soft bg-[#2a121c] antialiased">{children}</body>
        </html>
    );
}
