import { Link } from "react-router-dom";
import styles from "./NavBarIcon.module.css";

export default function NavBarIcon({ img, alt, text, className, linkTo }) {
  return (
    <Link to={linkTo} className={className}>
      <div className={styles.imgContainer}>
        <img src={img} alt={alt} />
      </div>
      <div>{text}</div>
    </Link>
  );
}
