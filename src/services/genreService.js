import http from "./http";

const url = "http://localhost:5010/api/genres";

export function getGenres() {
  return http.get(url);
}
