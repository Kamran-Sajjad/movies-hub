import axios from "axios";
import { apiLoginUrl } from "./Constants";

const apiClient = axios.create({
  baseURL: apiLoginUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
