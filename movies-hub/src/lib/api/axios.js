import axios from "axios";

import { successToast, errorToast } from "../../utils/displayToast";

import { API_BASE_URL } from "../constant/constants";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
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
