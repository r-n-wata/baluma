import { useMemo, useState } from "react";
import ReviewCard from "../../atoms/ReviewCard/ReviewCard";
import Quote from "../../../assets/blockquote.svg";
import styles from "./Reviews.module.scss";
import Navigation from "../../molecules/Navigation/Navigation";
import useReviews from "../../../hooks/useReviews";
import StarRating from "../../atoms/StarRating/StarRating";
import Footer from "../../molecules/Footer/Footer";
import LineSeparator from "../../atoms/Line/LineSeparator";

function Reviews() {
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
      <Navigation />
      <div className={styles.reviewsConCon}>
        <LineSeparator />
        <main className={styles.reviewsCon}>
          <section className={styles.hero}>
            <div className={styles.title}>
              <span>Experiencias reales</span>
              <h2>Reseñas de huéspedes</h2>
              <p>
                Una colección de experiencias que transmite cómo se vive una
                estancia en Baluma, sin necesidad de deslizar entre tarjetas.
              </p>
            </div>
          </section>

          <button onClick={toggleModal} className={styles.addReviewBtn}>
            Añadir reseña
          </button>

          {loading && <p className={styles.feedback}>Cargando reseñas...</p>}
          {error && <p className={styles.feedback}>{error}</p>}

          <section className={styles.reviewsSection}>
            <img className={styles.topQuote} src={Quote} alt="" />
            <img className={styles.bottomQuote} src={Quote} alt="" />

            <div className={styles.filtersBar}>
              <div className={styles.filterGroup}>
                <span>Filtrar</span>
                <button
                  type="button"
                  className={selectedRating === "all" ? styles.activeFilter : ""}
                  onClick={() => setSelectedRating("all")}
                >
                  Todas
                </button>
                <button
                  type="button"
                  className={selectedRating === "5" ? styles.activeFilter : ""}
                  onClick={() => setSelectedRating("5")}
                >
                  5 estrellas
                </button>
                <button
                  type="button"
                  className={selectedRating === "4" ? styles.activeFilter : ""}
                  onClick={() => setSelectedRating("4")}
                >
                  4 estrellas
                </button>
                <button
                  type="button"
                  className={selectedRating === "3" ? styles.activeFilter : ""}
                  onClick={() => setSelectedRating("3")}
                >
                  3 o menos
                </button>
              </div>
            </div>

            <p className={styles.resultsCount}>
              Mostrando {filteredReviews.length} de {reviewCount} reseñas
            </p>

            {filteredReviews.length > 0 ? (
              <div className={styles.reviewsGrid}>
                {filteredReviews.map((obj, index) => {
                  const formattedDate = obj.normalizedCreatedAt.toLocaleDateString(
                    "es-MX",
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
                  No hay reseñas que coincidan con estos filtros.
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
                  aria-label="Cerrar modal"
                >
                  X
                </button>
                <h3>Comparte tu experiencia</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="clientName"
                    placeholder="Nombre"
                    value={newReview.clientName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={newReview.email}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    name="review"
                    placeholder="Cuéntanos cómo fue tu estancia"
                    value={newReview.review}
                    onChange={handleInputChange}
                    required
                  />
                  <div className={styles.starRating}>
                    <StarRating onRate={handleRating} />
                    <p>Calificación: {newReview.rating} estrella(s)</p>
                  </div>
                  <input
                    type="submit"
                    value={isSubmitting ? "Enviando..." : "Enviar"}
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
