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
          `https://api.themoviedb.org/3/movie/${category}?language=ko-KR&page=1`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWJhOGE5NTIxOGFlMGMyMzBhYWYyYTNhZTdhNTE4NSIsIm5iZiI6MTcyOTgwMTk4NC44NDk4MzYsInN1YiI6IjY3MWE2ZmJlNmQ2YjcwNWRjODcxMzM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UgJ8HH4r0TmIXjIAk4N1fWTVcngDI2TNBLHyWBSUXiA`,
              //accept: "application/json",
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
