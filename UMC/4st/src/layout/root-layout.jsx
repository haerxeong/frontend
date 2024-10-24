// / 경로에서 공유하는 layout
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"; // Navbar 경로 수정
import Sidebar from "../components/Sidebar/Sidebar"; // Sidebar 경로 추가
import styled from "styled-components";

const RootLayoutContainer = styled.div`
  display: flex; /* Flexbox로 배치 */
  height: 100vh; /* 전체 높이를 100vh로 설정 */
`;

const ContentWrapper = styled.div`
  flex: 1; /* 남은 공간을 차지 */
  display: flex; /* Flexbox로 배치 */
`;

const RootLayout = () => {
  return (
    <RootLayoutContainer>
      <Navbar />
      <ContentWrapper>
        <Sidebar />
        <Outlet />
      </ContentWrapper>
    </RootLayoutContainer>
  );
};

export default RootLayout;
