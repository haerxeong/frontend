import { useInfiniteQuery } from "@tanstack/react-query";
import useGetMovies from "./useGetMovies";

interface Movie {
  id: number;
  title: string;
  // 필요한 다른 필드들 추가
}

interface MoviesResponse {
  results: Movie[];
  // 필요한 다른 필드들 추가
}

function useGetInfiniteMovies(category: string) {
  return useInfiniteQuery<MoviesResponse, Error>({
    queryFn: async ({ pageParam = 1 }) => {
      const data = await useGetMovies({ category, pageParam });
      return data;
    },
    queryKey: ["movies", category],
    getNextPageParam: (lastPage, allPages) => {
      const lastMovie = lastPage.results.at(-1);
      return lastMovie ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1, // 초기 페이지 매개변수 설정
  });
}

export default useGetInfiniteMovies;
