import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const RouterLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RouterLayout;
