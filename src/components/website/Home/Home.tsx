import Hero from "@/components/website/Home/Hero/Hero";
import FeaturedReviews from "@/components/website/Home/FeaturedReviews/FeaturedReviews";
import FeaturedCategories from "@/components/website/Home/FeaturedCategories/FeaturedCategories";
import FeaturedStories from "@/components/website/Home/FeaturedStories/FeaturedStories";
import LatestArticles from "@/components/website/Home/LatestArticles/LatestArticles";
import JourneyMap from "@/components/website/Home/JourneyMap/JourneyMap";
import CountriesDestinations from "@/components/website/Home/CountriesDestinations/CountriesDestinations";
import HomeCTA from "@/components/website/Home/HomeCTA/HomeCTA";
import Footer from "@/components/website/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedReviews />
      <FeaturedStories />
      {/* <LatestArticles /> */}
      <JourneyMap />
      <CountriesDestinations />
      <HomeCTA />
      <Footer />
    </>
  );
}
