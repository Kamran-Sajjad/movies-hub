import axios from "axios";

import { successToast, errorToast } from "../../utils/displayToast";

import { API_BASE_URL } from "../constant/constants";
import { useAuthStore } from "../store/useAuthStore";
import { ROUTES } from "../../routes/routeConstants";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;

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
      const { status, data } = error.response;
      if (status === 401) {
        errorToast("Invalid Token! Please login again");
        useAuthStore.getState().logout();
        window.location.href = ROUTES.LOGIN;
      }
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
