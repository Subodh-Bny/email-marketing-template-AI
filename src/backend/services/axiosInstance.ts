import config from "@/lib/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: config.env.apiEndpoint,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

export default axiosInstance;
