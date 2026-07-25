
 import { AiOutlineGlobal } from "react-icons/ai";
 import Image from "next/image";

type TimelineItem = {
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  flag?: string;
  scale?: boolean;
};

type HeroTimelineNodeProps = {
  item: TimelineItem;
  point: DOMPoint;
};

export default function HeroTimelineNode({
  item,
  point,
}: HeroTimelineNodeProps) {
  const isSaudi = item.type === "sa";
  const isWorld = item.type === "world";
  const isPlane = item.type === "plane";

  return (
    <div
      className={`absolute  ${item.scale ? "hover:scale-105" : ""} transition-all duration-300`}
      style={{
        left: point.x,
        top: point.y,
        transform: "translate(-50%,-50%)",
      }}
    >
      {/* Marker + Text */}
   <div className="relative">
  {/* Marker */}

  {isPlane ? (
    <div
      className="text-3xl text-(--color-accent)"
      style={{ transform: "rotate(-35deg)" }}
    >
      ✈
    </div>
  ) : (
    <div
      className={`
        flex items-center justify-center
        rounded-full
        border-2 border-(--color-accent)
        bg-[#000000]
        overflow-hidden

        ${
          isSaudi
            ? "w-14 h-14 shadow-[0_0_20px_var(--color-accent)]"
            : "w-8 h-8 hover:shadow-[0_0_20px_var(--color-accent)] transition-all duration-300"
        }
      `}
    >
      {isWorld ? (
        <span className="text-lg"> <AiOutlineGlobal size={18} className="text-(--color-accent)" /></span>
      ) : (
        item.flag && ( 
          <Image
            src={item.flag}
            alt={item.title}
            width={100}
            height={100}
            className="w-full h-full"
          />
        )
      )}
    </div>
  )}

  {/* Content */}

  {!isPlane && (
    <div
      className="
        absolute
        left-[calc(100%+18px)]
        top-1/2
        -translate-y-1/2
        text-right
        whitespace-nowrap
      "
    >
      <h3 className="text-white font-bold text-xl">
        {item.title}
      </h3>

      {item.subtitle && (
        <p className="text-sm text-gray-300">
          {item.subtitle}
        </p>
      )}

      {item.description && (
        <p className="text-sm text-gray-400">
          {item.description}
        </p>
      )}
    </div>
  )}
</div>
    </div>
  );
}