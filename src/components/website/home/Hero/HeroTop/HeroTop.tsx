import HeroContent from "./HeroContent";
import HeroCountries from "@/components/website/home/Hero/HeroTop/HeroCountries";
import HeroImage from "@/components/website/home/Hero/HeroTop/HeroImage";

export default function HeroTop() {
  return (
    <div
      className="
        grid grid-cols-1 items-start gap-8
        lg:grid-cols-[280px_1fr_260px] lg:gap-8
        xl:grid-cols-[320px_1fr_300px] xl:gap-10
      "
    >
      {/* Mobile order: Content → Image → Countries */}
      <div className="order-2 lg:order-1">
        <HeroImage />
      </div>

      <div className="order-1 lg:order-2">
        <HeroContent />
      </div>

      <div className="order-3 lg:order-3">
        <HeroCountries />
      </div>
    </div>
  );
}