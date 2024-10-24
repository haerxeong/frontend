import React from "react";
import styled from "styled-components";
import { MOVIES } from "../mocks/movies";

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr); /* 한 행에 10개의 열로 고정 */
  gap: 16px;
  height: 100vh; /* 화면 높이에 맞춤 */
  overflow-y: auto; /* 세로 스크롤 가능 */
`;

const MovieItem = styled.div`
  position: relative;
  text-align: center;
  height: 200px; /* 높이를 줄여서 세로 비율을 낮춤 */
`;

const MovieImage = styled.img`
  width: 100%;
  height: 70%; /* 이미지의 높이를 전체 높이의 70%로 설정하여 세로 비율 조정 */
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
  background-color: rgba(0, 0, 0, 0.6); /* 검정색 배경에 투명도 적용 */
  border-radius: 8px; /* 이미지와 같은 border-radius 적용 */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${MovieItem}:hover & {
    opacity: 1; /* hover 시 오버레이가 보이도록 설정 */
  }
`;

const MovieTitle = styled.div`
  font-size: 16px; /* 영화 제목 크기 */
  margin-top: 8px; /* 제목과 이미지 간의 간격 */
`;

const MovieReleaseDate = styled.div`
  font-size: 12px; /* 개봉일 크기 */
  color: #ccc; /* 개봉일 색상 */
  margin-top: 4px; /* 개봉일과 제목 간의 간격 */
`;

const MovieComponent = () => {
  return (
    <MovieGrid>
      {MOVIES.results.map((movie) => (
        <MovieItem key={movie.id}>
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
