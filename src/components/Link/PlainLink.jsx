import "../../styles/link.css";

export default function PlainLink(props) {
  const { href, contents = "" } = props;
  return (
    <a className="link" href={href}>
      {contents}
    </a>
  );
}
