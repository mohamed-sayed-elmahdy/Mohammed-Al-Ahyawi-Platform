"use client";

import { useEffect, useRef, useState } from "react";
import HeroTimelineNode from "@/components/website/Home/Hero/HeroTop/HeroTimelineNode";


const timelineItems = [
  {
    type: "sa",
    title: "السعودية",
    subtitle: "الرياض - جدة ",
    description: "وأكثر من 20 مدينة",
    flag: "/flags/sa.svg",
    scale: true,
  },
  {
    type: "world",
    title: "وجهاته العالمية",
   
  },
  {
    type: "eg",
    title: "مصر",
    flag: "/flags/eg.png",
      scale: true,
  },
  {
    type: "ae",
    title: "الإمارات",
    flag: "/flags/ae.png",
      scale: true,
  },
  {
      type: "tr",
    title: "تركيا",
    flag: "/flags/tr.png",
      scale: true,
  }
,
  {
    type: "ge",
    title: "جورجيا",
    flag: "/flags/ge.png",
      scale: true,
  },
  {
    type: "plane",
    title: "والعديد من\nالوجهات القادمة...",

  },
];
const timelineStops = [
  0.00, // السعودية
  0.18, // وجهات عالمية
  0.34, // مصر
  0.50, // الإمارات
  0.66, // تركيا
  0.82, // جورجيا
  0.98, // الطائرة
];
export default function HeroTimeline() {
  const pathRef = useRef<SVGPathElement>(null);

  const [points, setPoints] = useState<DOMPoint[]>([]);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;

    const length = path.getTotalLength();

const result = timelineStops.map((stop) =>
  path.getPointAtLength(length * stop)
);

    setPoints(result);
  }, []);

  return (
    <div className="relative w-[120px] h-[430px] mt-10 mr-16">
      <svg
        width="120"
      height="430"
viewBox="0 0 120 430"
        fill="none"
        className="absolute inset-0 overflow-visible"
      >
        <defs>
          <filter
            id="goldGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
       <path
  ref={pathRef}
  d="
    M70 8

    C75 28 55 55 60 100

    C60 118 60 150 60 180

    C60 220 60 260 60 300

    C60 338 60 374 60 410
  "
  fill="none"
  stroke="var(--color-accent)"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeDasharray="4 5"
  filter="url(#goldGlow)"
/>
      </svg>
      {points.map((point, index) => (
        <HeroTimelineNode
          key={index}
          point={point}
          item={timelineItems[index]}
        />
      ))}
    </div>
  );
}