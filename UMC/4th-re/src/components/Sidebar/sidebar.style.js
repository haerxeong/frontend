import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  background-color: #222;
  padding: 20px;
  color: white;
  height: 100vh;

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }
`;

export const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #222;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none; /* 밑줄 없애기 */

  &:hover {
    background-color: #444;
  }

  svg {
    margin-right: 10px;
  }
`;
