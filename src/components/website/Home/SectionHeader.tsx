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
    <header>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
      <p>{description}</p>
      {actionLabel && actionHref ? <a href={actionHref}>{actionLabel}</a> : null}
    </header>
  );
}
