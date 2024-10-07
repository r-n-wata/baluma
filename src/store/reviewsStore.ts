import { create } from "zustand";

type ReviewsStore = {
  reviews: any[];
  loading: boolean;
  error: string | null;
  fetchReviews: () => void;
  addReview: (review: any) => void;
};

const useReviewsStore = create((set) => ({
  reviews: [],
  loading: false,
  error: null,

  // Fetch reviews from the API
  fetchReviews: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://complete-nedi-freelancing123-168024ba.koyeb.app/api/reviews"
      );
      const data = await response.json();
      set({ reviews: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch reviews", loading: false });
    }
  },

  // Add a new review
  addReview: async (newReview: any) => {
    try {
      const response = await fetch(
        "https://complete-nedi-freelancing123-168024ba.koyeb.app/api/reviews",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newReview),
        }
      );
      const addedReview = await response.json();
      set((state: any) => ({ reviews: [...state.reviews, addedReview] }));
    } catch (error) {
      set({ error: "Failed to add review" });
    }
  },
}));

export default useReviewsStore;
