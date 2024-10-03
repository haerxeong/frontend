import React from "react";
import { MOVIES } from "../mocks/movies";

const MovieGrid = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-grid">
      {MOVIES.results.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
