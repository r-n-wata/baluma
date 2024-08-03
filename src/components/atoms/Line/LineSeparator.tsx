import styles from "./LineSeparator.module.scss";

function LineSeparator() {
  return (
    <div className={styles.lineContainer}>
      <div className={styles.line}></div>
    </div>
  );
}

export default LineSeparator;
