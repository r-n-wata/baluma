import Globe2 from "../../../assets/globe2.png";
import styles from "./LangButton.module.scss";

function LangButton() {
  return (
    <div className={styles.langButtonCon}>
      <button className={styles.button}>
        <img src={Globe2} alt="" className={styles.globe} />
      </button>
    </div>
  );
}

export default LangButton;
