import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
import { TMDB } from "../Services/axios";
import "../styles/Row.css";

const img_baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState("");

  useEffect(() => {
    async function getMovies() {
      const result = await TMDB.get(fetchUrl);
      setMovies(result.data.results);
      return result;
    }
    getMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      let trailerURL = await TMDB.get(
        `/movie/${movie.id}/videos?api_key=7e83f812fd2e3e5f113d2b2726360902`
      );

      setTrailerURL(trailerURL.data.results[0]?.key);
      console.log({ setTrailerURL });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${img_baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  );
}

export default Row;
