import React, { useEffect, useState } from "react";
import Grid2 from "@mui/material/Grid2";
import Navbar from "../../component/Navbar/Navbar";
import { Box, CardContent, Typography, CardActions } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Card, CardMedia } from "@mui/material";
import { AllData } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import SongPagination from "../../component/SongPagination/SongPagination";
import { Button } from "react-bootstrap";
import "./AlbumPage.css";

const AlbumPage = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [albumSongs, setAlbumSongs] = useState([]);
  const [totalSong, setTotalSong] = useState([]);
  const { topAlbumsData, newAlbumsData } = useContext(AllData);
  console.log(albumSongs);
  const fetchSongsData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://qtify-backend-labs.crio.do/album/${slug}`
      );
      setAlbumSongs(response.data);
      if (response.data.songs) {
        setTotalSong(response.data.songs);
        // console.log('-->',response.data.songs)
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const data = fetchSongsData();
  }, []);

  return (
    <>
      <Navbar allAlbumsData={[...topAlbumsData, ...newAlbumsData]} />
      {isLoading ? (
        <Box
          sx={{ display: "flex", backgroundColor: "black" }}
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <div className="container-fulid AlbumBox py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 ps-5 ">
                <Link to="/">
                  <ArrowBackIcon className="arrow" />
                </Link>
              </div>
            </div>
            <div className="row  mt-4 d-flex justify-content-around align-items-center">
              <div className="col-md-4 col-sm-6 col-xs-12 mb-3 ">
                <div className="card">
                  <img
                    src={albumSongs.image}
                    className="card-img-top cardImg"
                    alt={albumSongs.title}
                  />
                </div>
              </div>
              <div className="col-md-8 col-sm-12 col-xs-12 pe-3 ">
                <h1 className="heading">{albumSongs.title}</h1>
                <p className="description">{albumSongs.description}</p>
                <ul class="list-group list-group-horizontal ">
                  <li class="list-group-item">{totalSong.length} Songs</li>
                  <li class="list-group-item">3 hr 45 min</li>
                  <li class="list-group-item">{albumSongs.follows} Follows</li>
                </ul>
                <div className="col-8 d-flex justify-content-around align-items-center">
                  <button className="btn btn-success me-5">
                    <img
                      className="me-3"
                      src={require("../../assets/suffle.png")}
                    />
                    Shuffle
                  </button>
                  <button className="btn btn-library me-5">
                    <img
                      className="me-3"
                      src={require("../../assets/library.png")}
                    />
                    Add to library
                  </button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-4">
              <SongPagination songs={albumSongs.songs} /> 
              </div>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
};

export default AlbumPage;
