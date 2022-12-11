import styles from "./NavBar.module.css";

export default function NavBar({ options, selectorLeftDistance }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.optionSelector}
        style={{ left: selectorLeftDistance }}
      />
      <div className={styles.topLine} />
      {options.map((e) => e)}
    </div>
  );
}
