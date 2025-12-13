import axios from "axios";

const useApi = () => {
  return axios.create({
    baseURL: "https://localchefbazaar-backend-production.up.railway.app/api/v1",
  });
};

export default useApi;
