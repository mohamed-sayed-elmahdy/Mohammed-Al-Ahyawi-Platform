type ReviewsEmptyStateProps = {
  onReset: () => void;
};

export default function ReviewsEmptyState({ onReset }: ReviewsEmptyStateProps) {
  return (
    <div className="rounded-[24px] border border-dashed border-(--color-accent)/30 bg-(--color-surface)/35 px-6 py-16 text-center">
      <h2 className="font-alexandria text-xl font-bold text-(--color-text)">
        لا توجد تقييمات مطابقة للفلتر الحالي
      </h2>
      <p className="mt-3 text-sm leading-7 text-(--color-secondary-text)">
        جرّب اختيار فئة أخرى أو أعد عرض جميع التقييمات
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 cursor-pointer rounded-full border border-(--color-accent)/50 bg-(--color-accent)/10 px-5 py-2.5 text-sm font-semibold text-(--color-accent) transition hover:bg-(--color-accent)/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-accent)"
      >
        عرض جميع التقييمات
      </button>
    </div>
  );
}
