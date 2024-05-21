import "../../styles/link.css";

export default function ImgLink(props) {
  const { className, href, src, alt } = props;

  return (
    <a href={href} className="imgLink">
      <img className={className} src={src} alt={alt} />
    </a>
  );
}
