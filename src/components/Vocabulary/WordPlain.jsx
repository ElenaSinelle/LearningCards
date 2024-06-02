import styles from "./Vocabulary.module.scss";

export default function WordPlain({ english, transcription, russian }) {
  return (
    <>
      <div className={styles.vocab__item}>{english}</div>
      <div className={styles.vocab__item}>{transcription}</div>
      <div className={styles.vocab__item}>{russian}</div>
    </>
  );
}
