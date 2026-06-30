import { create } from "zustand";

type Review = Record<string, unknown>;

type ReviewsStore = {
  reviews: Review[];
  loading: boolean;
  error: string | null;
  fetchReviews: () => Promise<void>;
  addReview: (review: Review) => Promise<boolean>;
};

const useReviewsStore = create<ReviewsStore>((set) => ({
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
      const data: Review[] = await response.json();
      set({ reviews: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch reviews", loading: false });
    }
  },

  // Add a new review
  addReview: async (newReview: Review) => {
    try {
      set({ error: null });
      const response = await fetch(
        "https://complete-nedi-freelancing123-168024ba.koyeb.app/api/reviews",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newReview),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add review");
      }

      return true;
    } catch (error) {
      set({ error: "Failed to add review" });
      return false;
    }
  },
}));

export default useReviewsStore;
