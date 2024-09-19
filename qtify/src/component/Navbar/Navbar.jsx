import React from "react";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import FeedbackButton from "../GiveFeedback/FeedbackButton";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbarBrand}>
        <Logo />
        <span className={styles.brandName}>Q</span>
        <span id={styles.brandName}>tify</span>
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <FeedbackButton/>
    </nav>
  );
}

export default Navbar;
