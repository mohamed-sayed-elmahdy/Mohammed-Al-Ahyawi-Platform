import HeroContent from "./HeroContent";
import HeroCountries from "@/components/website/home/Hero/HeroTop/HeroCountries";
import HeroImage from "@/components/website/home/Hero/HeroTop/HeroImage";

export default function HeroTop() {
  return (
    <div className="grid grid-cols-[320px_1fr_300px] items-start gap-10">
      {/* Right Column */}
      <HeroImage />

      {/* Center Column */}
      <HeroContent />

      {/* Left Column */}
      <HeroCountries />
    </div>
  );
}