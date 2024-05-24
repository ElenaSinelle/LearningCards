import "../../styles/card.css";
import Card from "./Card";

export default function CardBox(props) {
  const { id, term, style, cardHolderContents } = props;
  return (
    <div className="cardBox">
      <Card className="card cardMini" id={id} term={term} />
      <div className="cardHolder" style={style}>
        {cardHolderContents}
      </div>
    </div>
  );
}
