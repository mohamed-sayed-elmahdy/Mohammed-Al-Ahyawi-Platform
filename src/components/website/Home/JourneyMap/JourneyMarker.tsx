type JourneyMarkerProps = {
  title: string;
  description: string;
};

export default function JourneyMarker({ title, description }: JourneyMarkerProps) {
  return (
    <div>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
}
