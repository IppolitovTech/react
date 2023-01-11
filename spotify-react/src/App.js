import "./App.css";
import { useState } from "react";
import { ReadData } from "./components/ReadData";
import { ArtistsContext } from "./context/ArtistsContext";
import { RenderArtists } from "./components/RenderArtists";
import { Header } from "./components/Header";

function App() {
  const [artists, setArtists] = useState([]);

  return (
    <div className="App">
      <ArtistsContext.Provider value={[artists, setArtists]}>
        <Header />
        <RenderArtists />
      </ArtistsContext.Provider>
      <ReadData />
    </div>
  );
}

export default App;
