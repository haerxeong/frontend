// / 경로에서 공유하는 layout
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default RootLayout;
