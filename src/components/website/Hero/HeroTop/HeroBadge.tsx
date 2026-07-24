export default function HeroBadge() {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Right Line */}
      <div className="flex items-center">

        <span
          className="
            h-px
            w-20
            bg-linear-to-r
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
        />
                <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />

      </div>

      {/* Text */}
      <span
        className="
          text-lg
          font-bold
          text-(--color-accent)
        "
      >
        الإعلام رسالة
      </span>

      {/* Left Line */}
      <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_var(--color-accent)]" />

        <span
          className="
            h-px
            w-20
            bg-linear-to-l
            from-(--color-accent)
            via-(--color-accent)
            to-transparent
          "
        />

      </div>
    </div>
  );
}