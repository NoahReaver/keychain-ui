import ConnectWalletBtn from "./ConnectWalletBtn";
import logo from "../assets/logos/Keychain Logo.png";

import styles from "./Home.module.css";
import NavBar from "./NavBar";
import NavBarIcon from "./NavBarIcon";

import homeIcon from "../assets/icons/home-variant.svg";
import aboutIcon from "../assets/icons/information.svg";
import { useEffect, useRef, useState } from "react";
import TextExpand from "./TextExpand";

export default function Home() {
  const [homeRef, aboutRef] = [useRef(), useRef(), useRef()];

  const [navbarSelector, setNavbarSelector] = useState();

  useEffect(() => {
    setNavbarSelector(homeRef.current.getBoundingClientRect().left);
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.logoText}>
          Keychain is an on-chain component that combines your NFTs from
          multiple wallets to be accessible by one account.
        </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.contentTitle}>HOW IT WORKS</h3>
          <div className={styles.expandedTextContainer}>
            <TextExpand
              title="Connect a wallet to create a profile."
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla earum fugit ipsum debitis. Aut aliquid et illo dolore hic aperiam culpa sint quo, magnam iste commodi ipsum quibusdam repellat excepturi, quam dolorum? Distinctio ipsum soluta expedita beatae, quibusdam nemo dolorem voluptas laboriosam qui corrupti perspiciatis libero nulla natus repellat!"
            />
            <TextExpand
              title="Add another wallet to your profile."
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla earum fugit ipsum debitis. Aut aliquid et illo dolore hic aperiam culpa sint quo, magnam iste commodi ipsum quibusdam repellat excepturi, quam dolorum? Distinctio ipsum soluta expedita beatae, quibusdam nemo dolorem voluptas laboriosam qui corrupti perspiciatis libero nulla natus repellat!"
            ></TextExpand>
            <TextExpand
              title="View all your NFTs in the gallery."
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla earum fugit ipsum debitis. Aut aliquid et illo dolore hic aperiam culpa sint quo, magnam iste commodi ipsum quibusdam repellat excepturi, quam dolorum? Distinctio ipsum soluta expedita beatae, quibusdam nemo dolorem voluptas laboriosam qui corrupti perspiciatis libero nulla natus repellat!"
            ></TextExpand>
          </div>
        </div>
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
