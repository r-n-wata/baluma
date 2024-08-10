import Navigation from "../../molecules/Navigation/Navigation";
import About from "../../molecules/About/About";
import Slide from "../../molecules/Slide/Slide";
import LangButton from "../../atoms/LangButton/LangButton";
import styles from "./Home.module.scss";
import ArrowDown from "../../../assets/home/arrow-down.png";
import WhatsAppButton from "../../atoms/WhatsAppButton/WhatsAppButton";
function Home() {
  const handleScroll = () => {
    const target = document.getElementById("about");
    scrollToElement(target, 1000); // Scroll to target over 2000 milliseconds (2 seconds)
  };

  const scrollToElement = (element: HTMLElement | null, duration: number) => {
    const start = window.pageYOffset;
    const end = element?.offsetTop;
    const change = end !== undefined ? end - start : 0;
    const increment = 20;

    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, start, change, duration);
      window.scrollTo(0, val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };
  return (
    <main>
      {" "}
      <Navigation />
      <div className={styles.home}>
        {" "}
        <section className={styles.homeSection}>
          <div className={styles.top}></div>
          <div className={styles.arrowButton}>
            <button onClick={handleScroll}>
              <img src={ArrowDown} alt="" />
            </button>
          </div>
        </section>
        <section id="about" className={styles.aboutSection}>
          <About />
        </section>
        <section id="gallery" className={styles.gallerySection}>
          <Slide />
        </section>
        <div className={styles.langButton}>
          <WhatsAppButton
            phoneNumber="+529831312042"
            message="Hello, I'm interested in your property. Please contact me."
          />
          <LangButton />
        </div>
      </div>
    </main>
  );
}

export default Home;
