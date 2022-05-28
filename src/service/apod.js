import { api } from "./api";

const apiKey = "vLob0pjrATbXzwsMpPb6KxQ1khIJSL6qrTfhq3nV";

export function getDailyPictures (params) {
  const searchParams = new URLSearchParams({ api_key: apiKey, ...params, });
  return api.get(`/planetary/apod?${searchParams}`);
}