import React from "react";
// Swiper Import...
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Card Style Import...
import styles from "./SwiperCard.module.css";
// Card import.........
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function SwiperComponent({ cardDetailes }) {
  if (!cardDetailes) return;
  return (
    <>
      <Swiper
        className="swiper"
        modules={[Navigation]}
        spaceBetween={55}
        slidesPerView={7}
        navigation
      >
        {cardDetailes.map((item) => {
          return (
            <SwiperSlide className="swiperItem" key={item.id}>
              <Card key={item.id} className={styles.card}>
                <CardMedia>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.cardImg}
                  />
                </CardMedia>
                <div className={styles.cardContent}>
                  <Typography className={styles.cardFollows}>
                    {item.follows} Follows
                  </Typography>
                </div>
              </Card>
              <p className={styles.cardTitle}>{item.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
