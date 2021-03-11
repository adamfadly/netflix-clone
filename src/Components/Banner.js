import React, { useEffect, useState } from "react";
import { TMDB } from "../Services/axios";
import requests from "../Services/requests";
import "../styles/Banner.css";

function Banner() {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const result = await TMDB.get(requests.fetchNetflixOriginals);
      setMovies(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
    }
    getMovies();
  }, []);
  console.log(movie, "ini");

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </div>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <div className="banner__description">
          {truncate(movie?.overview, 200)}
        </div>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
