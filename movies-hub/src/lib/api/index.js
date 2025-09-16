import apiClient from "./axios";
import { API_LOGIN_URL, API_BASE_URL, API_TOKEN } from "../constant/constants";

export const AUTH_API = {
  login: (payload) => {
    return apiClient.post(`${API_LOGIN_URL}/users/login/`, payload);
  },
};

export const MOVIES_API = {
  getAllMovies: (params) => {
    return apiClient.get(`${API_BASE_URL}/discover/movie`, {
      params: {
        include_adult: false,
        include_video: false,
        language: "en-US",
        ...params,
        sort_by: "popularity.desc",
      },
    });
  },

  getMovieById: (id) => {
    return apiClient.get(`${API_BASE_URL}/movie/${id}`);
  },

  searchMovies: (params) => {
    return apiClient.get(`${API_BASE_URL}/search/movie`, {
      params: {
        include_adult: false,
        language: "en-US",
        ...params,
      },
    });
  },
};
