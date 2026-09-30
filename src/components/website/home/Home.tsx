import Hero from "@/components/website/home/Hero/Hero";
import FeaturedReviews from "@/components/website/home/FeaturedReviews/FeaturedReviews";
import FeaturedCategories from "@/components/website/home/FeaturedCategories/FeaturedCategories";
import FeaturedStories from "@/components/website/home/FeaturedStories/FeaturedStories";
import LatestArticles from "@/components/website/home/LatestArticles/LatestArticles";
import JourneyMap from "@/components/website/home/JourneyMap/JourneyMap";
import HomeCTA from "@/components/website/home/HomeCTA/HomeCTA";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedReviews />
      <FeaturedStories />
      <LatestArticles />
      <JourneyMap />
      {/* <CountriesDestinations /> */}
      <HomeCTA />
    </>
  );
}
