import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  padding: 10px 20px;

  .navbar-logo a {
    font-size: 24px;
    color: red;
    font-weight: 900; /* 더 두껍게 설정 */
    text-decoration: none;
  }

  .navbar-buttons {
    display: flex;
  }
`;

export const LoginButton = styled.button`
  background-color: #222;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-right: 15px;
  text-decoration: none;

  &:hover {
    background-color: #444;
  }
`;

export const SignupButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: darkred;
  }
`;
