import apiClient from "./apiClient";

import { successToast, errorToast } from "../utils/DisplayToast";

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const errorData = error.response.data;
      errorToast(errorData.message || "Something went wrong.");
    } else if (error.request) {
      errorToast("No response from server. Please check your connection.");
    } else {
      errorToast("Unexpected error occurred.");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
