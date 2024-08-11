import styles from "./About.module.scss";
import LineSeparator from "../../atoms/Line/LineSeparator";
import Title from "../../atoms/Title/Title";

function About() {
  return (
    <div className={styles.about} id="about">
      <Title title="Sobre" />
      <p>
        En Baluma Bacalar encontrarás las mejores opciones para disfrutar la
        maravillosa laguna de Bacalar en pareja o en familia. Te ofrecemos
        opciones a pie de la laguna con vistas inigualables y rodeadas de
        naturaleza, así como también hospedajes céntricos y bien ubicados.
        Sumérgete en nuestras sugerencias y encontrarás tu lugar ideal...nos
        vemos pronto en BACALAR.
      </p>

      <LineSeparator />
    </div>
  );
}

export default About;
