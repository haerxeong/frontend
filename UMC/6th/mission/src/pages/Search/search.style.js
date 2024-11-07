import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

export const SearchInput = styled.input`
  height: 20px;
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
`;

export const SearchButton = styled.button`
  padding: 13px 20px;
  background-color: #ff1b6d;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;

  &:hover {
    background-color: #cc1b6d;
  }
`;

export const SearchResults = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const NoResultsMessage = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
`;

export const SkeletonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const Skeleton = styled.div`
  width: 150px;
  height: 200px;
  background-color: #333;
  border-radius: 10px;
`;

export const SkelotonText = styled.div`
  flex: 1;
  align-self: center;
  width: 150px;
  height: 20px;
  background-color: #333;
  border-radius: 5px;
  margin-top: 10px;
`;
