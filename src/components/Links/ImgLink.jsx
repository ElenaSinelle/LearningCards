import "../../styles/link.css";

export default function ImgLink(props) {
  const { className, href, src = "", alt = "", d = "" } = props;

  return (
    <a href={href} className="imgLink">
      {src && <img className={className} src={src} alt={alt} />}

      {d && (
        <svg
          className="searchIcon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path className="iconPath" d={d} />
        </svg>
      )}
    </a>
  );
}
