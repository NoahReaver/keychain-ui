import ConnectWalletBtn from "./ConnectWalletBtn";
import logo from "../assets/logos/Keychain Logo.png";

import styles from "./Home.module.css";
import NavBar from "./NavBar";
import NavBarIcon from "./NavBarIcon";

import homeIcon from "../assets/icons/home-variant.svg";
import aboutIcon from "../assets/icons/information.svg";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [homeRef, aboutRef] = [useRef(), useRef()];

  const [navbarSelector, setNavbarSelector] = useState();

  useEffect(() => {
    setNavbarSelector(homeRef.current.getBoundingClientRect().left);
  }, []);

  return (
    <div>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.logoText}>
          Keychain is an on-chain component that combines your NFTs from
          multiple wallets to be accessible by one account.
        </p>
      </div>
      <div className={styles.contentContainer}>
        <ConnectWalletBtn />
      </div>

      <div className={styles.navbar}>
        <NavBar
          options={[
            <div
              ref={homeRef}
              key="home"
              onClick={() =>
                setNavbarSelector(homeRef.current.getBoundingClientRect().left)
              }
            >
              <NavBarIcon
                img={homeIcon}
                alt="home"
                text="HOME"
                className={styles.navbarHomeIcon}
                linkTo="/"
              />
            </div>,
            <div
              ref={aboutRef}
              key="about"
              onClick={() =>
                setNavbarSelector(aboutRef.current.getBoundingClientRect().left)
              }
            >
              <NavBarIcon
                img={aboutIcon}
                alt="about"
                text="ABOUT"
                className={styles.navbarAboutIcon}
                linkTo="/"
                // linkTo="/about" when created
              />
            </div>,
          ]}
          selectorLeftDistance={navbarSelector}
        />
      </div>
    </div>
  );
}
