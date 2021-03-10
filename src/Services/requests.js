const API_KEY = "api_key=7e83f812fd2e3e5f113d2b2726360902";

const requests = {
  fetchTrending: `/trending/all/week?${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/tv?${API_KEY}&with_genre=28`,
  fetchComedyMovies: `/discover/tv?${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/tv?${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/tv?${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/tv?${API_KEY}&with_genres=99`,
};

export default requests;
