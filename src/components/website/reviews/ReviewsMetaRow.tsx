import type { ReviewSort } from "@/types/website";

type ReviewsMetaRowProps = {
  count: number;
  locationLabel: string | null;
  categoryLabel: string;
  sort: ReviewSort;
  onSortChange: (sort: ReviewSort) => void;
};

const sortOptions: { value: ReviewSort; label: string }[] = [
  { value: "newest", label: "الأحدث" },
  { value: "oldest", label: "الأقدم" },
  { value: "top-rated", label: "الأعلى تقييما" },
  { value: "lowest-rated", label: "الأقل تقييما" },
];

export default function ReviewsMetaRow({
  count,
  locationLabel,
  categoryLabel,
  sort,
  onSortChange,
}: ReviewsMetaRowProps) {
  const countLabel = new Intl.NumberFormat("ar-SA").format(count);
  const activeFilters = [
    locationLabel,
    categoryLabel === "الكل" ? null : categoryLabel,
  ].filter((label): label is string => label !== null);
  const resultLabel = activeFilters.length
    ? `${countLabel} تقييما في ${activeFilters.join(" · ")}`
    : `${countLabel} تقييما موثقًا`;

  return (
    <div dir="rtl" className="flex flex-col gap-4 border-y border-(--color-accent)/15 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <span className="text-xs text-(--color-secondary-text)">الترتيب:</span>
        <div className="grid grid-cols-2 gap-2 sm:flex" role="group" aria-label="ترتيب التقييمات">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={sort === option.value}
              onClick={() => onSortChange(option.value)}
              className={`min-h-10 cursor-pointer whitespace-nowrap rounded-full border px-3 py-2 text-xs font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent) ${
                sort === option.value
                  ? "border-(--color-accent)/70 bg-(--color-accent)/15 text-(--color-accent)"
                  : "border-white/10 text-(--color-secondary-text) hover:border-(--color-accent)/40 hover:text-(--color-text)"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <p className="text-sm font-medium text-(--color-text)">{resultLabel}</p>
    </div>
  );
}
