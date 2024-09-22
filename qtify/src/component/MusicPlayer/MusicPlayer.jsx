import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Slider,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import styles from "./MusicPlayer.module.css";

export default function MusicPlayer() {
  return (
    <Box className={styles.musicPlayerBox}>
      <Box className={styles.player}>
        <Card className={styles.playerCard}>
          <CardMedia
            component="img"
            image={require("../../assets/hero_headphone.png")}
            alt="Player"
            className={styles.playerCardImg}
          />
          <CardContent>
            <Typography className={styles.songName}>Song name</Typography>
            <Typography className={styles.albumName}>Album name</Typography>
          </CardContent>
        </Card>
        <Box className={styles.musicPlayer}>
          <IconButton>
            <PlayArrowIcon className={styles.playerIcon} />
          </IconButton>
          <Box className={styles.playerController}>
            <p className={styles.timer}>0:38</p>
            <Slider
              defaultValue={30}
              aria-label="Volume"
              className={styles.playerMenu}
            />
            <p className={styles.timer}>3:37</p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
