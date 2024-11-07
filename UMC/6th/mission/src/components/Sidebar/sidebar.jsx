import React from "react";
import { FaSearch, FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarWrapper } from "./sidebar.style";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <ul>
        <li>
          <button as={Link} to="/search">
            <FaSearch /> 찾기
          </button>
        </li>
        <li>
          <button as={Link} to="/movies">
            <FaFilm /> 영화
          </button>
        </li>
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
