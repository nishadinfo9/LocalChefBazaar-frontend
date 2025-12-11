import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

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
      const status = err.response?.status;
      const message = err.response?.data?.message;

      //handle fraud
      // if (status === 403 && message?.includes("banned")) {
      //   toast.error("⚠️ You account has banned.");
      //   return Promise.reject(err);
      // }

      // if (status === 403 && message?.includes("Access denied")) {
      //   toast.error("⛔ You do not have permission to access this page.");
      //   return Promise.reject(err);
      // }

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
