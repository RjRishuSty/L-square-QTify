import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Chip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SwiperComponent from "../../SwiperComponent/SwiperComponent";
import styles from "./NewAlbums.module.css";

export default function NewAlbum() {
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
  const fetchCardApi = async () => {
    try {
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/albums/new`
      );
      if (response.status === 200) {
        setCardData(response.data);
        setIsLoading(false);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }; 
  useEffect(() => {
    const load = async () => {
      const card = await fetchCardApi();
    };

    load();
  }, []);
  return (
    <Box className={styles.albums} container>
      <Box className={styles.filterButton}>
        <Chip className={styles.newAlbums} label="New Albums" />
        <Chip className={styles.showAll} label="Show all" />
      </Box>

      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress color="success" />
        </Box>
      ) : (
        <SwiperComponent cardDetailes={cardData} />
      )}
    </Box>
  );
}
