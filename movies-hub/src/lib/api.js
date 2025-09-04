

import apiClient from "./axios";
import { API_LOGIN_URL, API_BASE_URL, API_TOKEN } from "../utils/constants";
// import { API_LOGIN_URL, API_BASE_URL, API_TOKEN } from "../utils/constants";

export const loginUserApi = async (payload) => {
  return await apiClient.post(API_LOGIN_URL, payload);
};

export const getMoviesApi = async (page = 3) => {
  return await apiClient.get(`${API_BASE_URL}/discover/movie`, {
    params: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page,
      sort_by: "popularity.desc",
    },
  });
};

export const getMovieByIdApi = async (id) => {
  return await apiClient.get(`${API_BASE_URL}/movie/${id}`);
};
