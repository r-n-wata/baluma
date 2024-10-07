import React, { useState } from "react";
import styles from "./StarRating.module.scss"; // Your custom styles

const StarRating = ({ totalStars = 5, onRate }) => {
  const [hoveredStars, setHoveredStars] = useState(0);
  const [selectedStars, setSelectedStars] = useState(0);

  const handleMouseMove = (e, index) => {
    const { left, width } = e.target.getBoundingClientRect();
    const relativeX = e.clientX - left;
    const halfStar = relativeX < width / 2;
    setHoveredStars(halfStar ? index - 0.5 : index);
  };

  const handleMouseLeave = () => {
    setHoveredStars(0);
  };

  const handleClick = (index) => {
    setSelectedStars(index);
    onRate(index); // Pass the rating to the parent
  };

  return (
    <div className={styles.starRating} onMouseLeave={handleMouseLeave}>
      {[...Array(totalStars)].map((_, index) => (
        <div
          key={index}
          className={`
            ${styles.star} 
            ${hoveredStars >= index + 1 ? styles.hovered : ""} 
            ${selectedStars >= index + 1 ? styles.selected : ""}
          `}
          onMouseMove={(e) => handleMouseMove(e, index + 1)}
          onClick={() => handleClick(index + 1)}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default StarRating;
