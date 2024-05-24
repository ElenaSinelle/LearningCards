import React from "react";
import "../../styles/main.css";
import PlainLink from "../Links/PlainLink";
import Card from "../Cards/Card";
import CardBox from "../Cards/CardBox";

const terms = ["ups", "i", "did", "it", "again"];

export default class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="container">
          <div className="mainContainer">
            <div className="cardsContainer">
              <div className="currentCardContainer">
                <Card
                  id="currentCard"
                  className="card"
                  term={terms[Math.floor(Math.random() * 5)]}
                />
              </div>

              <div className="cardsBox">
                <CardBox
                  id="dontKnowCardBox"
                  term={terms[Math.floor(Math.random() * 5)]}
                  style={{ backgroundColor: "rgb(229, 159, 159)" }}
                  cardHolderContents="Don't Know"
                />
                <CardBox
                  id="remainingCardBox"
                  term={terms[Math.floor(Math.random() * 5)]}
                  style={{ backgroundColor: "#bfe5f5" }}
                  cardHolderContents="Remaining Cards"
                />
                <CardBox
                  id="knowCardBox"
                  term={terms[Math.floor(Math.random() * 5)]}
                  style={{ backgroundColor: "#ceeda5" }}
                  cardHolderContents="Know"
                />
              </div>

              <div className="commandArea">
                <div className="commandAreaItem">
                  <PlainLink href="./." contents="RETRY" id="retryLink" />
                </div>
                <div className="commandAreaItem">
                  <PlainLink href="./." contents="SHUFFLE" id="shuffleLink" />
                </div>
                <div className="commandAreaItem">
                  <PlainLink href="./." contents="RESTART" id="restartLink" />
                </div>
              </div>

              <div className="timerContainer">timer</div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
