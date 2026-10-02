"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

type ReviewImageGalleryProps = {
  images: string[];
  reviewTitle: string;
  locationLabel: string;
  badge?: string;
};

export default function ReviewImageGallery({
  images,
  reviewTitle,
  locationLabel,
  badge,
}: ReviewImageGalleryProps) {
  const [viewportRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    loop: images.length > 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const updateSelectedIndex = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    updateSelectedIndex();
    emblaApi.on("select", updateSelectedIndex);
    emblaApi.on("reInit", updateSelectedIndex);

    return () => {
      emblaApi.off("select", updateSelectedIndex);
      emblaApi.off("reInit", updateSelectedIndex);
    };
  }, [emblaApi]);

  return (
    <div className="order-1 min-w-0">
      <figure className="relative h-[280px] overflow-hidden rounded-xl border border-(--color-accent)/20 bg-(--color-surface) sm:h-[390px] lg:h-[460px]">
        <div
          ref={viewportRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={`صور تجربة ${reviewTitle}`}
          className="absolute inset-0 overflow-hidden"
        >
          <div className="flex h-full touch-pan-y">
            {images.map((image, index) => (
              <div
                key={`${image}-${index}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} من ${images.length}`}
                className="relative h-full min-w-0 flex-[0_0_100%]"
              >
                <Image
                  src={image}
                  alt={`صورة ${index + 1} من تجربة ${reviewTitle}`}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        <figcaption className="absolute inset-x-4 bottom-4 z-10 flex items-end justify-between gap-3 sm:inset-x-5 sm:bottom-5">
          <span className="inline-flex min-w-0 items-center gap-2 rounded-md border border-white/20 bg-black/50 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            <MapPin className="size-4 shrink-0 text-(--color-accent)" aria-hidden="true" />
            <span className="truncate">{locationLabel}</span>
          </span>
          {badge ? (
            <span className="shrink-0 rounded-md border border-(--color-accent)/50 bg-black/55 px-3 py-2 text-xs font-semibold text-(--color-accent) backdrop-blur-sm">
              {badge}
            </span>
          ) : null}
        </figcaption>

        {images.length > 1 ? (
          <>
            <div
              className="absolute left-3 top-3 z-10 rounded-md border border-white/20 bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
              aria-live="polite"
              dir="ltr"
            >
              {selectedIndex + 1} / {images.length}
            </div>
            <button
              type="button"
              aria-label="الصورة السابقة"
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute right-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)"
            >
              <ArrowRight className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="الصورة التالية"
              onClick={() => emblaApi?.scrollNext()}
              className="absolute left-3 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur-sm transition hover:bg-black/75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)"
            >
              <ArrowLeft className="size-5" aria-hidden="true" />
            </button>
          </>
        ) : null}
      </figure>

      {images.length > 1 ? (
        <div
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
          role="group"
          aria-label="اختيار صورة من المعرض"
        >
          {images.map((image, index) => (
            <button
              key={`${image}-thumbnail-${index}`}
              type="button"
              aria-label={`عرض الصورة ${index + 1}`}
              aria-pressed={selectedIndex === index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-md border transition-[border-color,box-shadow,opacity] duration-300 ease-out sm:h-20 sm:w-28 ${
                selectedIndex === index
                  ? "border-(--color-accent) ring-1 ring-(--color-accent)"
                  : "border-white/15 opacity-65 hover:opacity-100"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="112px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}