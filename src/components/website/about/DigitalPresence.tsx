
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
        icon: "/social-icons/google-maps.svg",
    },
    {
        id: "tiktok",
        name: "TikTok",
        icon: "/social-icons/tiktok.svg",
    },
    {
        id: "instagram",
        name: "Instagram",
        icon: "/social-icons/instagram.svg",
    },
    {
        id: "snapchat",
        name: "Snapchat",
        icon: "/social-icons/snapchat.svg",
    },
    {
        id: "x",
        name: "X",
        icon: "/social-icons/x.svg",
    },
] as const;

export function DigitalPresence() {
    return (
        <section className="rounded-[30px] border border-(--color-accent)/45 bg-(--color-surface)/55 p-5 sm:p-8 lg:p-10">
            <h2 className="font-alexandria text-center text-xl font-bold text-(--color-accent) sm:text-2xl lg:text-3xl">
                حضور إعلامي متكامل
            </h2>

            <div className="mt-7 grid grid-cols-3 gap-x-3 gap-y-5 sm:mt-9 sm:grid-cols-5 sm:gap-5">
                {socialChannels.map(({ id, name, icon }) => (

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
                            className="mx-auto size-8 text-(--color-accent) sm:size-10"
                        />

                        <h3
                            dir="ltr"
                            className="mt-3 text-[13px] font-bold sm:mt-4 sm:text-sm lg:text-base"
                        >
                            {name}
                        </h3>

                   
                    </Link>
                ))}
            </div>
        </section>
    );
}