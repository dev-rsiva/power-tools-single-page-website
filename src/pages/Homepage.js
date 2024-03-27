import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

import Nav from "../components/Navbar/Nav";

import { Outlet } from "react-router-dom";
import { useRefsContext } from "../RefsContext";




const Homepage = () => {

  const refs = useRefsContext()
  return (
    <div className="bg-[#231F20]">
      <Nav refs={refs} />
      <Outlet />
      <Footer refs={refs} />
    </div>
  );
};

export default Homepage;


// https://github.com/dev-rsiva/power-tools-single-page-website#readme