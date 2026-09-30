"use client";

import { useRef, useState, type PointerEvent } from "react";
import {
  internationalJourneyCountries,
  journeyScopeFilters,
  saudiJourneyCities,
} from "@/data/journeys";
import type { JourneyCityFilter, JourneyScopeFilter } from "@/types/website";

type JourneysFiltersProps = {
  scope: JourneyScopeFilter;
  location: JourneyCityFilter;
  onScopeChange: (scope: JourneyScopeFilter) => void;
  onLocationChange: (location: JourneyCityFilter) => void;
};

const chipClass = (isActive: boolean) =>
  `shrink-0 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent) ${
    isActive
      ? "border-(--color-accent) bg-(--color-accent) text-[#08111f]"
      : "border-(--color-accent)/25 bg-(--color-surface)/45 text-(--color-secondary-text) hover:border-(--color-accent)/60 hover:text-(--color-text)"
  }`;

export default function JourneysFilters({
  scope,
  location,
  onScopeChange,
  onLocationChange,
}: JourneysFiltersProps) {
  const secondaryFiltersRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const isSaudiScope = scope === "saudi";
  const locations = isSaudiScope
    ? saudiJourneyCities
    : internationalJourneyCountries;
  const locationLabel =
    isSaudiScope ? "فلترة الجولات حسب المدينة" : "فلترة الجولات حسب الدولة";

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const row = secondaryFiltersRef.current;
    if (!row) return;

    dragStartRef.current = { x: event.clientX, scrollLeft: row.scrollLeft };
    row.setPointerCapture(event.pointerId);
    setIsDragging(true);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || event.pointerType !== "mouse") return;

    const row = secondaryFiltersRef.current;
    if (!row) return;

    row.scrollLeft = dragStartRef.current.scrollLeft - (event.clientX - dragStartRef.current.x);
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;

    const row = secondaryFiltersRef.current;
    if (row?.hasPointerCapture(event.pointerId)) {
      row.releasePointerCapture(event.pointerId);
    }
    setIsDragging(false);
  };

  return (
    <div className="space-y-4" dir="rtl">
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="نوع الجولات"
      >
        {journeyScopeFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            aria-pressed={scope === filter.value}
            onClick={() => onScopeChange(filter.value)}
            className={chipClass(scope === filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {locations.length > 0 ? (
        <div className="group relative -mx-4 min-w-0 sm:mx-0">
          <div
            ref={secondaryFiltersRef}
            className={`min-w-0 overflow-x-auto overscroll-x-contain px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-0 ${
              isSaudiScope
                ? `select-none ${isDragging ? "cursor-grabbing" : "cursor-grab"}`
                : ""
            }`}
            role="group"
            aria-label={locationLabel}
            title={isSaudiScope ? "اسحب لعرض المزيد من المدن" : undefined}
            onPointerDown={isSaudiScope ? handlePointerDown : undefined}
            onPointerMove={isSaudiScope ? handlePointerMove : undefined}
            onPointerUp={isSaudiScope ? stopDragging : undefined}
            onPointerCancel={isSaudiScope ? stopDragging : undefined}
          >
            <div
              className={`flex w-max gap-2 ${
                isSaudiScope ? "" : "min-w-full justify-center"
              }`}
            >
              <button
                type="button"
                aria-pressed={location === "all"}
                onClick={() => onLocationChange("all")}
                className={chipClass(location === "all")}
              >
                الكل
              </button>
              {locations.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={location === item}
                  onClick={() => onLocationChange(item)}
                  className={chipClass(location === item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {isSaudiScope ? (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l from-(--color-background) to-transparent opacity-70 transition-opacity group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r from-(--color-background) to-transparent opacity-70 transition-opacity group-hover:opacity-100"
              />
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
