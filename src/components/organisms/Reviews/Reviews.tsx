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

function Reviews() {
  const { t, i18n } = useTranslation();
  const { reviews, loading, error, addReview, fetchReviews } = useReviews();
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
    await addReview(newReview);
    setNewReview({ clientName: "", email: "", review: "", rating: 0 });
    setOpenModal(false);
    fetchReviews();
    setIsSubmitting(false);
  };

  const colors = ["#ecf4f0", "#f6efe6", "#ebf3f8", "#f3ede7"];
  const reviewCount = reviews?.length ?? 0;
  const normalizedReviews = useMemo(
    () =>
      (reviews ?? []).map((review, index) => {
        const rating = Number(review.rating || 0);
        const createdAt = review.createdAt
          ? new Date(review.createdAt)
          : new Date(0);

        return {
          ...review,
          id: review._id ?? review.id ?? `${review.clientName ?? "review"}-${index}`,
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
        title={t("seo.reviewsTitle")}
        description={t("seo.reviewsDescription")}
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
