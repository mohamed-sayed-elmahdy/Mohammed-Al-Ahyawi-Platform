import Hero from "@/components/website/Hero/Hero";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import FeaturedReviews from "./FeaturedReviews/FeaturedReviews";
import FeaturedStories from "./FeaturedStories/FeaturedStories";
import LatestArticles from "./LatestArticles/LatestArticles";
import JourneyMap from "./JourneyMap/JourneyMap";
import CountriesDestinations from "./CountriesDestinations/CountriesDestinations";
import HomeCTA from "./HomeCTA/HomeCTA";
import Footer from "./Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedReviews />
      <FeaturedStories />
      <LatestArticles />
      <JourneyMap />
      <CountriesDestinations />
      <HomeCTA />
      <Footer />
    </>
  );
}
