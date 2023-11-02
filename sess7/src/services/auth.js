import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const auth = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((response) => {
      callback(true, response.data.token);
    })
    .catch((error) => {
      callback(false, error);
    });
};

export const getUsername = (token) => {
  const decode = jwtDecode(token);
  return decode.user;
};
