import styles from "./About.module.scss";
import LineSeparator from "../../atoms/Line/LineSeparator";
import Title from "../../atoms/Title/Title";

function About() {
  const features = [
    "Vistas privilegiadas y estancias con identidad propia.",
    "Selección curada para escapadas tranquilas o viajes familiares.",
    "Asesoría directa para encontrar la casa que mejor encaje contigo.",
  ];

  return (
    <div className={styles.about} id="about">
      <span className={styles.kicker}>Tu próxima estancia</span>
      <Title title="Sobre" />
      <div className={styles.content}>
        <p>
          En Baluma Bacalar reunimos espacios pensados para vivir la laguna con
          calma. Encontrarás alojamientos frente al agua, casas rodeadas de
          naturaleza y opciones céntricas con una experiencia más clara desde
          el primer vistazo.
        </p>
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
