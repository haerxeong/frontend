import React from "react";
import { MOVIES } from "./mocks/movies";
import "./App.css";

const MovieGrid = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-grid">
      {MOVIES.results.map((movie) => (
        <div
          key={movie.id}
          className="movie-item"
          style={{ position: "relative" }}
        >
          <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
          <div className="overlay"></div> {/* 오버레이 요소 추가 */}
          {/* <h3>{movie.title}</h3> */}
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
