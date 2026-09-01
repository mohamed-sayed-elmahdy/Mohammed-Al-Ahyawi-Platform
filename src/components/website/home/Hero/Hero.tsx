import HeroTop from "@/components/website/home/Hero/HeroTop/HeroTop";
import HeroBottom from "@/components/website/home/Hero/HeroBottom/HeroBottom";

function Hero() {
  return (
    <section
      className="
        bg-black bg-[url('/hero7.png')] bg-no-repeat
        bg-cover bg-center
        pt-24 pb-10
        min-h-0
        lg:min-h-[100vh] lg:h-[120vh] lg:pb-0
        lg:bg-position-[0_-420px]
      "
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col px-4 xl:px-6">
        <HeroTop />
        <HeroBottom />
      </div>
    </section>
  );
}

export default Hero;