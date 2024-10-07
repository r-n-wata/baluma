// ReviewCard.tsx
import React from "react";
import styles from "./ReviewCard.module.scss";
import blob from "../../../assets/blob.png";

interface ReviewCardProps {
  name: string;
  review: string;
  rating: number;
  date?: string;
  colors?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  review,
  rating,
  date,
  colors,
}) => {
  const totalStars = 5;
  return (
    <div className={styles.reviewCard} style={{ backgroundColor: colors }}>
      <img
        src={blob}
        alt="reviews user profile"
        loading="lazy"
        className={styles.blob}
      />{" "}
      <div className={styles.reviewInfo}>
        <h4 className={styles.reviewName}>{name}</h4>
        <div className={styles.stars}>
          {/* Loop through the stars */}
          {[...Array(totalStars)].map((_, index) => (
            <span
              key={index}
              className={index < rating ? styles.filledStar : styles.emptyStar}
            >
              {index < rating ? "★" : "☆"}
            </span>
          ))}{" "}
          {rating}
        </div>
        <span className={styles.date}>{date}</span>
      </div>{" "}
      <p className={styles.reviewText}>{review}</p>
    </div>
  );
};

export default ReviewCard;
