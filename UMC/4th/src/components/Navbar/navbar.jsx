import React from "react";
import { Link } from "react-router-dom";
import * as S from "./navbar.style.js"; // 스타일 파일을 가져옴

const Navbar = () => {
  return (
    <S.NavbarContainer>
      <S.Logo to="/">UMCHA</S.Logo>
      <S.NavButtons>
        <S.NavLink to="/login">로그인</S.NavLink>
        <S.SignupButton to="/signup">회원가입</S.SignupButton>
      </S.NavButtons>
    </S.NavbarContainer>
  );
};

export default Navbar;
