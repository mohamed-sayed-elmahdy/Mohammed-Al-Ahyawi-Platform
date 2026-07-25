type ArticleCardProps = {
  title: string;
  excerpt: string;
};

export default function ArticleCard({ title, excerpt }: ArticleCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </article>
  );
}
