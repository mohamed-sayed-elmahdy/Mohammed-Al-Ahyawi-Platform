import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 select-none"
      aria-label="الانتقال إلى الصفحة الرئيسية">
      <Image src="/logo2.png"
        alt="شعار محمد الإحيـوى"
        width={45}
        height={45}
        priority />
      <div className="flex flex-col leading-none">
        <span className="text-xs font-medium text-(--color-text)">
          الإعلامي
        </span>
        <p className="text-xl font-extrabold text-(--color-text) leading-5">
          محمد الإحيـوى
        </p>
      </div>
    </Link>
  );
}