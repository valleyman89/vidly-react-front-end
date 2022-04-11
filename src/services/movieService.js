import http from "./http";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies/";
const options = {
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRkYzk0YjI0Mzc3ZGFjNzkxZjFmNWUiLCJpYXQiOjE2NDkyNjU2MDB9.kzxxY0xLPQamPcafhKFdwxgxgGeBWHyLG4vpGMc7XBg",
  },
};

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body, options);
  }

  return http.post(apiEndpoint, movie, options);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId), options);
}
