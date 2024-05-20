import axios, {AxiosError, isAxiosError} from "axios";
import {apiBaseUrl} from "./constants";
import {clearAppData} from "../app/_layout";

export const axiosInstance = axios.create({
  // baseURL: "https://google.com",
  // baseURL: "http://172.17.64.1:3152/api/v1",
  // baseURL: "http://192.168.198.121:3152/api/v1",
  // baseURL: "http://localhost:3152/api/v1",
  baseURL: apiBaseUrl,
  // timeout: 1000,
});

axiosInstance.interceptors.response.use(undefined, function (error) {
  // console.log("axios err", JSON.stringify(err, null, 2));
  console.log("error intercepted", error);
  if (
    isAxiosError(error) &&
    [
      AxiosError.ERR_NETWORK,
      AxiosError.ECONNABORTED,
      AxiosError.ETIMEDOUT,
    ].includes(error.code)
  ) {
    console.log("error matched");
    error.message = "You're not connected to the internet.";
  }
  if (!error.request) console.error("request was not made");
  if (!error.response) console.error("request had no response");
  console.log(typeof error);
  console.log("type of error", typeof error);
  // if (!error.response) console.error("request had no response");
  if (error?.response?.status === 401) {
    clearAppData()
    error.message = "You need to login";
    return Promise.reject(error);
    // return alert("You need to login")
  }

  return Promise.reject(error);
});
