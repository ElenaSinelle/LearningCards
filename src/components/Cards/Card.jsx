import ImgLink from "../Links/ImgLink";
import audio from "../../images/icons/audio.svg";
import PlainLink from "../Links/PlainLink";
import "../../styles/card.css";

export default function Card(props) {
  const { term, id = "", className } = props;
  return (
    <div id={id} className={className}>
      <h4 className="cardTitle">Term</h4>

      <ImgLink className="readCardBtn" src={audio} alt="read card button" />

      <div className="term">{term}</div>

      <PlainLink id="clickToFlip" href="./." contents="click to flip" />
    </div>
  );
}
