import styles from "./About.module.scss";
import LineSeparator from "../../atoms/Line/LineSeparator";
import Title from "../../atoms/Title/Title";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const features = t("about.features", { returnObjects: true }) as string[];

  return (
    <div className={styles.about} id="about">
      <span className={styles.kicker}>{t("about.kicker")}</span>
      <Title title={t("about.title")} />
      <div className={styles.content}>
        <p>{t("about.description")}</p>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article key={feature} className={styles.featureCard}>
              <span></span>
              <p>{feature}</p>
            </article>
          ))}
        </div>
      </div>
      <LineSeparator />
    </div>
  );
}

export default About;
