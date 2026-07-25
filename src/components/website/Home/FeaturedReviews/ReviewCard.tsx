type ReviewCardProps = {
  title: string;
  excerpt: string;
};

export default function ReviewCard({ title, excerpt }: ReviewCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </article>
  );
}
