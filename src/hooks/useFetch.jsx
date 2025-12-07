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
      const response = await api.get(url);
      return response.data;
    },
    enabled,
    staleTime,
    keepPreviousData,
    select,
  });
};

export default useFetch;
