type SectionHeaderProps = {
  title: string;
  description: string;
  eyebrow?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function SectionHeader({
  title,
  description,
  eyebrow,
  actionLabel,
  actionHref,
}: SectionHeaderProps) {
  return (
    <header className="mb-8 flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3 text-sm text-[#f3c15c]">
        {eyebrow ? <span>{eyebrow}</span> : null}
        {actionLabel && actionHref ? (
          <a href={actionHref} className="text-sm transition hover:text-white">
            {actionLabel}
          </a>
        ) : null}
      </div>
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>
      </div>
    </header>
  );
}
