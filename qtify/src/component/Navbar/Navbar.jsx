import React from "react";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import FeedbackButton from "../GiveFeedback/FeedbackButton";

function Navbar({ allAlbumsData }) {
  // console.log('Navbar',allAlbumsData)
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarBrand}>
        <Logo />
        <span className={styles.brandName}>Q</span>
        <span id={styles.brandName}>tify</span>
      </Link>
      <Search
        placeholder="Search a song of your choice"
        allAlbumsData={allAlbumsData}
      />
      <Link to="">
        <FeedbackButton />
      </Link>
    </nav>
  );
}

export default Navbar;
