import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.nasa.gov/",
  timeout: 2 * 1000,
});