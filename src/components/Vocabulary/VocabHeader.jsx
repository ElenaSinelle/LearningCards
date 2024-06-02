import styles from "./Vocabulary.module.scss";

export default function VocabHeader() {
  return (
    <div className={styles.vocab__line}>
      <h4 className={styles.vocab__item}>Term</h4>
      <h4 className={styles.vocab__item}>Transcription</h4>
      <h4 className={styles.vocab__item}>Translation</h4>
      <h4 className={styles.vocab__item}>Command Buttons</h4>
    </div>
  );
}
