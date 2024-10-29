// components/Card/card.jsx
import React from "react";
import * as S from "./card.style.js"; // 스타일 컴포넌트를 위한 파일 임포트

const Card = ({ movie }) => {
  return (
    <S.CardContainer>
      <S.Poster
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // 이미지 URL
        alt={movie.title}
      />
      <S.Info>
        <S.Title>{movie.title}</S.Title>
        <S.ReleaseDate>{movie.release_date}</S.ReleaseDate>
      </S.Info>
    </S.CardContainer>
  );
};

export default Card;
