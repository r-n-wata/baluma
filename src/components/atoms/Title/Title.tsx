import styles from "./Title.module.scss";
function Title({ title }: { title: string }) {
  return (
    <div className={styles.titleCon}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default Title;
