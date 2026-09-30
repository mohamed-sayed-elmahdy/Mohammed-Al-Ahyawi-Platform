import type { JourneyCityFilter, JourneyScopeFilter } from "@/types/website";

type JourneysMetaRowProps = {
  count: number;
  scope: JourneyScopeFilter;
  location: JourneyCityFilter;
};

export default function JourneysMetaRow({
  count,
  scope,
  location,
}: JourneysMetaRowProps) {
  const countLabel = new Intl.NumberFormat("ar-SA").format(count);
  const locationLabel =
    location !== "all"
      ? ` في ${location}`
      : scope === "saudi"
        ? " داخل المملكة"
        : " حول العالم";

  return (
    <div className="flex items-center justify-between gap-4 border-y border-(--color-accent)/15 py-4 text-sm">
      <p className="font-medium text-(--color-text)">
        {countLabel} جولة{locationLabel}
      </p>
      <p className="shrink-0 text-(--color-secondary-text)">الأحدث أولاً</p>
    </div>
  );
}
