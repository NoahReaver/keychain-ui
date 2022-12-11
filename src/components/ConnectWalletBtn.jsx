import styles from "./ConnectWalletBtn.module.css";
import walletIcon from "../assets/icons/wallet.svg";

export default function ConnectWalletBtn({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.btnFrame}>
        <img src={walletIcon} alt="wallet icon" className={styles.icon} />
        CONNECT WALLET
      </div>
    </button>
  );
}
