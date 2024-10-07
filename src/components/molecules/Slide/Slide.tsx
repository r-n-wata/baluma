// Import Swiper React components
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeImgs } from "../../../data/homeImgs";
import styles from "./Slide.module.scss";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import LineSeparator from "../../atoms/Line/LineSeparator";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
const Slide = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const handleSwiper = (swiper: SwiperType) => {
    console.log(swiper);
    setThumbsSwiper(swiper);
  };

  return (
    <div className={styles.slide}>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#000",
            "--swiper-pagination-color": "#000",
          } as React.CSSProperties
        }
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiperLarge}
      >
        {homeImgs.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt="gallery-img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={(swiper) => handleSwiper(swiper)}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.swiperSmall}
      >
        {homeImgs.map((img) => (
          <SwiperSlide key={img}>
            <img src={img} alt="gallery-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;
