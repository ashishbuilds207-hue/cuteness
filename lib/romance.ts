import {
    Bird,
    Candy,
    Cherry,
    CloudSun,
    Clover,
    Coffee,
    Eye,
    Flower2,
    Footprints,
    Heart,
    IceCreamCone,
    Leaf,
    type LucideIcon,
    Moon,
    Ribbon,
    Smile,
    Sparkles,
    Sun,
    UtensilsCrossed,
    Wind,
} from "lucide-react";

export const PHONE = "918580666891";

export type LineMood = "soft" | "nature" | "funny" | "cheeky";

export type PickupLine = {
    mood: LineMood;
    text: string;
};

export const moods: { id: LineMood | "all"; label: string; icon: LucideIcon }[] = [
    { id: "all", label: "All of them", icon: Sparkles },
    { id: "soft", label: "Soft", icon: Moon },
    { id: "nature", label: "Nature", icon: Leaf },
    { id: "funny", label: "Funny", icon: Smile },
    { id: "cheeky", label: "A little rude", icon: Wind },
];

export const lines: PickupLine[] = [
    {
        mood: "soft",
        text: "When I see you, my eyes just fall. They don't ask permission. They just go.",
    },
    {
        mood: "soft",
        text: "I had a whole sentence ready. Then you looked over and the sentence sat down.",
    },
    {
        mood: "soft",
        text: "You don't walk into a room. The room notices, and so do I, a second too late to look casual.",
    },
    {
        mood: "soft",
        text: "I like you in the quiet way. The kind that stays after the joke is over.",
    },
    {
        mood: "soft",
        text: "If I stare, it's not a strategy. It's just my face being honest for once.",
    },
    {
        mood: "soft",
        text: "Some people feel like noise. You feel like the part of the evening where everything slows down.",
    },
    {
        mood: "soft",
        text: "I hope your day is gentle. If it isn't, I want to be the soft part of it.",
    },
    {
        mood: "soft",
        text: "You could ruin my whole afternoon with one smile, and I would thank you for the damage.",
    },
    {
        mood: "soft",
        text: "I keep your laugh where I keep the songs I never skip.",
    },
    {
        mood: "soft",
        text: "If liking you was a color, it would be this pink. A little too much, and exactly right.",
    },
    {
        mood: "nature",
        text: "Dusk does this pink thing and still loses. Unfair, honestly. You should let the sky have one win.",
    },
    {
        mood: "nature",
        text: "Flowers lean toward the sun. I lean toward you. Same physics, worse posture.",
    },
    {
        mood: "nature",
        text: "Petals fall because they can't hold the branch anymore. I get it. I've seen you laugh.",
    },
    {
        mood: "nature",
        text: "The moon is just showing off from far away. You're doing it from across the room and it's worse.",
    },
    {
        mood: "nature",
        text: "Rivers don't ask the sea if they're allowed to arrive. I'm asking anyway, because I'm polite and also a little scared.",
    },
    {
        mood: "nature",
        text: "Wind moves leaves without touching them hard. That's the effect. That's you.",
    },
    {
        mood: "nature",
        text: "Bees pick a flower and commit. I picked you. Fewer wings. Same seriousness.",
    },
    {
        mood: "nature",
        text: "The first star shows up and thinks it's special. I already found what I wished for.",
    },
    {
        mood: "nature",
        text: "Spring doesn't ask the flowers if they're ready. I am asking you, though, because you deserve the gentle version.",
    },
    {
        mood: "funny",
        text: "I tried to play it cool. My heartbeat filed a complaint and copied you on the email.",
    },
    {
        mood: "funny",
        text: "I'd choose you over sleep, and I love sleep in a slightly worrying way.",
    },
    {
        mood: "funny",
        text: "If pretty was weather, you'd be the kind that cancels everyone's plans and nobody is even mad.",
    },
    {
        mood: "funny",
        text: "I brought courage. It's pocket-sized. It still asked for your name.",
    },
    {
        mood: "funny",
        text: "You make an ordinary Tuesday look like somebody wrote it on purpose.",
    },
    {
        mood: "funny",
        text: "I don't chase. Except you. And the last fry. Mostly you. The fry can wait.",
    },
    {
        mood: "funny",
        text: "I practiced being smooth. Then I got shy and made the whole page pink instead.",
    },
    {
        mood: "funny",
        text: "My camera roll wants a folder called 'Don't be weird about it.' The folder is just you.",
    },
    {
        mood: "cheeky",
        text: "Stop looking like that. I already lost and you're making it obvious.",
    },
    {
        mood: "cheeky",
        text: "You're trouble. The soft kind. The kind that ruins my sleep and my ability to act normal.",
    },
    {
        mood: "cheeky",
        text: "I was going to play hard to get. Then I remembered I'm not hard to get. I'm already got.",
    },
    {
        mood: "cheeky",
        text: "If you close this page I will know. Not technically. Spiritually. And I will be dramatic about it.",
    },
    {
        mood: "cheeky",
        text: "Don't make me say something sincere in public. I will. That's the threat.",
    },
    {
        mood: "cheeky",
        text: "You walk in and my brain puts 'focus' in a drawer labeled later. Rude of you. Effective.",
    },
    {
        mood: "cheeky",
        text: "I like you so obviously it's almost embarrassing. Almost. I'm keeping it.",
    },
    {
        mood: "cheeky",
        text: "Other people can have casual. I want the hand-holding, extra-sweet, look-at-me kind.",
    },
];

