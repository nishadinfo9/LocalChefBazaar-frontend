import axios from "axios";

const useApi = () => {
  const api = axios.create({
    baseURL: "https://localchefbazaar-backend-production.up.railway.app/api/v1",
  });

  return api;
};

export default useApi;
