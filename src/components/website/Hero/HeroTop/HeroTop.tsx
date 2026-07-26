import HeroContent from "./HeroContent";
import HeroCountries from "@/components/website/Hero/HeroTop/HeroCountries";
import HeroImage from "@/components/website/Hero/HeroTop/HeroImage";

export default function HeroTop() {
  return (
    <div className="grid grid-cols-[350px_1fr_250px] items-start gap-10">
      {/* Right Column */}
      <HeroImage />

      {/* Center Column */}
      <HeroContent />

      {/* Left Column */}
      <HeroCountries />
    </div>
  );
}