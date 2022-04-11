import http from "./http";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/users/";
const options = {
  headers: {
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRkYzk0YjI0Mzc3ZGFjNzkxZjFmNWUiLCJpYXQiOjE2NDkyNjU2MDB9.kzxxY0xLPQamPcafhKFdwxgxgGeBWHyLG4vpGMc7XBg",
  },
};

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
