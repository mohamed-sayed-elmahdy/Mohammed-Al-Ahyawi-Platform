
import HeroTop from '@/components/website/Hero/HeroTop/HeroTop'
import HeroBottom from '@/components/website/Hero/HeroBottom/HeroBottom'
function Hero() {
  return (
    <section className="pt-20 h-[120vh] bg-black bg-[url('/hero7.png')] bg-position-[0_-300px] bg-cover bg-no-repeat ">
      <div className='flex container mx-auto flex-col'>
        <HeroTop />
        <HeroBottom />
      </div>
    </section>
  )
}

export default Hero;