import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Chip } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import SwiperComponent from "../../SwiperComponent/SwiperComponent";
import styles from "./TopAlbums.module.css";

export default function TopAlbums() {
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const fetchCardApi = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/albums/top`
      );
      if (response.status === 200) {
        setCardData(response.data);
        
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false)
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
        <Chip className={styles.topAlbums} label="Top Albums" />
        <Chip className={styles.showAll} label="Show all" />
      </Box>

      {isLoading ? ( 
        <Box container className="loderBox">
          <CircularProgress color="success" />
        </Box>
      ) : (
        <SwiperComponent cardDetailes={cardData} />
      )}
    </Box>
  );
}
