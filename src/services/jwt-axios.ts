import axios from "axios";
import Cookies from "js-cookie";
let urlApi = "https://api-dev.vuarausach.vn/";

const env = process.env.ENV;
if (env === "prod") {
  urlApi = "https://api-dev.vuarausach.vn/";
}

const token = Cookies.get("token");

const callAPI = axios.create({
  baseURL: urlApi, // YOUR_API_URL HERE
  timeout: 10000,
  timeoutErrorMessage: "Timeout error",
  headers: {
    "Content-Type": "application/json",
  },
});

callAPI.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response && err.response.status === 403) {
      window.location.href = "/403";
    }
    return Promise.reject(err);
  }
);

const callAPIWithToken = axios.create({
  baseURL: urlApi,
  timeout: 10000,
  timeoutErrorMessage: "Timeout error",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
});

callAPIWithToken.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log("err", err)
    if (err.response && err.response.status === 401) {
      Cookies.remove("token");
      window.location.href = "/";
    }
    if (err.response && err.response.status === 403) {
      window.location.href = "/403";
    }
    return Promise.reject(err);
  }
);

export const setAuthToken = (_token: string) => {
  if (_token) {
    Cookies.set("token", _token);
  } else {
    Cookies.remove("token");
  }
};

export { callAPI, callAPIWithToken};
