import React from "react";
import PropTypes from "prop-types";
import * as S from "./card.style.js"; // 스타일링 파일

const Card = ({ movie }) => {
  const { title, poster_path, vote_average, release_date } = movie;
  const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <S.CardContainer>
      <S.Poster src={posterUrl} alt={title} />
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.ReleaseDate>Release: {release_date}</S.ReleaseDate>
        <S.Vote>Rating: {vote_average}</S.Vote>
      </S.Info>
    </S.CardContainer>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }).isRequired,
};

export default Card;
