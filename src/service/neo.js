import { api, apiKey } from "./api";

export function getNEOList(params) {
  const searchParams = new URLSearchParams({ api_key: apiKey, ...params, });

  return api.get(`/neo/rest/v1/feed?${searchParams}`);
}