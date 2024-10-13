import { useState } from "react";
import ReviewCard from "../../atoms/ReviewCard/ReviewCard";
import Quote from "../../../assets/blockquote.svg";
import styles from "./Reviews.module.scss";
import Navigation from "../../molecules/Navigation/Navigation";
import background1 from "../../../assets/background.jpg";
import useReviews from "../../../hooks/useReviews"; // Custom hook for reviews
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

function Reviews() {
  const { reviews, loading, error, addReview, fetchReviews } = useReviews(); // Use the custom hook
  const [openModal, setOpenModal] = useState(false);
  const [newReview, setNewReview] = useState({
    clientName: "",
    email: "",
    review: "",
    rating: 0,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRating = (rating: number) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addReview(newReview); // Add review via Zustand store
    setNewReview({ clientName: "", email: "", review: "", rating: 0 }); // Clear form
    setOpenModal(false); // Close modal
    fetchReviews(); // Fetch updated reviews
  };

  console.log("reviews", reviews);
  return (
    <div>
      <Navigation />
      <div className={styles.reviewsConCon}>
        <main className={styles.reviewsCon}>
          <div className={styles.title}>
            <h2>RESEÑAS</h2>
            <p>Lo que dicen las clientes:</p>
          </div>

          <button
            onClick={toggleModal}
            className={styles.addReviewBtn}
            style={{
              backgroundColor: "#f8f8f8",
              color: "#000",
              border: "1px solid #000",
            }}
          >
            Añadir Reseña
          </button>

          {loading && <p>Cargando reseñas...</p>}
          {error && <p>{error}</p>}

          <div className={styles.reviews}>
            <blockquote>
              <img className={styles.topQuote} src={Quote} alt="quote" />
              <img className={styles.bottomQuote} src={Quote} alt="quote" />
            </blockquote>

            {reviews && reviews.length > 0 ? (
              <>
                {" "}
                <Swiper
                  modules={[SwiperNavigation, Pagination, Autoplay]}
                  spaceBetween={2}
                  slidesPerView={4}
                  breakpoints={{
                    320: {
                      slidesPerView: 1, // 1 slide for screens smaller than 480px
                      spaceBetween: 10,
                    },
                    480: {
                      slidesPerView: 1, // 1 slide for screens between 480px and 768px
                      spaceBetween: 15,
                    },
                    768: {
                      slidesPerView: 2, // 2 slides for screens between 768px and 1024px
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3, // 3 slides for screens larger than 1024px
                      spaceBetween: 30,
                    },
                  }}
                  centeredSlides={true}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                  {reviews.map((obj, index) => {
                    const colors = ["#A7E4DE", "#89E1BC", "#83C27C", "#D8E07A"];
                    const date = new Date(obj.createdAt);

                    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
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
                <div className={styles.swiperContainer}>
                  <div className={styles.reviewsMobile}>
                    {reviews.map((obj, index) => {
                      const colors = [
                        "#A7E4DE",
                        "#89E1BC",
                        "#83C27C",
                        "#D8E07A",
                      ];
                      const date = new Date(obj.createdAt);

                      const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
                      return (
                        <ReviewCard
                          key={index}
                          review={obj.review}
                          name={obj.clientName}
                          rating={obj.rating}
                          date={formattedDate}
                          colors={colors[index % colors.length]}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <p>No hay opiniones disponibles</p>
            )}
          </div>
          <div></div>

          {openModal && (
            <div className={styles.modal}>
              <section className={styles.addReview}>
                {" "}
                <div className={styles.closeModal} onClick={toggleModal}>
                  {" "}
                  X{" "}
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="clientName"
                    placeholder="Name"
                    value={newReview.clientName}
                    onChange={handleInputChange}
                    required
                  />

                  <textarea
                    name="review"
                    placeholder="Review"
                    value={newReview.review}
                    onChange={handleInputChange}
                    required
                  />

                  {/* Star Rating */}
                  <div className={styles.starRating}>
                    <StarRating onRate={handleRating} />
                    <p>Clasification: {newReview.rating} estrella</p>
                  </div>

                  <input type="submit" value="Enviar" />
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
