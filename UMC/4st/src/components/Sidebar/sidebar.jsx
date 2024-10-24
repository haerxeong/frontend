import React from "react";
import * as S from "./sidebar.style.js"; // 스타일 파일을 가져옴
import { FaSearch, FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <S.SidebarContainer>
      <S.SidebarItem to="/search">
        <FaSearch size="20px" />
        <span>찾기</span>
      </S.SidebarItem>
      <S.SidebarItem to="/movies">
        <FaFilm size="20px" />
        <span>영화</span>
      </S.SidebarItem>
    </S.SidebarContainer>
  );
};

export default Sidebar;
