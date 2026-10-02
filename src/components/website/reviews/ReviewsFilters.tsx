"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState, type PointerEvent, type ReactNode } from "react";
import type { Category, ReviewCategoryFilter } from "@/types/website";

type ReviewsFiltersProps = {
  categories: Category[];
  countries: string[];
  cities: readonly string[];
  selectedCountry: string;
  selectedCity: string;
  onCountryChange: (country: string) => void;
  onCityChange: (city: string) => void;
  selectedCategory: ReviewCategoryFilter;
  onCategoryChange: (category: ReviewCategoryFilter) => void;
};

const chipClass = (isActive: boolean) =>
  `shrink-0 cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent) ${
    isActive
      ? "border-(--color-accent) bg-(--color-accent) text-[#08111f]"
      : "border-(--color-accent)/25 bg-(--color-surface)/45 text-(--color-secondary-text) hover:border-(--color-accent)/60 hover:text-(--color-text)"
  }`;

type FilterRailProps = {
  ariaLabel: string;
  title: string;
  children: ReactNode;
};

function FilterRail({ ariaLabel, title, children }: FilterRailProps) {
  const filtersRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    if (event.target instanceof Element && event.target.closest("button")) return;

    const row = filtersRef.current;
    if (!row) return;

    dragStartRef.current = { x: event.clientX, scrollLeft: row.scrollLeft };
    row.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || event.pointerType !== "mouse") return;

    const row = filtersRef.current;
    if (!row) return;

    row.scrollLeft = dragStartRef.current.scrollLeft - (event.clientX - dragStartRef.current.x);
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const row = filtersRef.current;
    if (row?.hasPointerCapture(event.pointerId)) {
      row.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  return (
    <div className="group relative -mx-4 min-w-0 sm:mx-0">
      <div
        ref={filtersRef}
        className={`min-w-0 overflow-x-auto overscroll-x-contain px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-0 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        role="group"
        aria-label={ariaLabel}
        title={title}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
      >
        {children}
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-(--color-background) to-transparent opacity-60 transition-opacity group-hover:opacity-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-(--color-background) to-transparent opacity-60 transition-opacity group-hover:opacity-100"
      />
    </div>
  );
}

export default function ReviewsFilters({
  categories,
  countries,
  cities,
  selectedCountry,
  selectedCity,
  onCountryChange,
  onCityChange,
  selectedCategory,
  onCategoryChange,
}: ReviewsFiltersProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-2">
      <div className="">
        <h2 className="text-sm font-semibold text-(--color-text)">الدولة</h2>
        <FilterRail ariaLabel="فلترة التقييمات حسب الدولة" title="اسحب لعرض جميع الدول">
          <div className="flex min-w-full w-max justify-center gap-2">
            <button
              type="button"
              aria-pressed={selectedCountry === "all"}
              onClick={() => onCountryChange("all")}
              className={chipClass(selectedCountry === "all")}
            >
              الكل
            </button>
            {countries.map((country) => (
              <button
                key={country}
                type="button"
                aria-pressed={selectedCountry === country}
                onClick={() => onCountryChange(country)}
                className={chipClass(selectedCountry === country)}
              >
                {country}
              </button>
            ))}
          </div>
        </FilterRail>
      </div>

      <AnimatePresence initial={false}>
        {selectedCountry === "السعودية" ? (
          <motion.div
            key="saudi-city-filters"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.26,
              ease: "easeOut",
            }}
            className="overflow-hidden"
          >
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-(--color-text)">المدينة</h2>
              <FilterRail ariaLabel="فلترة التقييمات حسب المدينة" title="اسحب لعرض جميع المدن">
                <div className="flex min-w-full w-max justify-center gap-2">
                  <button
                    type="button"
                    aria-pressed={selectedCity === "all"}
                    onClick={() => onCityChange("all")}
                    className={chipClass(selectedCity === "all")}
                  >
                    الكل
                  </button>
                  {cities.filter(Boolean).map((city) => (
                    <button
                      key={city}
                      type="button"
                      aria-pressed={selectedCity === city}
                      onClick={() => onCityChange(city)}
                      className={chipClass(selectedCity === city)}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </FilterRail>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-(--color-text)">الفئة</h2>
        <FilterRail ariaLabel="فلترة التقييمات حسب الفئة" title="اسحب لعرض جميع الفئات">
          <div className="flex min-w-full w-max justify-start gap-2">
            <button
              type="button"
              aria-pressed={selectedCategory === "all"}
              onClick={() => onCategoryChange("all")}
              className={chipClass(selectedCategory === "all")}
            >
              الكل
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={selectedCategory === category.id}
                onClick={() => onCategoryChange(category.id)}
                className={chipClass(selectedCategory === category.id)}
              >
                {category.title}
              </button>
            ))}
          </div>
        </FilterRail>
      </div>
    </div>
  );
}
