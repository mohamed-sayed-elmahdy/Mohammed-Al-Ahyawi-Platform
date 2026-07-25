type CategoryCardProps = {
  title: string;
  description: string;
};

export default function CategoryCard({ title, description }: CategoryCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
