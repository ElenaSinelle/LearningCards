import React, { useContext, useEffect, useState } from "react";
import styles from "./CardsContainer.module.scss";
import { CustomContext } from "../../../Context";

import Card from "../Card/Card";
import CardBox from "../CardBox/CardBox/CardBox";
import PgntnButton from "../PgntnButton/PgntnButton";

import themePink from "../../../commonStyles/themes/themePink.module.scss";
import themeBlue from "../../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../../commonStyles/themes/themeGreen.module.scss";

const themes = [themePink, themeBlue, themeGreen];

export default function CardsContainer() {
  const { terms } = useContext(CustomContext);
  // const terms = []; // checkup for an empty array

  const [currentTerm, setCurrentTerm] = useState(0);
  const term = terms[currentTerm];
  const [translated, setTranslated] = useState(false);

  const handleTranslation = () => setTranslated(true);

  const handleNextWord = () => {
    setCurrentTerm((prev) => (prev === terms.length - 1 ? 0 : prev + 1));
    setTranslated(false);
  };

  const handlePrevWord = () => {
    setCurrentTerm((prev) => (prev === 0 ? terms.length - 1 : prev - 1));
    setTranslated(false);
  };

  const errorMessageRender = (
    <div className={styles.errorMessage}>No terms available</div>
  );

  useEffect(() => {
    setTranslated(false);
  }, [currentTerm]);

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsContainer__currentCardContainer}>
        <PgntnButton
          className={styles.cardsContainer__prev}
          onClick={handlePrevWord}
          contents="Previous Word"
        />
        {!terms || terms.length === 0 ? (
          errorMessageRender
        ) : (
          <Card
            id={term.english}
            className={styles.cardsContainer__card}
            term={term}
            translated={translated}
            handleTranslation={handleTranslation}
          />
        )}
        <PgntnButton
          className={styles.cardsContainer__next}
          onClick={handleNextWord}
          contents="Next Word"
        />

        <div className={styles.cardsContainer__pagination}>
          Current Word:{" "}
          <span className={styles.cardsContainer__pagination_num}>
            {currentTerm + 1}
          </span>{" "}
          / Words Total:{" "}
          <span className={styles.cardsContainer__pagination_num}>
            {terms.length}
          </span>
        </div>
      </div>

      <div className={styles.cardsContainer__cardsBox}>
        <CardBox
          id="dontKnowCardBox"
          term="dog"
          cardHolderContents="Don't Know"
          theme={themes[0]}
        />
        <CardBox
          id="remainingCardBox"
          term="cat"
          cardHolderContents="Remaining Cards"
          theme={themes[1]}
        />
        <CardBox
          id="knowCardBox"
          term="house"
          cardHolderContents="Know"
          theme={themes[2]}
        />
      </div>
    </div>
  );
}
