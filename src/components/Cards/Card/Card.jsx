import ImgLink from "../../Links/ImgLink/ImgLink";
import audio from "../../../images/icons/audio.svg";

import styles from "./Card.module.scss";

export default function Card({ term, translated, handleTranslation, id }) {
  return (
    <div id={id} className={styles.card}>
      <h4 className={styles.card__cardTitle}>Term</h4>

      <ImgLink
        className={styles.card__readCardBtn}
        src={audio}
        alt="read card button"
      />

      <div className={styles.card__term}>{term.english}</div>

      {!translated ? (
        <button
          className={styles.card__showTranslation}
          onClick={handleTranslation}
        >
          Show translation
        </button>
      ) : (
        <div className={styles.card__translation}>{term.russian}</div>
      )}
    </div>
  );
}
