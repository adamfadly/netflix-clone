import "./App.css";
import React from "react";
import requests from "./Services/requests";
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Row from "./Components/Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
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
