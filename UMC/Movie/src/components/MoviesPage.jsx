import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import * as S from "./movies.style.js";

const MoviesPage = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YmY5YWVjMmViMDNjODYzNWIwYTcxNDhmNTc1Mzg5YyIsIm5iZiI6MTcyOTc4NzM4NC40NTU0MTIsInN1YiI6IjY3MTY4YzgxYmQ5MWM4MzgyOWQ3ODcwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vparVx0UK3Me8OjVCarIfH0pQ0f_prQGcSHaO1-V0WA`,
              accept: "application/json",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    getMovies();
  }, [category]);

  return (
    <S.CardList>
      {movies.length > 0 && <Card key={movies[0].id} movie={movies[0]} />}
    </S.CardList>
  );
};

export default MoviesPage;
