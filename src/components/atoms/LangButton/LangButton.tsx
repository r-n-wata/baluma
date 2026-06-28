import Globe2 from "../../../assets/globe2.png";
import styles from "./LangButton.module.scss";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../../lang/i18n";

function LangButton() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage === "es" ? "es" : "en";
  const nextLanguage = currentLanguage === "es" ? "en" : "es";
  const nextLanguageLabel = t(
    nextLanguage === "es" ? "language.spanish" : "language.english"
  );

  return (
    <div className={styles.langButtonCon}>
      <button
        className={styles.button}
        type="button"
        onClick={() => changeLanguage(nextLanguage)}
        aria-label={t("language.switchTo", { language: nextLanguageLabel })}
        title={t("language.switch")}
      >
        <img src={Globe2} alt="" className={styles.globe} />
        <span>{nextLanguage.toUpperCase()}</span>
      </button>
    </div>
  );
}

export default LangButton;
