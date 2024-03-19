import axios from "axios";
import { apiBaseUrl } from "./constants";

export const axiosInstance = axios.create({
  // baseURL: "https://google.com",
  // baseURL: "http://172.17.64.1:3152/api/v1",
  // baseURL: "http://192.168.198.121:3152/api/v1",
  // baseURL: "http://localhost:3152/api/v1",
  baseURL: apiBaseUrl,
  // timeout: 1000,
});
