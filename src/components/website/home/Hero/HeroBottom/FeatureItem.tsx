type Props = {
  title: string
  desc?: string
}

export default function FeatureItem({ title }: Props) {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="text-lg font-semibold text-amber-100">{title}</div>
    </div>
  )
}
