import React from "react";
import axios from "axios";

const useApi = () => {
  const api = axios.create({
    //https://localchefbazaar-backend-production.up.railway.app/api/v1
    baseURL: "http://localhost:3000/api/v1",
    withCredentials: true,
  });

  api.interceptors.response.use(
    (response) => response,
    async (err) => {
      const originalRequest = err.config;

      if (err.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        // Prevent infinite loop on refresh-token itself
        if (originalRequest.url === "/user/refresh-token") {
          return Promise.reject(err);
        }

        try {
          await api.post("/user/refresh-token");
          return api(originalRequest);
        } catch (refreshError) {
          console.log(refreshError);
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(err);
    }
  );

  return api;
};

export default useApi;
