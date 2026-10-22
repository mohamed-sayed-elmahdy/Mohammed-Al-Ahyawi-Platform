import Image from "next/image";

const brandLogoSrc = "/logo2.png";
const brandLogoAlt = "شعار محمد الإحيوي";

type BrandLogoProps = {
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  width,
  height,
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={brandLogoSrc}
      alt={brandLogoAlt}
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
