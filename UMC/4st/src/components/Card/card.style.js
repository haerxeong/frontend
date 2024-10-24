import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: #222;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 10px;
  color: #fff;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 10px 0;
`;

export const ReleaseDate = styled.p`
  font-size: 0.9rem;
  color: #aaa;
`;

export const Vote = styled.p`
  font-size: 1rem;
  color: #ffcc00;
`;
