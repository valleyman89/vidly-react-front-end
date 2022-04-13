import http from "./http";

const apiEndpoint = "/movies/";
const options = {};

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
