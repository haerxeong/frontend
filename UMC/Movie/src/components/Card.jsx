import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // useNavigate import 추가
import { MOVIES } from "../mocks/movies";

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 16px;
  height: 100vh;
  overflow-y: auto;
`;

const MovieItem = styled.div`
  position: relative;
  text-align: center;
  height: 200px;
  cursor: pointer; /* 클릭 가능하도록 커서 변경 */
`;

const MovieImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${MovieItem}:hover & {
    opacity: 1;
  }
`;

const MovieTitle = styled.div`
  font-size: 16px;
  margin-top: 8px;
`;

const MovieReleaseDate = styled.div`
  font-size: 12px;
  color: #ccc;
  margin-top: 4px;
`;

const MovieComponent = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`); // 클릭 시 상세 페이지로 이동
  };

  return (
    <MovieGrid>
      {MOVIES.results.map((movie) => (
        <MovieItem key={movie.id} onClick={() => handleMovieClick(movie.id)}>
          {" "}
          {/* 클릭 이벤트 추가 */}
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <Overlay />
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
        </MovieItem>
      ))}
    </MovieGrid>
  );
};

export default MovieComponent;
