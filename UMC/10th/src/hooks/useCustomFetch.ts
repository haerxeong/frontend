import { useEffect, useState } from "react";
import { axiosInstance } from "../apis/axios-instance";

interface MoviesResponse {
  results: any[]; // 필요한 경우, 더 구체적인 타입으로 변경
  total_pages: number;
}

const useCustomFetch = (url: string) => {
  const [data, setData] = useState<MoviesResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(url);
        setData(response.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useCustomFetch;
