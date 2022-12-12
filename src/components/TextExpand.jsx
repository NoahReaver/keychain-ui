import { useState } from "react";
import downArrow from "../assets/icons/chevron-right.svg";

import styles from "./TextExpand.module.css";

export default function TextExpand({ title, content }) {
  const [showContent, setShowContent] = useState(false); // Toggle showing for this single text frame

  return (
    <div>
      <div className={styles.text}>
        {title}
        {showContent ? (
          <div>
            <br />
            {content}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div
        className={styles.arrowContainer}
        onClick={() => setShowContent((prev) => !prev)}
      >
        <img
          src={downArrow}
          alt="expand text"
          className={showContent ? styles.upArrow : styles.downArrow}
        />
      </div>
    </div>
  );
}
