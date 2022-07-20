import axios from "axios";
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


export { jwtAxios};
