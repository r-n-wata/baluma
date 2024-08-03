// Import Swiper React components
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import h1 from "../../../assets/home/h1.jpg";
import h2 from "../../../assets/home/h2.jpg";
import h4 from "../../../assets/home/h4.jpg";
import h5 from "../../../assets/home/h5.jpg";
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
        <SwiperSlide>
          <img src={h1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h5} alt="" />
        </SwiperSlide>
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
        <SwiperSlide>
          <img src={h1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={h5} alt="" />
        </SwiperSlide>
      </Swiper>
      <LineSeparator />
    </div>
  );
};

export default Slide;
