import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./Services/requests";

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={requests.fetchTrending} />
      {/* <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} /> */}
    </div>
  );
}

export default App;
