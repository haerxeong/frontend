import styled from "styled-components";

export const SidebarWrapper = styled.aside`
  width: 150px; /* 사이드바의 고정 너비 설정 */
  background-color: #222;
  padding: 20px;
  color: white;
  height: auto;
  min-height: 100vh; /* 최소 높이를 100vh로 설정 */
  flex-shrink: 0; /* 헉 얘 추가하니까 siebar width 유지된다 */

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 20px;
  }

  button {
    display: flex;
    background-color: #222;
    color: white;
    border: none;
    padding: 10px; /* 상하 여백을 10px로 설정하여 높이 고정 */
    font-size: 16px;
    cursor: pointer;

    svg {
      margin-right: 10px; /* 아이콘과 텍스트 간의 여백 조정 */
    }
  }
`;
