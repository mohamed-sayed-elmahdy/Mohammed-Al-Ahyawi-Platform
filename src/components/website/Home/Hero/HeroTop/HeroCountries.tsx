import Image from "next/image";
import {  FaMapMarkerAlt } from "react-icons/fa";


import HeroTimeline from "@/components/website/Home/Hero/HeroTop/HeroTimeline";

export default function HeroCountries() {
    return (
        <aside className="flex w-full flex-col items-center justify-center">

            {/* Title */}
            <div className="mb-4 flex items-center gap-2 text-(--color-text)">
                <span className="text-lg text-(--color-accent)">
                    <FaMapMarkerAlt />
                </span>

                <h3 className="text-lg font-bold">
                    رحلاته داخل المملكة
                </h3>
            </div>

            <div className="relative w-full flex justify-center">

                {/* Vertical Line */}
            <HeroTimeline/>
            </div>
        </aside>
    );
}


