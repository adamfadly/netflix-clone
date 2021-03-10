import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  // headers: { "Access-Control-Allow-Origin": "*" },
});

export default instance;

//   const config = {
//     headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "text/plain" },
//   };
// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   https: config,
// });

// import axios from "axios";

// const config = {
//   headers: {
//     // "Access-Control-Allow-Origin": "*",
//     "Content-Type": "text/plain",
//   },
// };
// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   https: config,
// });

// export default instance;
