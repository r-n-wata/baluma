import useReviewsStore from "../store/reviewsStore";
import { useEffect } from "react";

type ReviewsStore = {
  reviews: any[];
  loading: boolean;
  error: string | null;
  fetchReviews: () => void;
  addReview: (review: any) => void;
};

// Custom hook for fetching and interacting with reviews
const useReviews = () => {
  const { reviews, loading, error, fetchReviews, addReview } =
    useReviewsStore() as ReviewsStore;

  // Fetch reviews when the hook is used (component mounts)
  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // Return reviews and actions for managing reviews
  return {
    fetchReviews,
    reviews,
    loading,
    error,
    addReview,
  };
};

export default useReviews;
