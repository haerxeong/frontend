import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/card.jsx";
import * as S from "../../components/Card/card.style.js";

const PopularMoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
            },
          }
        );
        setMovies(response.data.results); // response.data.results로 변경
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    getPopularMovies();
  }, []);

  return (
    <S.CardList>
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </S.CardList>
  );
};

export default PopularMoviesPage;
