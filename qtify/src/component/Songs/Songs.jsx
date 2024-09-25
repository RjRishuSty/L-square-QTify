import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Chip } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwiperComponent from "../SwiperComponent/SwiperComponent";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Songs.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Songs({setCurrSong}) {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [songsData, setSongsData] = useState([]);
  const [genresData, SetGenresData] = useState([]);
  const [filterSongs, setFilterSongs] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    // console.log("event", event.target.id);
    if (!songsData) return;
    const filteredSongs = songsData.filter(
      (item) => item.genre.key === event.target.id 
    );
    // console.log(filteredSongs)
    setFilterSongs(filteredSongs);
  }; 

  const fetchCardApi = async () => {
    try {
      setIsLoading(true);
      const [genresResponse, songsResponse] = await Promise.all([
        axios.get(`https://qtify-backend-labs.crio.do/genres`),
        axios.get(`https://qtify-backend-labs.crio.do/songs`),
      ]);
      if (genresResponse.status === 200) {
        SetGenresData(genresResponse.data.data);
        // console.log("Genres", genresResponse.data.data);
      }
      if (songsResponse.status === 200) {
        setSongsData(songsResponse.data);
        // console.log("songs", songsResponse.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const load = async () => {
      const card = await fetchCardApi();
    };

    load();
  }, []);
  return (
    <Box className={styles.songsBox} fullWidth>
      <Box className={styles.filterButton}>
        <Chip className={styles.songs} label="Songs" />
        <Chip className={styles.showAll} label="" />
      </Box>
      <Box className={styles.fiterBox}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            className={styles.tabs}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className={styles.tab} label="All" {...a11yProps(0)} />
            {isLoading ? (
              <CircularProgress color="success" />
            ) : (
              genresData.map((item, index) => {
                return (
                  <Tab
                    className={styles.tab}
                    label={item.label} 
                    {...a11yProps(index)}
                    key={item.key}
                    id={item.key}
                  />
                );
              })
            )}
          </Tabs>
        </Box>
        <CustomTabPanel className={styles.tabPanel} value={value} index={0}>
          {isLoading ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress color="success" />
            </Box>
          ) : (
            <SwiperComponent setCurrSong={setCurrSong} cardDetailes={songsData} />
          )}
        </CustomTabPanel>

        <CustomTabPanel value={value} index={1}>
          <SwiperComponent setCurrSong={setCurrSong} cardDetailes={filterSongs} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <SwiperComponent setCurrSong={setCurrSong} cardDetailes={filterSongs} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <SwiperComponent setCurrSong={setCurrSong} cardDetailes={filterSongs} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <SwiperComponent setCurrSong={setCurrSong} cardDetailes={filterSongs} />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
