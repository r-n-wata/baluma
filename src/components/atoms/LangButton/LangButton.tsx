import styles from "./LangButton.module.scss";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../../lang/i18n";

function LangButton() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage === "es" ? "es" : "en";

  return (
    <div className={styles.langButtonCon} aria-label={t("language.switch")} role="group">
      <button
        className={`${styles.button} ${currentLanguage === "es" ? styles.active : ""}`}
        type="button"
        onClick={() => changeLanguage("es")}
        aria-pressed={currentLanguage === "es"}
        aria-label={t("language.switchTo", { language: t("language.spanish") })}
      >
        ES
      </button>
      <span className={styles.separator} aria-hidden="true">
        /
      </span>
      <button
        className={`${styles.button} ${currentLanguage === "en" ? styles.active : ""}`}
        type="button"
        onClick={() => changeLanguage("en")}
        aria-pressed={currentLanguage === "en"}
        aria-label={t("language.switchTo", { language: t("language.english") })}
      >
        EN
      </button>
    </div>
  );
}

export default LangButton;
