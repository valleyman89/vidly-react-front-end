import http from "./http";

const apiEndpoint = "/users/";
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
