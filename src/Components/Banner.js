import React, { useState, useEffect } from "react";
import { TMDB } from "../Services/axios";
import requests from "../Services/requests";

async function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const result = await TMDB.get(requests.fetchNetflixOriginals);
      setMovies(result.data.results);
      return result;
    }
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div className="banner">
      <p>test</p>
    </div>
  );
}

export default Banner;
