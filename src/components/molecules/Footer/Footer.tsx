import styles from "./Footer.module.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <p>
          Baluma Bacalar © {year}. Hospedajes con calma, diseño y buena
          ubicación.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
