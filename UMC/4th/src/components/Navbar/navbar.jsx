import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #222;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #df013a; /* 붉은색으로 변경 */
  text-decoration: none;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled(Link)`
  padding: 8px 16px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;

const SignupButton = styled(Button)`
  color: #fff;
  background-color: #df013a; /* 붉은색으로 설정 */
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">UMCHA</Logo> {/* My Movie App -> UMCHA로 변경 */}
      <NavButtons>
        <Button to="/login">로그인</Button>
        <SignupButton to="/signup">회원가입</SignupButton>
      </NavButtons>
    </NavbarContainer>
  );
};

export default Navbar;
