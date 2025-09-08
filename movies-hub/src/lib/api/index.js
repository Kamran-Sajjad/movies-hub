import apiClient from "./axios";
import { API_LOGIN_URL, API_BASE_URL, API_TOKEN } from "../constant/constants";

export const loginUserApi = async (payload) => {
  return await apiClient.post(API_LOGIN_URL, payload);
};

export const getMoviesApi = (page = 1) => {
  return apiClient.get(`${API_BASE_URL}/discover/movie`, {
    params: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page,
      sort_by: "popularity.desc",
    },
  });
};

export const getMovieByIdApi = (id) => {
  return apiClient.get(`${API_BASE_URL}/movie/${id}`);
};

export const searchMoviesApi = (query, page) => {
  return apiClient.get(`${API_BASE_URL}/search/movie`, {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page,
    },
  });
};
