import { api, apiKey } from "./api";

export function getDailyPictures (params) {
  const searchParams = new URLSearchParams({ api_key: apiKey, ...params, });
  return api.get(`/planetary/apod?${searchParams}`);
}