import { useState, useEffect } from "react";
import logo from "./S_Power_Tools_Trichy_Core_cutting_Demolition_Drilling_Macines_0004.png";
import { useNavigate, Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ refs }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "HOME", link: "/", linkId: "" },
    {
      name: "PRODUCTS",
      link: "/products",
      linkId: "productSection",
    },
    {
      name: "ABOUT US",
      link: "/aboutus",
      linkId: "aboutSection",
    },
    { name: "BLOG", link: "/blog", linkId: "footer" },
    { name: "CONTACT US", link: "/contactus", linkId: "contactSection" },
  ];

  const scrollToSection = (elementRef) => {
    setOpen(false);
    setTimeout(() => {
      window.scrollTo({
        top: elementRef?.current.offsetTop,
        behavior: "smooth",
      });
    }, 10); // Adjust the delay as needed
  };

  const handleOutsideClick = (e) => {
    console.log(e.target);
    const navLinkItems = document.getElementById("navLinkItems");
    if (navLinkItems && !navLinkItems.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  console.log(open);

  return (
    <div className="w-full shadow-md">
      <div className="h-[50px] bg-[#CCCCCC] flex justify-between items-center px-3 lg:px-12">
        <h2 className="text-[#333333] text-xl font-Rubik font-semibold">
          24-Hour Delivery
        </h2>
        <h2>
          <a
            href="tel:9363031126"
            className="phone-link flex items-center text-white no-underline"
          >
            <span className="text-xl text-[#333333]">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span className="ml-2 text-[#333333] text-xl font-Rubik font-semibold">
              9363031126
            </span>
          </a>
        </h2>
      </div>
      <div className="md:flex bg-black md:justify-between py-2 md:px-[20px] lg:px-44 pl-2 pr-7 border-b-2 border-b-white">
        <div className="w-32 min-w-[128px] h-full cursor-pointer">
          <Link to={"/#"}>
            <img src={logo} alt="logo" className="object-cover w-full h-full" />
          </Link>
        </div>

        <div
          className="text-3xl absolute right-8 top-[85px] cursor-pointer md:hidden"
          id="navLinkItems"
          onClick={() => {
            setOpen(!open);
            console.log("end");
          }}
        >
          <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            style={{ color: "#f29c38", fontSize: "32px" }}
          />
        </div>

        <ul
          className={`md:flex justify-center md:items-center absolute md:static bg-black md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open
              ? "top-[108px] opacity-90"
              : "top-[-490px]  md:opacity-100 opacity-0"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-lg md:my-0 my-7 whitespace-nowrap text-center"
              onClick={() => scrollToSection(refs[link.linkId])}
            >
              <Link
                to={link.link}
                className="text-primOrange font-Rubik hover:text-white duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