export const cuteNotes: {
    icon: LucideIcon;
    tilt: number;
    tint: string;
    title: string;
    text: string;
}[] = [
    {
        icon: Heart,
        tilt: -2,
        tint: "bg-[#ffe4ee]",
        title: "For your pocket",
        text: "If today feels heavy, borrow this: somebody made a whole pink website because you exist.",
    },
    {
        icon: Cherry,
        tilt: 2,
        tint: "bg-[#fff0e4]",
        title: "A tiny wish",
        text: "I want the slow kind of evening. Your sleeve, my sleeve, nowhere we have to be.",
    },
    {
        icon: Candy,
        tilt: -1,
        tint: "bg-[#fde8f4]",
        title: "Too sweet, on purpose",
        text: "I will remember how you take your drink. That is not a small thing. That is me paying attention.",
    },
    {
        icon: Clover,
        tilt: 3,
        tint: "bg-[#f3ffe8]",
        title: "Lucky, actually",
        text: "Four leaves is cute. You looking over at me is the version of luck I believe in.",
    },
    {
        icon: Bird,
        tilt: -3,
        tint: "bg-[#eef4ff]",
        title: "The soft landing",
        text: "When I see you, my eyes fall. They land somewhere kind. They land on you.",
    },
    {
        icon: Ribbon,
        tilt: 1,
        tint: "bg-[#fff6d8]",
        title: "Tied in a bow",
        text: "This is me, a little shy, a little ridiculous, asking if I can be your favorite person on a Tuesday.",
    },
];

export const impressions: {
    icon: LucideIcon;
    kicker: string;
    line: string;
}[] = [
    {
        icon: Eye,
        kicker: "The eyes",
        line: "They fall. Not a blink, not a glance. A small, stupid, complete fall. Every time.",
    },
    {
        icon: CloudSun,
        kicker: "The hour",
        line: "You feel like the last warm light before the sky goes dusky. I want to stay in that minute.",
    },
    {
        icon: Flower2,
        kicker: "The lean",
        line: "Things in nature lean without making a speech. That's the vibe. I just lean.",
    },
    {
        icon: Wind,
        kicker: "The quiet",
        line: "Even the air acts different. Softer. A little faulty. Like it forgot its job and started admiring you.",
    },
];

export const questions: { q: string; a: string; icon: LucideIcon }[] = [
    {
        icon: Eye,
        q: "What actually happens when you see me?",
        a: "My eyes give up first. Then my sentence. Then any plan I had to look unbothered. It's a whole sequence. Very professional.",
    },
    {
        icon: Sun,
        q: "Is this going to be cheesy?",
        a: "A little. Cheese is a love language if you commit. I committed. The pink gave it away.",
    },
    {
        icon: Wind,
        q: "Why does the No button keep running?",
        a: "Because 'No' is shy, dramatic, and wrong. 'Yes' has a spine. Follow the one that stays.",
    },
    {
        icon: Moon,
        q: "What if I get quiet?",
        a: "Then I get quiet with you. I can be funny later. I can also just sit there and not ruin it.",
    },
    {
        icon: Smile,
        q: "Are you nervous?",
        a: "Yes. It's cute on me. Allegedly. If I talk too much, pinch the air and I'll restart the sentence.",
    },
    {
        icon: Sparkles,
        q: "What are you actually asking?",
        a: "One real date. Not a maybe, not a 'sometime'. A day, a time, and you, looking slightly dangerous in a nice way.",
    },
];

