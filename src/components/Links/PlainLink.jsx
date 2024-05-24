import "../../styles/link.css";

export default function PlainLink(props) {
  const { href, contents = "", id = "" } = props;
  return (
    <a id={id} className="link" href={href}>
      {contents}
    </a>
  );
}
