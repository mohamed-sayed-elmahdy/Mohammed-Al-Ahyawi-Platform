import Image from "next/image";
import { FaGlobeAfrica, FaMapMarkerAlt, FaPlane } from "react-icons/fa";

import { heroCountries } from "@/components/website/Hero/data";
import HeroTimeline from "@/components/website/Hero/HeroTop/HeroTimeline";

export default function HeroCountries() {
    return (
        <aside className="flex w-full flex-col items-center justify-center">

            {/* Title */}
            <div className="mb-4 flex items-center gap-2 text-(--color-text)">
                <span className="text-lg text-(--color-accent)">
                    <FaMapMarkerAlt />
                </span>

                <h3 className="text-lg font-bold">
                    رحلات داخل المملكة
                </h3>
            </div>

            <div className="relative w-full flex justify-center">

                {/* Vertical Line */}
            <HeroTimeline/>
            </div>
        </aside>
    );
}


        //  <ul className="space-y-7">

        //             {heroCountries.map((country) => {

        //                 if (country.divider) {
        //                     return (
        //                         <li
        //                             key={country.id}
        //                             className="relative flex items-center gap-4"
        //                         >
        //                             <span
        //                                 className="
        //               z-10
        //               flex
        //               h-10
        //               w-10
        //               items-center
        //               justify-center
        //               rounded-full
        //               border-2
        //               border-(--color-accent)
        //               bg-(--color-background)
        //               text-(--color-accent)
        //             "
        //                             >
        //                                 <FaGlobeAfrica />
        //                             </span>

        //                             <span className="font-semibold text-(--color-text)">
        //                                 {country.name}
        //                             </span>
        //                         </li>
        //                     );
        //                 }

        //                 return (
        //                     <li
        //                         key={country.id}
        //                         className="relative flex items-start gap-4"
        //                     >
        //                         {/* Flag */}
        //                         <div
        //                             className={`
        //             z-10
        //             flex
        //             shrink-0
        //             items-center
        //             justify-center
        //             rounded-full
        //             border-2
        //             border-(--color-accent)
        //             bg-black
        //             overflow-hidden

        //             ${country.featured
        //                                     ? "h-16 w-16 shadow-[0_0_20px_rgba(243,193,92,.35)]"
        //                                     : "h-12 w-12"
        //                                 }
        //           `}
        //                         >
        //                             <Image
        //                                 src={country.flag!}
        //                                 alt={country.name}
        //                                 width={80}
        //                                 height={80}
        //                                 className="h-full w-full object-cover"
        //                             />
        //                         </div>

        //                         {/* Text */}
        //                         <div className="pt-1">

        //                             <h4
        //                                 className={`
        //               ${country.featured
        //                                         ? "text-2xl"
        //                                         : "text-xl"
        //                                     }
        //               font-bold
        //               text-(--color-text)
        //             `}
        //                             >
        //                                 {country.name}
        //                             </h4>

        //                             {country.subtitle && (
        //                                 <p className="mt-1 text-sm text-(--color-muted)">
        //                                     {country.subtitle}
        //                                 </p>
        //                             )}

        //                             {country.description && (
        //                                 <p className="mt-1 text-sm text-(--color-muted)">
        //                                     {country.description}
        //                                 </p>
        //                             )}

        //                         </div>
        //                     </li>
        //                 );
        //             })}

        //             {/* Last Item */}
        //             <li className="relative flex items-center gap-4 pt-3">

        //                 <span
        //                     className="
        //         z-10
        //         flex
        //         h-10
        //         w-10
        //         items-center
        //         justify-center
        //         rounded-full
        //         bg-(--color-background)
        //         text-(--color-accent)
        //         text-xl
        //       "
        //                 >
        //                     <FaPlane />
        //                 </span>

        //                 <span className="text-(--color-text)">
        //                     والعديد من
        //                     <br />
        //                     الوجهات القادمة...
        //                 </span>

        //             </li>

        //         </ul>