import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #222;
`;

export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: #df013a;
  text-decoration: none;
`;

export const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const NavLink = styled(Link)`
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

export const SignupButton = styled(NavLink)`
  color: #fff;
  background-color: #df013a;

  &:hover {
    background-color: #c50132;
  }
`;
