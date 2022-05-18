import { api } from "./api";

const apiKey = "WEIK3wy2x8hyaSQTSHeHekWMj9s2re1vYmagDHwK";

export function getDailyPictures (params) {
  const searchParams = new URLSearchParams({ api_key: apiKey, ...params });
  return api.get(`/planetary/apod?${searchParams}`);
}