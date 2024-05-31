import ImgLink from "../Links/ImgLink";
import audio from "../../images/icons/audio.svg";
import PlainLink from "../Links/PlainLink";
import styles from "./Card.module.scss";

export default function Card({ term, id = "" }) {
  return (
    <div id={id} className={styles.card}>
      <h4 className={styles.card__cardTitle}>Term</h4>

      <ImgLink
        className={styles.card__readCardBtn}
        src={audio}
        alt="read card button"
      />

      <div className={styles.card__term}>{term}</div>

      <PlainLink
        className={styles.card__clickToFlip}
        href="./."
        contents="click to flip"
      />
    </div>
  );
}
