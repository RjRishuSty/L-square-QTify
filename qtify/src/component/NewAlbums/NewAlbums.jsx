import React, { useContext } from "react";
import { Box, Chip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import styles from "./NewAlbums.module.css";
import { AllData } from "../../App";


export default function NewAlbum() {
  const {isLoading,newAlbumsData} = useContext(AllData);
  // console.log("NEW", isLoading, newAlbumsData);
  return (
    <Box fullWidth className={styles.albums}>
      <Box className={styles.filterButton}>
        <Chip className={styles.newAlbums} label="New Albums" />
        <Chip className={styles.showAll} label="Show all" />
      </Box>

      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <SwiperComponent cardDetailes={newAlbumsData} />
      )}
    </Box>
  );
}
