import Link from "next/link";
import BrandLogo from "@/components/website/BrandLogo";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 select-none"
      aria-label="الانتقال إلى الصفحة الرئيسية"
    >
      <BrandLogo
        width={45}
        height={45}
        priority
        className="size-9 sm:size-11"
      />
      <div className="flex flex-col leading-none">
        <span className="text-[10px] font-medium text-(--color-text) sm:text-xs">
          الإعلامي
        </span>
        <p className="text-base font-extrabold leading-5 text-(--color-text) sm:text-xl">
          محمد الإحيـوي
        </p>
      </div>
    </Link>
  );
}