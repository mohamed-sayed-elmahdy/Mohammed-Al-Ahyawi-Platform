import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 select-none"
      aria-label="الانتقال إلى الصفحة الرئيسية"
    >
      <Image
        src="/logo2.png"
        alt="شعار محمد الإحيـوى"
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
          محمد الإحيـوى
        </p>
      </div>
    </Link>
  );
}