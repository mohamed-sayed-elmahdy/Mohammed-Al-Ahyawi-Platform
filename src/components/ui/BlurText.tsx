"use client";

import { type Easing, motion, type Transition, useReducedMotion } from "motion/react";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import styles from "@/components/website/home/Hero/HeroTop/HeroHeading.module.css";
import ShimmeringText from "@/components/ui/shimmering-text";
interface BlurTextProps {
  text?: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  animationFrom?: Record<string, string | number>;
  animationTo?: Record<string, string | number>[];
  easing?: Easing | Easing[];
  onAnimationComplete?: () => void;
  stepDuration?: number;
}

const buildKeyframes = (
  from: Record<string, string | number>,
  steps: Record<string, string | number>[],
): Record<string, Array<string | number>> => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((step) => Object.keys(step)),
  ]);
  const keyframes: Record<string, Array<string | number>> = {};

  keys.forEach((key) => {
    keyframes[key] = [from[key], ...steps.map((step) => step[key])];
  });

  return keyframes;
};

function BlurText({
  text = "أول منصة رقمية لإعلامي ومرشد ســعــودي على خرائط قوقل ماب\nلتوثيق وتقييم التجارب والجولات داخل المملكة وخارجها",
  delay = 100,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (progress: number) => progress,
  onAnimationComplete,
  stepDuration = 0.4,
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(/(\s+)/) : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction],
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction],
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const animateKeyframes = useMemo(
    () => buildKeyframes(fromSnapshot, toSnapshots),
    [fromSnapshot, toSnapshots],
  );
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, index) =>
    stepCount === 1 ? 0 : index / (stepCount - 1),
  );
  const finalSnapshot = toSnapshots[toSnapshots.length - 1];

  return (
    <p className={`blur-text ${className}`} dir="rtl" ref={ref}>
      {elements.map((segment, index) => {
        const spanTransition: Transition = {
          duration: totalDuration,
          times,
          delay: shouldReduceMotion ? 0 : (index * delay) / 1000,
          ease: easing,
        };

        if (segment.includes("\n")) {
          return (
            <span key={index}>
              {segment.split("\n").map((part, partIndex) => (
                <Fragment key={partIndex}>
                  {partIndex > 0 && <br />}
                  {part}
                </Fragment>
              ))}
            </span>
          );
        }


        const word = segment.trim();
        const isGold = word === "أول" || word === "ســعــودي";

        return (
          <motion.span
            animate={
              shouldReduceMotion
                ? finalSnapshot
                : inView
                  ? animateKeyframes
                  : fromSnapshot
            }
            initial={shouldReduceMotion ? false : fromSnapshot}
            key={index}
            onAnimationComplete={
              index === elements.length - 1
                ? onAnimationComplete
                : undefined
            }
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              willChange: shouldReduceMotion
                ? undefined
                : "transform, filter, opacity",
            }}
            transition={spanTransition}
          >
            {isGold ? (
              <ShimmeringText
                text={segment}
                duration={3}
                color="#d9982d"
                shimmeringColor="#FFF1B8"
                aria-label={word}
              />
            ) : (
              segment
            )}
          </motion.span>
        );

      })}
    </p>
  );
}

export default BlurText;
