import http from "./http";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/auth/";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
