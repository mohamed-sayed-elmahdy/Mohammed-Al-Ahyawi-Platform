type DestinationCardProps = {
  name: string;
};

export default function DestinationCard({ name }: DestinationCardProps) {
  return (
    <article>
      <h3>{name}</h3>
    </article>
  );
}
