import { Config } from "../config/config";

const BASE_URLS = {
  SERVICE_URL: Config.SERVICE_URL,
};

export const ENDPOINTS = {
  GET_PEOPLE: BASE_URLS.SERVICE_URL + "/people",
  GET_FREQUENCY: BASE_URLS.SERVICE_URL + "/frequency",
  GET_DUPLICATES: BASE_URLS.SERVICE_URL + "/duplicates",
};
