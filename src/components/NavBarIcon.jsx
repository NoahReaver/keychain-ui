import { Link } from "react-router-dom";

export default function NavBarIcon({ img, alt, text, className, linkTo }) {
  return (
    <Link to={linkTo} className={className}>
      <img src={img} alt={alt} />
      <div>{text}</div>
    </Link>
  );
}
