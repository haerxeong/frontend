import React from "react";
import { FaSearch, FaFilm, FaCheckCircle } from "react-icons/fa";
import { SidebarWrapper, SidebarLink } from "./sidebar.style.ts";

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper>
      <ul>
        <li>
          <SidebarLink to="/search">
            <FaSearch /> 찾기
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/movies">
            <FaFilm /> 영화
          </SidebarLink>
        </li>
        <li>
          <SidebarLink to="/subscribe">
            <FaCheckCircle /> 구독
          </SidebarLink>
        </li>
      </ul>
    </SidebarWrapper>
  );
};

export default Sidebar;
