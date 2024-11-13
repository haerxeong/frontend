import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../apis/axios-instance";

const useGetMovies = (url, queryKey) => {
  const fetchData = async () => {
    const response = await axiosInstance.get(url);
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: [queryKey, url],
    queryFn: fetchData,
  });

  return { data, isLoading, isError };
};

export default useGetMovies;
