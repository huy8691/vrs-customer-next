import axios from "axios";
import Cookies from "js-cookie";
let urlApi = "https://api-dev.vuarausach.vn/";

const env = process.env.ENV;
if (env === "prod") {
  urlApi = "https://api-dev.vuarausach.vn/";
}

const jwtAxios = axios.create({
  baseURL: urlApi, // YOUR_API_URL HERE
  timeout: 5000,
  timeoutErrorMessage: "Timeout error",
  headers: {
    "Content-Type": "application/json",
  },
});

const callAPIWithToken = axios.create({
  baseURL: urlApi, //v YOUR_API_URL HERE
  timeout: 10000,
  timeoutErrorMessage: "Timeout error",
});
callAPIWithToken.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = Cookies.get("token");
    config.headers = {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    };
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res;
    }
    return res;
  },
  (err) => {
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

export { jwtAxios, callAPIWithToken};
