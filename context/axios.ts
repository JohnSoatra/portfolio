import Variables from "@/constants/variable";
import { cleanPath } from "@/utils/path";
import { getOrigin } from "@/utils/window";
import axios from "axios";
import axiosRetry from "axios-retry";

const axiosTmdb = axios.create({
  baseURL: process.env.TMDB_API_BASE_URL,
  headers: {
    accept: 'application/json'
  }
});
const axiosClient = axios.create();

axiosClient.interceptors.request.use((config) => {
  if (!/^https?:\/\//i.test(config.url!)) {
    config.url = getOrigin() + cleanPath(config.url!);
  }

  return config;
});

axiosRetry(axiosTmdb, {
  retries: Variables.Default.RequestTries,
  retryDelay: () => Variables.Default.RequestDelay
});

export {
  axiosTmdb,
  axiosClient
};
