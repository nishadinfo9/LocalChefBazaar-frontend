import React from "react";
import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://localchefbazaar-backend-production.up.railway.app/api/v1",
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response) => response,
    async (err) => {
      const originalRequest = err.config;
      const status = err.response?.status;

      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          await api.post("/user/refresh-token");
          return api(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
      return Promise.reject(err);
    }
  );

  return api;
};

export default useApi;
