import Image from "next/image";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";

export default function HeroImage() {
  return (
    <div className="flex flex-col items-center gap-4 ps-0 lg:gap-6 ">
      <div className="relative z-10">
        <Image
          src="/mohamedwhite1.png"
          alt="الإعلامي محمد الإحيوي"
          width={290}
          height={320}
          priority
          className="h-auto w-[200px] rounded-xl object-cover sm:w-[240px] lg:w-[290px]"
        />
      </div>

      <div className="relative z-20 -mt-16 flex w-full max-w-[380px] flex-col items-center gap-3 px-2 sm:-mt-20 lg:-mt-32 lg:max-w-none">
        <HeroSocial />
        <HeroStats />
      </div>
    </div>
  );
}