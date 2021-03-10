import React, { useState, useEffect } from "react";
import axios from "../Services/axios";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const request = await axios.get(fetchURL);
      console.log(request);
      return request;
    }
    getMovies();
  }, []);

  return (
    <div id="">
      <h2>{title}</h2>
      {/* container -> posters */}
      {/*  */}
    </div>
  );
}

export default Row;
