
"use client";

import { type HTMLMotionProps, motion, type Transition } from "motion/react";
import type * as React from "react";
import { cn } from "@/lib/utils";

type ShimmeringTextProps = {
  text: string;
  duration?: number;
  transition?: Transition;
  wave?: boolean;
  color?: string;
  shimmeringColor?: string;
} & Omit<HTMLMotionProps<"span">, "children">;

function ShimmeringText({
  text,
  duration = 0.1,
  transition,
  wave = false,
  className,
  color = "var(--color-neutral-500)",
  shimmeringColor = "var(--color-neutral-300)",
  ...props
}: ShimmeringTextProps) {


 
const chars = Array.from(text);
const characters: string[] = [];

let i = 0;

while (i < chars.length) {
  if (chars[i] === "س") {
    let j = i + 1;

    // تخطي التطويلات بعد السين
    while (chars[j] === "ـ") {
      j++;
    }

    if (chars[j] === "ع") {
      let k = j + 1;

      // تخطي التطويلات بعد العين
      while (chars[k] === "ـ") {
        k++;
      }

      if (chars[k] === "و") {
        // إضافة التسلسل المطلوب مرة واحدة
        characters.push("ســـــعـــــو");

        // تجاوز السين والعين والواو والتطويلات الواقعة بينها
        i = k + 1;
        continue;
      }
    }
  }

  characters.push(chars[i]);
  i++;
}

  return (
    <motion.span
      className={cn("relative inline-block perspective-normal", className)}
      style={
        {
          "--shimmering-color": shimmeringColor,
          "--color": color,
          color: "var(--color)",
        } as React.CSSProperties
      }
      {...(props as any)}
    >
      {characters.map((char, i) => (
        <motion.span
          animate={{
            ...(wave
              ? {
                  x: [0, 5, 0],
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1],
                  rotateY: [0, 15, 0],
                }
              : {}),
            color: [
              "var(--color)",
              "var(--shimmering-color)",
              "var(--color)",
            ],
          }}
          className="inline-block whitespace-pre transform-3d"
          initial={{
            ...(wave
              ? {
                  scale: 1,
                  rotateY: 0,
                }
              : {}),
            color: "var(--color)",
          }}
          key={i}
          transition={{
            duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            repeatDelay: characters.length * 0.05,
            delay: (i * duration) / characters.length,
            ease: "easeInOut",
            ...transition,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export { ShimmeringText, type ShimmeringTextProps };
export default ShimmeringText;
