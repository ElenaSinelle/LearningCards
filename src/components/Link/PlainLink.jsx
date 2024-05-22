import "../../styles/link.css";

export default function PlainLink(props) {
  const { href, contents = "", contentsAdd = "" } = props;
  return (
    <a className="link" href={href}>
      {contentsAdd && <p className="linkFirstLine">{contentsAdd}</p>}
      <p className="linkSecondLine">{contents}</p>
    </a>
  );
}
