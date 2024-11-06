import axios from "axios";

import { getCookie } from "@/utils/cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const token = getCookie("ProMgt:Next:Token");
    token && (request.headers["Authorization"] = `bearer ${token}`);
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;
