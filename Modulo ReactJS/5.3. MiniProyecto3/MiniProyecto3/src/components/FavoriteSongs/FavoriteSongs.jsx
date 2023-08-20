import React from "react";
import "./favoriteSongs.css";

const favoriteSongs = ({ songs }) => {
  return (
    <ul>
      {songs.map((song) => {
        return <li key={song}>{song}</li>;
      })}
    </ul>
  );
};

export default favoriteSongs;
