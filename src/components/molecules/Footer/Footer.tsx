import styles from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footer}>
        <p>Baluma Bacalar © {year}. {t("footer.tagline")}</p>
      </div>
    </footer>
  );
}

export default Footer;
