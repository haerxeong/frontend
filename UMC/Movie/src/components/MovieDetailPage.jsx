import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"; // styled-components import 추가

const MovieDetailPage = () => {
  const { movieId } = useParams(); // Get movieId from URL
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // Fetch movie details
        const movieResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer YOUR_API_KEY`, // Replace with your API key
            },
          }
        );
        setMovie(movieResponse.data);

        // Fetch credits information
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`,
          {
            headers: {
              Authorization: `Bearer YOUR_API_KEY`, // Replace with your API key
            },
          }
        );
        setCredits(creditsResponse.data.cast); // Assuming you're interested in the cast
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <Container>
      <ImageWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <Overlay>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <Credits>
            <h2>Credit~~</h2>
            {credits.map((credit) => (
              <Credit key={credit.id}>
                {credit.name} as {credit.character}
              </Credit>
            ))}
          </Credits>
        </Overlay>
      </ImageWrapper>
    </Container>
  );
};

const Container = styled.div`
  color: #fff; /* 글자색을 흰색으로 설정 */
`;

const ImageWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 어두운 배경 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff; /* 글자색을 흰색으로 설정 */
  padding: 20px;
`;

const Credits = styled.div`
  margin-top: 10px; /* 제목과 크레딧 사이의 간격 */
  text-align: center; /* 크레딧 텍스트 중앙 정렬 */
`;

const Credit = styled.div`
  font-size: 14px; /* 크레딧 텍스트 크기 */
`;

export default MovieDetailPage;
