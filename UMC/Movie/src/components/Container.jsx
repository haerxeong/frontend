import React from "react";
import styled from "styled-components";

const AppContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AppContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
