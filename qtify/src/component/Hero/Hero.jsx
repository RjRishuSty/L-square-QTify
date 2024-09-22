import React from "react";
import styles from "./Hero.module.css";
import { Grid2 } from "@mui/material";

function Hero() {
  return (
    <Grid2
      container
      spacing={3}
      className={styles.hero}
      sx={{py:5 }}
    >
      <Grid2 item md={7} sm={6} xs={12}>
        <h1 className={styles.content}>100 Thousand Songs, ad-free</h1>
        <h1 className={styles.content}>Over thousands podcast episodes</h1>
      </Grid2>
      <Grid2 item md={5} sm={6} xs={12}>
        <img
          src={require("../../assets/hero_headphone.png")}
          width={212}
          alt="headphones"
        />
      </Grid2>
    </Grid2>
  );
}

export default Hero;
