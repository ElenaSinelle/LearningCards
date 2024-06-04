import styles from "./Vocabulary.module.scss";
import { terms } from "../../terms";
import VocabItem from "./VocabItem";
import VocabHeader from "./VocabHeader";

export default function Vocabulary() {
  return (
    <div className={styles.vocab}>
      <h2 className={styles.vocab__title2}>Vocabulary Help</h2>
      <h3 className={styles.vocab__title2}>Vocabulary Variants</h3>
      <div className={styles.vocab__container}>
        <VocabHeader />
        {terms.map((term) => (
          <VocabItem key={term.id} term={term} />
        ))}
      </div>
    </div>
  );
}