export const plans: { id: string; label: string; note: string; icon: LucideIcon }[] = [
    {
        id: "sunset",
        label: "Sunset walk",
        note: "Slow, pink sky, I will pretend I know the names of clouds",
        icon: CloudSun,
    },
    {
        id: "coffee",
        label: "Coffee that lasts",
        note: "One cup that turns into two and a story I didn't plan to tell",
        icon: Coffee,
    },
    {
        id: "dinner",
        label: "Slow dinner",
        note: "Good food, eye contact, no phones winning",
        icon: UtensilsCrossed,
    },
    {
        id: "ice",
        label: "Ice cream",
        note: "Two spoons, one small argument about the flavor, you win",
        icon: IceCreamCone,
    },
    {
        id: "wander",
        label: "Nowhere special",
        note: "We walk until the street looks like a scene",
        icon: Footprints,
    },
];

export const frames: { file: string; caption: string }[] = [
    { file: "photo-extra-02.jpg", caption: "This smile is the whole problem" },
    { file: "photo-extra-01.jpg", caption: "Dressed like the evening was yours" },
    { file: "photo-12.jpg", caption: "The city can keep the sign. I kept the smile" },
    { file: "photo-10.jpg", caption: "Night lights, and you still winning" },
    { file: "photo-18.jpg", caption: "The quiet version, which is my favorite" },
    { file: "photo-16.jpg", caption: "You, the moon, and I forgot the rest" },
    { file: "photo-17.jpg", caption: "Under the moon, obviously" },
    { file: "photo-13.jpg", caption: "Red, and somehow still gentle" },
    { file: "photo-01.jpg", caption: "The face that ends my sentence" },
    { file: "photo-02.jpg", caption: "Caught looking, and I would do it again" },
    { file: "photo-04.jpg", caption: "Cool, and still the softest person here" },
    { file: "photo-03.jpg", caption: "That look over the shoulder" },
    { file: "photo-05.jpg", caption: "Saved, because looking away was not an option" },
    { file: "photo-06.jpg", caption: "Another frame I keep coming back to" },
    { file: "photo-07.jpg", caption: "Soft light, unfair advantage" },
    { file: "photo-08.jpg", caption: "This one lives in my head rent-free" },
    { file: "photo-09.jpg", caption: "Pretty without trying, which is rude" },
    { file: "photo-11.jpg", caption: "I stared. The photo stared back" },
    { file: "photo-14.jpg", caption: "A detail I will absolutely notice" },
    { file: "photo-15.jpg", caption: "One more, because one is never enough" },
];

export const clips: { file: string; caption: string }[] = [
    { file: "clip-01.mp4", caption: "Press play. Then try to act normal" },
    { file: "clip-02.mp4", caption: "Moving, and still the main character" },
    { file: "clip-03.mp4", caption: "A few seconds, and I replay them" },
    { file: "clip-04.mp4", caption: "This is the part where I forget my line" },
    { file: "clip-05.mp4", caption: "Short clip. Long effect" },
];

export const promises = [
    "I'll show up on time, or close enough that traffic gets the blame, not my feelings.",
    "I'll look at you when you talk. Revolutionary, I know.",
    "If it's quiet, I won't stuff the quiet with nonsense. Much.",
    "Dessert is not a debate. It's a plan.",
    "I'll be sweet, a little funny, and only rude in the way that still feels like a compliment.",
];

export function buildWhatsAppText(details: {
    name: string;
    date: string;
    time: string;
    plan: string;
    place: string;
    note: string;
}) {
    return [
        "She said yes.",
        "",
        `Name: ${details.name}`,
        `Day: ${details.date}`,
        `Time: ${details.time || "Whenever the sky looks good"}`,
        `Plan: ${details.plan}`,
        `Place: ${details.place || "You pick, I'll find it"}`,
        details.note ? `Note from her: ${details.note}` : "Note from her: (she let the silence be cute)",
        "",
        "Don't be late. Don't be normal about it either.",
    ].join("\n");
}
