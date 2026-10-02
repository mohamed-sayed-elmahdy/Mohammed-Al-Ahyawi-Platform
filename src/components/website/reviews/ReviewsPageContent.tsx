"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import { reviews } from "@/data/reviews";
import { saudiJourneyCities } from "@/data/journeys";
import type { ReviewCategoryFilter, ReviewSort } from "@/types/website";
import ReviewsEmptyState from "./ReviewsEmptyState";
import ReviewsFilters from "./ReviewsFilters";
import ReviewsGrid from "./ReviewsGrid";
import ReviewsMetaRow from "./ReviewsMetaRow";

const reviewCountries = [...new Set(reviews.map((review) => review.country))];

type ReviewsPageContentProps = {
  initialCategory: ReviewCategoryFilter;
};

export default function ReviewsPageContent({
  initialCategory,
}: ReviewsPageContentProps) {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");
  const [selectedCategory, setSelectedCategory] =
    useState<ReviewCategoryFilter>(initialCategory);
  const [sort, setSort] = useState<ReviewSort>("newest");

  const filteredReviews = useMemo(() => {
    const locationAndCategoryReviews = reviews.filter((review) => {
      if (selectedCountry !== "all" && review.country !== selectedCountry) {
        return false;
      }
      if (selectedCity !== "all" && review.city !== selectedCity) return false;
      if (selectedCategory !== "all" && review.categoryId !== selectedCategory) {
        return false;
      }
      return true;
    });

    return [...locationAndCategoryReviews].sort((first, second) => {
      const newestFirst = second.dateISO.localeCompare(first.dateISO);

      switch (sort) {
        case "newest":
          return newestFirst;
        case "oldest":
          return -newestFirst;
        case "top-rated":
          return second.rating - first.rating || newestFirst;
        case "lowest-rated":
          return first.rating - second.rating || newestFirst;
        default:
          return 0;
      }
    });
  }, [selectedCategory, selectedCity, selectedCountry, sort]);

  const categoryLabel =
    categories.find((category) => category.id === selectedCategory)?.title ??
    "الكل";
  const locationLabel =
    selectedCity !== "all"
      ? `${selectedCity} · ${selectedCountry}`
      : selectedCountry !== "all"
        ? selectedCountry
        : null;

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    setSelectedCity("all");
  };

  const handleCategoryChange = (category: ReviewCategoryFilter) => {
    if (category === selectedCategory) return;

    setSelectedCategory(category);
    router.push(
      category === "all"
        ? "/reviews"
        : `/reviews?category=${encodeURIComponent(category)}`,
      { scroll: false },
    );
  };

  const resetFilters = () => {
    setSelectedCountry("all");
    setSelectedCity("all");
    setSelectedCategory("all");
    setSort("newest");
    router.push("/reviews", { scroll: false });
  };

  return (
    <section className="bg-(--color-background) py-8 pb-16 sm:py-10 sm:pb-24 lg:py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-10">
        <ReviewsFilters
          categories={categories}
          countries={reviewCountries}
          cities={saudiJourneyCities}
          selectedCountry={selectedCountry}
          selectedCity={selectedCity}
          onCountryChange={handleCountryChange}
          onCityChange={setSelectedCity}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <div className="mt-6 sm:mt-4">
          <ReviewsMetaRow
            count={filteredReviews.length}
            locationLabel={locationLabel}
            categoryLabel={categoryLabel}
            sort={sort}
            onSortChange={setSort}
          />
        </div>
        <div className="mt-6 sm:mt-8">
          {filteredReviews.length > 0 ? (
            <ReviewsGrid reviews={filteredReviews} />
          ) : (
            <ReviewsEmptyState onReset={resetFilters} />
          )}
        </div>
      </div>
    </section>
  );
}
