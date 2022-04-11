import http from "./http";
const apiEndpoint = "http://localhost:5010/api/movies/";
export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndpoint + "/" + movieId);
}
