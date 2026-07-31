import HeroActions from "@/components/website/Home/Hero/HeroTop/HeroActions";
import HeroBadge from "@/components/website/Home/Hero/HeroTop/HeroBadge";
import HeroCards from "@/components/website/Home/Hero/HeroTop/HeroCards";
import HeroHeading from "@/components/website/Home/Hero/HeroTop/HeroHeading";

export default function HeroContent() {
  return (
    <main className="flex flex-col items-center text-center">
      <HeroBadge />

      <HeroHeading />

      <HeroActions />

      <HeroCards />
    </main>
  );
}