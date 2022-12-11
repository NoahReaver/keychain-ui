import { Link } from "react-router-dom";

export default function NavBarIcon({ img, alt, text, className, linkTo }) {
  return (
    <Link to={linkTo} className={className}>
      <div
        style={{
          width: "4rem",
          height: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={img} alt={alt} />
      </div>
      <div>{text}</div>
    </Link>
  );
}
