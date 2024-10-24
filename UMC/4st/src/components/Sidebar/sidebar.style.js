import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: #333;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100vh; /* 화면 전체 높이를 차지하도록 설정 */
`;

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff; /* 글자색을 흰색으로 설정 */
  padding: 10px;
  background-color: #333; /* 사이드바 색과 통일 */
  text-decoration: none; /* 링크의 기본 밑줄 제거 */
  border-radius: 4px; /* 약간의 둥근 모서리 추가 */

  &:hover {
    background-color: #444; /* hover 시 배경색 변경 */
  }
`;
