import React, { useState, useEffect } from "react";
import { TMDB } from "../Services/axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const result = await TMDB.get(fetchUrl);
      console.log(result);
      return result;
    }
    getMovies();
  }, [fetchUrl]);

  return (
    <div id="">
      <h2>{title}</h2>
      {/* container -> posters */}
      {/*  */}
    </div>
  );
}

export default Row;
