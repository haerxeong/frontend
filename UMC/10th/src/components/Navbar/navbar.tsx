import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarWrapper,
  LoginButton,
  SignupButton,
  LogoutButton,
  UserInfo,
} from "./navbar.style";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Navbar: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [nickname, setNickname] = useState<string>("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const email = response.data.email;
        const nickname = email.split("@")[0];
        setNickname(nickname);
      } catch (error) {
        console.error("유저 정보 불러오기 실패:", error);
      }
    };

    if (authContext?.isAuthenticated) {
      fetchUserInfo();
    }
  }, [authContext?.isAuthenticated]);

  return (
    <NavbarWrapper>
      <div className="navbar-logo">
        <Link to="/">UMCHA</Link>
      </div>
      <div className="navbar-buttons">
        {authContext?.isAuthenticated ? (
          <>
            <UserInfo>{nickname}님 반갑습니다.</UserInfo>
            <LogoutButton onClick={authContext.logout}>로그아웃</LogoutButton>
          </>
        ) : (
          <>
            <LoginButton as={Link} to="/login">
              로그인
            </LoginButton>
            <SignupButton as={Link} to="/signup">
              회원가입
            </SignupButton>
          </>
        )}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
