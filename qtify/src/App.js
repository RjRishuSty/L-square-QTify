import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import TopAlbums from "./component/Section/TopAlbums/TopAlbums";
import NewAlbum from "./component/Section/NewAlbums/NewAlbums";
import Songs from "./component/Section/Songs/Songs";
import FAQs from "./component/FAQs/FAQs";
import MusicPlayer from "./component/MusicPlayer/MusicPlayer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TopAlbums/>
      <NewAlbum/> 
      <Songs/>
      <FAQs/>
      <MusicPlayer/>
    </div>
  );
}

export default App;
