type CountryCardProps = {
  name: string;
};

export default function CountryCard({ name }: CountryCardProps) {
  return (
    <article>
      <h3>{name}</h3>
    </article>
  );
}
