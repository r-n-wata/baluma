import { useState } from "react";
import ReviewCard from "../../atoms/ReviewCard/ReviewCard";
import Quote from "../../../assets/blockquote.svg";
import styles from "./Reviews.module.scss";
import Navigation from "../../molecules/Navigation/Navigation";
import useReviews from "../../../hooks/useReviews";
import StarRating from "../../atoms/StarRating/StarRating";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation as SwiperNavigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../molecules/Footer/Footer";
import LineSeparator from "../../atoms/Line/LineSeparator";

function Reviews() {
  const { reviews, loading, error, addReview, fetchReviews } = useReviews();
  const [openModal, setOpenModal] = useState(false);
  const [newReview, setNewReview] = useState({
    clientName: "",
    email: "",
    review: "",
    rating: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);
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

  return (
    <div>
      <Navigation />
      <div className={styles.reviewsConCon}>
        <LineSeparator />
        <main className={styles.reviewsCon}>
          <div className={styles.title}>
            <span>Experiencias reales</span>
            <h2>Reseñas de huéspedes</h2>
            <p>Lo que más valoran quienes ya se hospedaron con nosotros.</p>
          </div>

          <button onClick={toggleModal} className={styles.addReviewBtn}>
            Añadir reseña
          </button>

          {loading && <p className={styles.feedback}>Cargando reseñas...</p>}
          {error && <p className={styles.feedback}>{error}</p>}

          <div className={styles.reviews}>
            <blockquote>
              <img className={styles.topQuote} src={Quote} alt="" />
              <img className={styles.bottomQuote} src={Quote} alt="" />
            </blockquote>

            {reviews && reviews.length > 0 ? (
              <Swiper
                modules={[SwiperNavigation, Pagination, Autoplay]}
                spaceBetween={18}
                slidesPerView={4}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1.2,
                    spaceBetween: 14,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
                centeredSlides={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3800, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className={styles.swiperRoot}
              >
                {reviews.map((obj, index) => {
                  const date = new Date(obj.createdAt);
                  const formattedDate = date.toLocaleDateString("es-MX", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  });

                  return (
                    <SwiperSlide
                      key={index}
                      className={`${styles.swiperSlide} ${
                        index === activeIndex ? styles.activeSlide : ""
                      }`}
                    >
                      <ReviewCard
                        key={index}
                        review={obj.review}
                        name={obj.clientName}
                        rating={obj.rating}
                        date={formattedDate}
                        colors={colors[index % colors.length]}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              !loading && (
                <p className={styles.feedback}>Aún no hay opiniones disponibles.</p>
              )
            )}
          </div>

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
