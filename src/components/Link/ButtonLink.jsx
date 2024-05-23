import "../../styles/link.css";

export default function PlainLink(props) {
  const { href, contents = "", contentsAdd = "" } = props;
  return (
    <div className="btnLink">
      <a href={href}>
        {contentsAdd && <p className="linkFirstLine">{contentsAdd}</p>}
        <p className="linkSecondLine">{contents}</p>
      </a>
    </div>
  );
}
