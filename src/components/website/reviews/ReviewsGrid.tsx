import type { ReviewItem } from "@/types/website";
import ReviewCard from "./ReviewCard";

type ReviewsGridProps = {
  reviews: ReviewItem[];
};

export default function ReviewsGrid({ reviews }: ReviewsGridProps) {
  return (
    <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}
