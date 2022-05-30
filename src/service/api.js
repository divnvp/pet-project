import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.nasa.gov/",
  timeout: 2 * 1000,
});

export const apiKey = "vLob0pjrATbXzwsMpPb6KxQ1khIJSL6qrTfhq3nV";