import React, { useState, useEffect } from "react";
import { TMDB } from "../Services/axios";
import "../styles/Row.css";

const img_baseURL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const result = await TMDB.get(fetchUrl);
      setMovies(result.data.results);
      return result;
    }
    getMovies();
  }, [fetchUrl]);

  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((item) => (
          <img
            key={movies.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${img_baseURL}${
              isLargeRow ? item.poster_path : item.backdrop_path
            }`}
            alt={item.name}
          />
        ))}
      </div>
      {/*  */}
    </div>
  );
}

export default Row;
