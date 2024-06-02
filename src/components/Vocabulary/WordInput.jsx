import styles from "./Vocabulary.module.scss";

export default function WordInput() {
  return (
    <>
      <input className={styles.vocab__item} value=""></input>
      <input className={styles.vocab__item} value=""></input>
      <input className={styles.vocab__item} value=""></input>
    </>
  );
}
