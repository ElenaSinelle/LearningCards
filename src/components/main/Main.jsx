import { React, useState } from "react";
import styles from "./Main.module.scss";
import PlainLink from "../Links/PlainLink";
import Card from "../Cards/Card";
import CardBox from "../Cards/CardBox";
import Vocabulary from "../Vocabulary/Vocabulary";
import themePink from "../../commonStyles/themes/themePink.module.scss";
import themeBlue from "../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../commonStyles/themes/themeGreen.module.scss";
import { terms } from "../../terms";

export default function Main() {
  const themes = [themePink, themeBlue, themeGreen];

  const [currentTerm, setCurrentTerm] = useState(
    terms[Math.floor(Math.random() * terms.length)]
  );

  let [translated, setTranslated] = useState(false);

  const handleTranslation = () => {
    setTranslated(!translated);
  };

  const handleNewWord = () => {
    setCurrentTerm(terms[Math.floor(Math.random() * terms.length)]);
    setTranslated((translated = false));
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__wrapper}>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsContainer__currentCardContainer}>
              <Card
                id="currentCard"
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
                term={terms[0].english}
                cardHolderContents="Don't Know"
                theme={themes[0]}
              />
              <CardBox
                id="remainingCardBox"
                term={terms[2].english}
                cardHolderContents="Remaining Cards"
                theme={themes[1]}
              />
              <CardBox
                id="knowCardBox"
                term={terms[5].english}
                cardHolderContents="Know"
                theme={themes[2]}
              />
            </div>

            <div className={styles.commandArea}>
              <div className={styles.commandArea__commandAreaItem}>
                <PlainLink
                  className={styles.commandArea__link}
                  href="./."
                  contents="RETRY"
                  id="retryLink"
                />
              </div>
              <div className={styles.commandArea__commandAreaItem}>
                <PlainLink
                  className={styles.commandArea__link}
                  href="./."
                  contents="SHUFFLE"
                  id="shuffleLink"
                />
              </div>
              <div className={styles.commandArea__commandAreaItem}>
                <PlainLink
                  className={styles.commandArea__link}
                  href="./."
                  contents="RESTART"
                  id="restartLink"
                />
              </div>
            </div>

            <div className={styles.timer}>timer</div>
          </div>
          <div className={styles.vocabulary}>
            <Vocabulary />
          </div>
        </div>
      </div>
    </main>
  );
}
