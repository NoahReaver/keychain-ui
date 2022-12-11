import ConnectWalletBtn from "./ConnectWalletBtn";
import logo from "../assets/logos/Keychain Logo.png";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.logoText}>
          Keychain is an on-chain component that combines your NFTs from
          multiple wallets to be accessible by one account.
        </p>
      </div>
      <ConnectWalletBtn />
    </div>
  );
}
