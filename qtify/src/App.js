import { createContext, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import AlbumPage from "./Pages/Album/AlbumPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export const AllData = createContext();

const App = () => {
  const [isLoading,setIsLoading] = useState(false);
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [genresData, setGenresData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  

  const fetchAllApi = async () => {
    try {
      setIsLoading(true);
      const [
        topAlbumsResponse,
        newAlbumsResponse,
        genresResponse,
        songsResponse,
      ] = await Promise.all([
        axios.get(`https://qtify-backend-labs.crio.do/albums/top`),
        axios.get(`https://qtify-backend-labs.crio.do/albums/new`),
        axios.get(`https://qtify-backend-labs.crio.do/genres`),
        axios.get(`https://qtify-backend-labs.crio.do/songs`),
      ]);
      if (topAlbumsResponse.status === 200) {
        setTopAlbumsData(topAlbumsResponse.data);
        // console.log("TOPALBUMS=>", topAlbumsResponse.data);
      }
      if (newAlbumsResponse.status === 200) {
        setNewAlbumsData(newAlbumsResponse.data);
        // console.log("NEWALBUMS=>", newAlbumsResponse.data);
      }
      if (genresResponse.status === 200) {
        setGenresData(genresResponse.data.data);
        // console.log("GENRES=>", genresResponse.data.data);
      }
      if (songsResponse.status === 200) {
        setSongsData(songsResponse.data);
        // console.log("Songs=>", songsResponse.data);
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const load = async () => {
      const ApiData = await fetchAllApi();
    };
    load();
  }, []);
  return (
    <>
      <AllData.Provider value={{isLoading,topAlbumsData,newAlbumsData,}}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/albums/:slug" element={<AlbumPage slug={'/:slug'}/>}></Route>
        </Routes>
      </AllData.Provider>
    </>
  );
};

export default App;
