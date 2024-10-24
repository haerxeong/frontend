import React from "react";
import "../App.css";
import { MOVIES } from "../mocks/movies";

const MovieComponent = () => {
  return (
    <div className="movie-grid">
      {MOVIES.results.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="overlay"></div>
        </div>
      ))}
    </div>
  );
};

export default MovieComponent;
