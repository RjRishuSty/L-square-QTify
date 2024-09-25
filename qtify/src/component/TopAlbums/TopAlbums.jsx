import React from "react";
import { Box, Chip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import styles from "./TopAlbums.module.css";
import { useContext } from "react";
import { AllData } from "../../App";

export default function TopAlbums() {
  const { isLoading, topAlbumsData } = useContext(AllData);
  // console.log("TOP", topAlbumsData, isLoading);
  return (
    <Box className={styles.albums} fullWidth>
      <Box className={styles.filterButton}>
        <Chip className={styles.topAlbums} label="Top Albums" />
        <Chip className={styles.showAll} label="Show all" />
      </Box>
      {isLoading ? (
        <Box fullWidth className="loderBox">
          <CircularProgress color="success" />
        </Box>
      ) : (
        <SwiperComponent cardDetailes={topAlbumsData} />
      )}
    </Box>
  );
}
