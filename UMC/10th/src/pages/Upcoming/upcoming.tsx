import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/Card/card";
import useGetMovies from "../../hooks/queries/useGetMovies";
import CardListSkeleton from "../../components/Card/Skeleton/card-list-skeleton";
import * as S from "../../components/Card/card.style";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

const UpcomingMoviesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    data: movies,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movies", "upcoming", currentPage],
    queryFn: () =>
      useGetMovies({ category: "upcoming", pageParam: currentPage }),
  });

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < movies?.total_pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (isError) {
    return <h1 style={{ color: "white" }}>에러가 발생했습니다.</h1>;
  }

  return (
    <>
      <S.CardList>
        {movies?.results?.map((movie: Movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
        {isLoading && <CardListSkeleton number={20} />}
      </S.CardList>

      <S.PaginationContainer>
        <S.PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
          이전
        </S.PageButton>
        <S.CurrentPage>{currentPage}</S.CurrentPage>
        <S.PageButton
          onClick={handleNextPage}
          disabled={currentPage === movies?.total_pages}
        >
          다음
        </S.PageButton>
      </S.PaginationContainer>
    </>
  );
};

export default UpcomingMoviesPage;
