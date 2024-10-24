import styled from "styled-components";

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  padding: 20px;
  height: 100vh; /* 화면 높이에 맞춤 */
  overflow-y: auto; /* 세로 스크롤 가능 */
`;

export const MovieItem = styled.div`
  position: relative;
  text-align: center;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* 검정색 배경에 투명도 적용 */
  border-radius: 8px; /* 이미지와 같은 border-radius 적용 */
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${MovieItem}:hover & {
    opacity: 1; /* hover 시 오버레이가 보이도록 설정 */
  }
`;
