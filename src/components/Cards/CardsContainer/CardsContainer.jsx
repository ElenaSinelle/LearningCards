import React, { useContext, useState } from "react";
import styles from "../../Main/Main.module.scss";
import { CustomContext } from "../../../Context";

import Card from "../Card/Card";
import CardBox from "../CardBox/CardBox/CardBox";

import themePink from "../../../commonStyles/themes/themePink.module.scss";
import themeBlue from "../../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../../commonStyles/themes/themeGreen.module.scss";

const themes = [themePink, themeBlue, themeGreen];

export default function CardsContainer() {
  const { terms } = useContext(CustomContext);

  const [currentTerm, setCurrentTerm] = useState(
    terms[Math.floor(Math.random() * terms.length)]
  );

  const [translated, setTranslated] = useState(false);

  const handleTranslation = () => {
    setTranslated(true);
  };

  const handleNewWord = () => {
    setCurrentTerm(terms[Math.floor(Math.random() * terms.length)]);
    setTranslated(false);
  };

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsContainer__currentCardContainer}>
        <Card
          id={currentTerm.english}
          className={styles.card}
          term={currentTerm}
          handleNewWord={handleNewWord}
          translated={translated}
          handleTranslation={handleTranslation}
        />
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
