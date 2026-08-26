
import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/constants/social";

const socialMap = Object.fromEntries(
    socialLinks.map((link) => [link.id, link.href])
);
const socialChannels = [
    {
        id: "google-maps",
        name: "Google Maps",
        label: "تجارب موثقة",
        icon: "/social-icons/google-maps.svg",
    },
    {
        id: "tiktok",
        name: "TikTok",
        label: "تقييم",
        icon: "/social-icons/tiktok.svg",
    },
    {
        id: "instagram",
        name: "Instagram",
        label: "محتوى إعلامي",
        icon: "/social-icons/instagram.svg",
    },
    {
        id: "snapchat",
        name: "Snapchat",
        label: "تأثير",
        icon: "/social-icons/snapchat.svg",
    },
    {
        id: "x",
        name: "X",
        label: "تواصل",
        icon: "/social-icons/x.svg",
    },
] as const;

export function DigitalPresence() {
    return (
        <section className="rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-8 sm:p-10">
            <h2 className="font-alexandria text-center text-3xl font-bold text-(--color-accent)">
                حضور إعلامي متكامل
            </h2>

            <div className="mt-9 grid grid-cols-5 gap-5">
                {socialChannels.map(({ id, name, label, icon }) => (

                    <Link target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        key={id}
                        href={socialMap[id] ?? "#"}
                        className="text-center  transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-(--color-accent)">
                        <Image width={40}
                            height={40}
                            src={icon}
                            alt=""
                            className="mx-auto size-10 text-(--color-accent)"
                        />

                        <h3
                            dir="ltr"
                            className="mt-4 text-sm font-bold sm:text-base"
                        >
                            {name}
                        </h3>

                        <p className="mt-2 text-sm text-(--color-secondary-text)">
                            {label}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}