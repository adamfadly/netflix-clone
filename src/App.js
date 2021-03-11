import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./Services/requests";
// import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Animation" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
