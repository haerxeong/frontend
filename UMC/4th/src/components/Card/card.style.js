import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05); /* 살짝 확대 */
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4); /* 더 깊은 그림자 */
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 15px 10px;
  color: #fff;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
  color: #e0e0e0;
`;

export const ReleaseDate = styled.p`
  font-size: 0.9rem;
  color: #bbb;
  margin: 5px 0;
`;

export const Vote = styled.p`
  font-size: 1rem;
  color: #ffdd33;
  font-weight: bold;
  margin: 5px 0;
`;
