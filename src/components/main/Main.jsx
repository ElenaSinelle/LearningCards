import React from "react";
import "../../styles/main.css";

export default class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <div className="container mainContainer">
          <div className="cardsContainer">
            <div className="card">card</div>
            <div className="cardBox">cardBox</div>
            <div className="cardBox">cardBox</div>
            <div className="cardBox">cardBox</div>
          </div>
        </div>
      </main>
    );
  }
}
