import http from "./http";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users/";
const options = {};

export function register(user) {
  return http.post(
    apiEndpoint,
    {
      email: user.username,
      password: user.password,
      name: user.name,
    },
    options
  );
}
