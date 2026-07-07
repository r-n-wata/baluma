import { useMemo, useState } from "react";
import ReviewCard from "../../atoms/ReviewCard/ReviewCard";
import Quote from "../../../assets/blockquote.svg";
import styles from "./Reviews.module.scss";
import Navigation from "../../molecules/Navigation/Navigation";
import useReviews from "../../../hooks/useReviews";
import StarRating from "../../atoms/StarRating/StarRating";
import Footer from "../../molecules/Footer/Footer";
import LineSeparator from "../../atoms/Line/LineSeparator";
import { useTranslation } from "react-i18next";
import Seo from "../../atoms/Seo/Seo";
import { buildWebPageStructuredData } from "../../../seo/structuredData";

const getReviewText = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }

  if (!value || typeof value !== "object") {
    return "";
  }

  const nestedReview = (value as { review?: unknown }).review;
  return typeof nestedReview === "string" ? nestedReview : "";
};

const getReviewName = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }

  if (!value || typeof value !== "object") {
    return "Guest";
  }

  const nestedName = (value as { clientName?: unknown }).clientName;
  return typeof nestedName === "string" && nestedName.trim()
    ? nestedName
    : "Guest";
};

function Reviews() {
  const { t, i18n } = useTranslation();
  const { reviews, loading, error, addReview, fetchReviews } = useReviews();
  const title = t("seo.reviewsTitle");
  const description = t("seo.reviewsDescription");
  const [selectedRating, setSelectedRating] = useState<"all" | "5" | "4" | "3">(
    "all"
  );
  const [openModal, setOpenModal] = useState(false);
  const [newReview, setNewReview] = useState({
    clientName: "",
    email: "",
    review: "",
    rating: 0,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRating = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const wasSubmitted = await addReview(newReview);

      if (!wasSubmitted) {
        return;
      }

      setNewReview({ clientName: "", email: "", review: "", rating: 0 });
      setOpenModal(false);
      await fetchReviews();
    } finally {
      setIsSubmitting(false);
    }
  };

  const colors = ["#ecf4f0", "#f6efe6", "#ebf3f8", "#f3ede7"];
  const reviewCount = reviews?.length ?? 0;
  const normalizedReviews = useMemo(
    () =>
      (reviews ?? []).map((review, index) => {
        const reviewRecord =
          review && typeof review === "object" && "review" in review
            ? (review as { review?: unknown })
            : {};
        const reviewContent = getReviewText(reviewRecord.review ?? review);
        const clientName = getReviewName(
          (review as { clientName?: unknown }).clientName ?? review
        );
        const rating = Number(
          (review as { rating?: unknown }).rating ??
            (reviewRecord.review as { rating?: unknown } | undefined)?.rating ??
            0
        );
        const createdAt = (review as { createdAt?: unknown }).createdAt
          ? new Date(review.createdAt)
          : new Date(0);

        return {
          ...review,
          clientName,
          review: reviewContent,
          id: review._id ?? review.id ?? `${clientName || "review"}-${index}`,
          normalizedRating: Number.isFinite(rating) ? rating : 0,
          normalizedCreatedAt: createdAt,
        };
      }),
    [reviews]
  );
  const filteredReviews = [...normalizedReviews]
    .filter((review) => {
      if (selectedRating === "all") return true;
      if (selectedRating === "5") return review.normalizedRating === 5;
      if (selectedRating === "4") return review.normalizedRating === 4;
      return review.normalizedRating <= 3;
    });

  return (
    <div>
      <Seo
        title={title}
        description={description}
        structuredData={buildWebPageStructuredData({
          title,
          description,
          pathname: "/reviews",
          locale: i18n.resolvedLanguage === "es" ? "es-MX" : "en-US",
        })}
      />
      <Navigation />
      <div className={styles.reviewsConCon}>
        <LineSeparator />
        <main className={styles.reviewsCon}>
          <section className={styles.hero}>
            <div className={styles.title}>
              <span>{t("reviews.heroKicker")}</span>
              <h2>{t("reviews.heroTitle")}</h2>
              <p>{t("reviews.heroDescription")}</p>
            </div>
          </section>

          <button onClick={toggleModal} className={styles.addReviewBtn}>
            {t("reviews.addReview")}
          </button>

          {loading && <p className={styles.feedback}>{t("reviews.loading")}</p>}
          {error && <p className={styles.feedback}>{t("reviews.error")}</p>}

          <section className={styles.reviewsSection}>
            <img className={styles.topQuote} src={Quote} alt="" />
            <img className={styles.bottomQuote} src={Quote} alt="" />

            <div className={styles.filtersBar}>
              <div className={styles.filterGroup}>
                <span>{t("reviews.filters.label")}</span>
                <button
                  type="button"
                  className={selectedRating === "all" ? styles.activeFilter : ""}
                  onClick={() => setSelectedRating("all")}
                >
                  {t("reviews.filters.all")}
                </button>
                <button
                  type="button"
                  className={selectedRating === "5" ? styles.activeFilter : ""}
                  onClick={() => setSelectedRating("5")}
                >
                  {t("reviews.filters.five")}
                </button>
                <button
                  type="button"
                  className={selectedRating === "4" ? styles.activeFilter : ""}
                  onClick={() => setSelectedRating("4")}
                >
                  {t("reviews.filters.four")}
                </button>
                <button
                  type="button"
                  className={selectedRating === "3" ? styles.activeFilter : ""}
                  onClick={() => setSelectedRating("3")}
                >
                  {t("reviews.filters.threeOrLess")}
                </button>
              </div>
            </div>

            <p className={styles.resultsCount}>
              {t("reviews.results", {
                shown: filteredReviews.length,
                total: reviewCount,
              })}
            </p>

            {filteredReviews.length > 0 ? (
              <div className={styles.reviewsGrid}>
                {filteredReviews.map((obj, index) => {
                  const formattedDate = obj.normalizedCreatedAt.toLocaleDateString(
                    i18n.resolvedLanguage === "es" ? "es-MX" : "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  );

                  return (
                    <ReviewCard
                      key={obj.id}
                      review={obj.review}
                      name={obj.clientName}
                      rating={obj.normalizedRating}
                      date={formattedDate}
                      colors={colors[index % colors.length]}
                    />
                  );
                })}
              </div>
            ) : (
              !loading && (
                <p className={styles.feedback}>
                  {t("reviews.empty")}
                </p>
              )
            )}
          </section>

          {openModal && (
            <div className={styles.modal}>
              <section className={styles.addReview}>
                <button
                  type="button"
                  className={styles.closeModal}
                  onClick={toggleModal}
                  aria-label={t("reviews.modal.close")}
                >
                  X
                </button>
                <h3>{t("reviews.modal.title")}</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="clientName"
                    placeholder={t("reviews.modal.namePlaceholder")}
                    value={newReview.clientName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("reviews.modal.emailPlaceholder")}
                    value={newReview.email}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    name="review"
                    placeholder={t("reviews.modal.reviewPlaceholder")}
                    value={newReview.review}
                    onChange={handleInputChange}
                    required
                  />
                  <div className={styles.starRating}>
                    <StarRating onRate={handleRating} />
                    <p>{t("reviews.modal.rating", { count: newReview.rating })}</p>
                  </div>
                  <input
                    type="submit"
                    value={
                      isSubmitting
                        ? t("reviews.modal.submitting")
                        : t("reviews.modal.submit")
                    }
                    disabled={isSubmitting || newReview.rating === 0}
                  />
                </form>
              </section>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Reviews;
