import React from "react";
import styles from "./Main.module.scss";
import PlainLink from "../Links/PlainLink";
import Card from "../Cards/Card";
import CardBox from "../Cards/CardBox";
import themePink from "../../commonStyles/themes/themePink.module.scss";
import themeBlue from "../../commonStyles/themes/themeBlue.module.scss";
import themeGreen from "../../commonStyles/themes/themeGreen.module.scss";

const terms = ["ups", "i", "did", "it", "again"];
const themes = [themePink, themeBlue, themeGreen];

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.main__wrapper}>
          <div className={styles.cardsContainer}>
            <div className={styles.cardsContainer__currentCardContainer}>
              <Card
                id="currentCard"
                className={styles.card}
                term={terms[Math.floor(Math.random() * 5)]}
              />
            </div>

            <div className={styles.cardsContainer__cardsBox}>
              <CardBox
                id="dontKnowCardBox"
                term={terms[Math.floor(Math.random() * 5)]}
                cardHolderContents="Don't Know"
                theme={themes[0]}
              />
              <CardBox
                id="remainingCardBox"
                term={terms[Math.floor(Math.random() * 5)]}
                cardHolderContents="Remaining Cards"
                theme={themes[1]}
              />
              <CardBox
                id="knowCardBox"
                term={terms[Math.floor(Math.random() * 5)]}
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
        </div>
      </div>
    </main>
  );
}