import styles from "./Vocabulary.module.scss";
import { words } from "../../words";
import VocabItem from "./VocabItem";
import VocabHeader from "./VocabHeader";

export default function Vocabulary() {
  return (
    <div className={styles.vocab}>
      <h2 className={styles.vocab__title2}>Vocabulary Help</h2>
      <h3 className={styles.vocab__title2}>Vocabulary Variants</h3>
      <div className={styles.vocab__container}>
        <VocabHeader />
        {words.map((word) => (
          <VocabItem key={word.id} word={word} />
        ))}
      </div>
    </div>
  );
}
