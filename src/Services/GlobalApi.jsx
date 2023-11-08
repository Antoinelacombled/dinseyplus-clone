import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "52beb061b81ed2754c92e89b4c71f8b2";
const accessToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmJlYjA2MWI4MWVkMjc1NGM5MmU4OWI0YzcxZjhiMiIsInN1YiI6IjY1NGI1ZWIzNGYzM2FkMDBlNGNlODdmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s4Q2E4OLu2Ihqw_LUnfrgVMt55ws5Q6rhA7JkjCjIWE";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};

const getMovieByGenreId = (id) => {
  return axios.get(`${movieByGenreBaseURL}"&with_genres="${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
