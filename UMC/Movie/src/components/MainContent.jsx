import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import MovieComponent from "./Card";
import Login from "./Login";
import Signup from "./Signup";
import Search from "./Search";
import Categories from "./Categories";
import MoviesPage from "./MoviesPage";

const MainContent = () => {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="/" element={<MovieComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/movies" element={<Categories />} />
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

const ContentWrapper = styled.div`
  flex: 1;
  padding: 20px;
`;
