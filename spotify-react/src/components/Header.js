import { ArtistsContext } from "../context/ArtistsContext";
import { useEffect, useState, useContext } from "react";
import axios from "axios";

export function Header() {
  const CLIENT_ID = "ef124c9f266041cd9300a2b7c4a55c89";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  let arr = [
    ["new-releases", "Favorites"],
    ["featured-playlists", "Playlists"],
    ["categories", "Charts"],
  ];
  const [artists, setArtists] = useContext(ArtistsContext);
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [theme, setTheme] = useState("white");
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    console.log(data);
    setArtists(data.artists.items);
  };

  const getData = (name) => {
    return async (e) => {
      e.preventDefault();
      const { data } = await axios.get(
        "https://api.spotify.com/v1/browse/" + name + "?city=USA",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data);
      if (name === "new-releases") setArtists(data.albums.items);

      if (name === "featured-playlists") setArtists(data.playlists.items);

      if (name === "categories") setArtists(data.categories.items);
    };
  };

  const changeColor = () => {
    let color = "white";
    return async (e) => {
      if (checked) {
        color = "white";
      } else {
        color = "black";
      }

      setTheme(color);
    };
  };

  return (
    <header className={"App-header"}>
      <div>
        <div class={"header " + theme}>
          <h1>Spotify React</h1>
          <button onClick={() => setTheme("black")}>dark</button>
          <button onClick={() => setTheme("white")}>white</button>
        </div>
      </div>

      <div class="iconBar">
        {arr.map((arr) => (
          <div key={arr[0]}>
            <a onClick={getData(arr[0])}>{arr[1]}</a>
          </div>
        ))}

        {/* <div class="center">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <button onClick={changeColor("black")}>Color</button>
        </div> */}

        {token ? (
          <form onSubmit={searchArtists}>
            <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
            <button type={"submit"}>Search</button>
          </form>
        ) : (
          <h2>Please login</h2>
        )}

        {!token ? (
          <a
            class="active"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <a onClick={logout}>Logout1</a>
        )}
      </div>
    </header>
  );
}
