import axios from "axios";

const useApi = () => {
  return axios.create({
    baseURL: "https://localchefbazaar.onrender.com/api/v1",
  });
};

export default useApi;
