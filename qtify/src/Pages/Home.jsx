import React, { useContext } from "react";
import Navbar from "../component/Navbar/Navbar";
import Hero from "../component/Hero/Hero";
import TopAlbums from "../component/TopAlbums/TopAlbums";
import NewAlbum from "../component/NewAlbums/NewAlbums";
import Songs from "../component/Songs/Songs";
import FAQs from "../component/FAQs/FAQs";
import MusicPlayer from "../component/MusicPlayer/MusicPlayer";
import Search from "../component/Search/Search";
import { AllData } from "../App";
import { useState } from "react";

export default function Home() {
  const[currentSong,setCurrSong] =useState(null);
  const { topAlbumsData, newAlbumsData } = useContext(AllData);
  
//   console.log("HomeTOP", topAlbumsData);
//   console.log("HomeNEW", newAlbumsData);
  return (
    <>
      <Navbar allAlbumsData={[...topAlbumsData, ...newAlbumsData]} />
      <Hero />
      <TopAlbums />
      <NewAlbum />
      <Songs setCurrSong={setCurrSong}/>
      <FAQs/>
      <MusicPlayer currentSong={currentSong}/>
    </>
  );
}
