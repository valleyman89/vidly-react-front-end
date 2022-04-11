import http from "./http";

const url = "http://localhost:5010/api/genres";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export function getGenres() {
  return http.get(url);
}
