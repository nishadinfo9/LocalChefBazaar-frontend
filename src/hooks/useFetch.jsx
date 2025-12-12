import React from "react";
import { useQuery } from "@tanstack/react-query";
import useApi from "./useApi";

const useFetch = ({
  url,
  queryKey = [],
  enabled = true,
  staleTime = 0,
  keepPreviousData = false,
  select,
}) => {
  const api = useApi();
  return useQuery({
    queryKey,
    queryFn: async () => {
      const token = localStorage.getItem("accessToken");
      const response = await api.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    enabled,
    staleTime,
    keepPreviousData,
    select,
  });
};

export default useFetch;
