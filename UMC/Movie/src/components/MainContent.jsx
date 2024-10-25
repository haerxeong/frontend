import React from "react";
import { Routes, Route } from "react-router-dom";
import MovieComponent from "./Card";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./Search";
import Categories from "./Categories";
import MoviesPage from "./MoviesPage";
import MovieDetailPage from "./MovieDetailPage"; // 추가된 영화 상세 페이지
import styled from "styled-components"; // styled-components import 추가

const ContentWrapper = styled.div`
  flex: 1; /* 남은 공간을 차지 */
  display: flex; /* Flexbox로 배치 */
`;

const MainContent = () => {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="/" element={<MovieComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies" element={<Categories />} />
        <Route path="/movies/:movieId" element={<MovieDetailPage />} />
        <Route
          path="/movies/now-playing"
          element={<MoviesPage category="now_playing" />}
        />
        <Route
          path="/movies/popular"
          element={<MoviesPage category="popular" />}
        />
        <Route
          path="/movies/top-rated"
          element={<MoviesPage category="top_rated" />}
        />
        <Route
          path="/movies/up-coming"
          element={<MoviesPage category="upcoming" />}
        />
      </Routes>
    </ContentWrapper>
  );
};

export default MainContent;
