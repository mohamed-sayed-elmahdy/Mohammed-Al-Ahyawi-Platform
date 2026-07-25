type StoryCardProps = {
  title: string;
  excerpt: string;
};

export default function StoryCard({ title, excerpt }: StoryCardProps) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{excerpt}</p>
    </article>
  );
}
