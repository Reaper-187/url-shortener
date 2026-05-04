import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar-comp/Navbar";
import "./index.css";
export const App = () => {
  return (
    <>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </>
  );
};
