import React from "react";
import { ArtistsContext } from "../context/ArtistsContext";
import { useContext } from "react";

export function RenderArtists() {
  const [artists] = useContext(ArtistsContext);
  return artists.map((artist) => (
    <div key={artist.id} className="item">
      {artist.images && (
        <div
          className="image"
          style={{
            background: `url("${artist.images[0].url}")`,
          }}
        />
      )}

      {artist.icons && (
        <div
          className="image"
          style={{
            background: `url("${artist.icons[0].url}")`,
          }}
        />
      )}

      <div className="album-name"> {artist.name}</div>
    </div>
  ));

  <div className={"items "}> {RenderArtists()}</div>;
}
// + theme
