import axios from "axios";
// https://localchefbazaar.onrender.com/api/v1
//http://localhost:3000/api/v1

const useApi = () => {
  return axios.create({
    baseURL: "https://localchefbazaar.onrender.com/api/v1",
  });
};

export default useApi;
