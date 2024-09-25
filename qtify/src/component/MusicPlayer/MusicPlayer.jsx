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
import styles from "./MusicPlayer.module.css";
import { Grid2 } from "@mui/material";

export default function MusicPlayer({ currentSong }) {
  if (!currentSong) return;
  const minutes = Math.floor(currentSong.durationInMs / 60000);
  const seconds = Math.floor(
    (currentSong.durationInMs - minutes * 60000) / 1000
  );
  console.log(currentSong);
  return (
    <Grid2
      container
      spacing={{ md: 5, sm: 2 }}
      className={styles.musicPlayerBox}
      sx={{ pt: 2, pb: 3 }}
    >
      <Grid2 md={7} sm={6} xs={12} className={styles.player}>
        <Card className={styles.playerCard}>
          <CardMedia
            component="img"
            image={currentSong.image}
            alt={currentSong.title}
            className={styles.playerCardImg}
          />
          <CardContent>
            <Typography className={styles.songName}>
              {currentSong.title}
            </Typography>
            <Typography className={styles.albumName}>
              {currentSong.artists}
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 md={5} sm={6} xs={12} className={styles.player}>
        <IconButton>
          <PlayArrowIcon className={styles.playerIcon} />
        </IconButton>

        <Box className={styles.playerController}>
          <p className={styles.timer}>00:00</p>
          <Slider
            defaultValue={30}
            aria-label="Volume"
            className={styles.playerMenu}
          />
          <p className={styles.timer}>{`${minutes}:${seconds}`}</p>
        </Box>
      </Grid2>
    </Grid2>
  );
}
