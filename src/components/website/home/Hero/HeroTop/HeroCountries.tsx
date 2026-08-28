import Image from "next/image";
import {  FaMapMarkerAlt } from "react-icons/fa";


import HeroTimeline from "@/components/website/home/Hero/HeroTop/HeroTimeline";

export default function HeroCountries() {
    return (
        <aside className="flex w-full flex-col justify-center items-center pe-6">

            {/* Title */}
            <div className="mb-4 flex items-center gap-2 text-(--color-text) pe-8">
                <span className="text-lg text-(--color-accent)">
                    <FaMapMarkerAlt />
                </span>

                <h3 className="text-lg font-bold">
                    رحلاتي داخل المملكة
                </h3>
            </div>

            <div className="relative w-full flex justify-end ">

                {/* Vertical Line */}
            <HeroTimeline/>
            </div>
        </aside>
    );
}


