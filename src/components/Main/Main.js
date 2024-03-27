import React from "react";
import { useState, useEffect } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Categories from "../Categories/CategoriesList";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";

import { useRefsContext } from "../../RefsContext";

const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const slidesDesktop = [
    {
      image: require("./spower_tools_trichy_Banner/Core_cutting_machines_spower_tools_trichy.png"),
      title: "Core_cutting_machines",
    },
    {
      image: require("./spower_tools_trichy_Banner/Concrete_cutting_machines_spower_tools_trichy.png"),
      title: "Concrete_cutting_machines",
    },
    {
      image: require("./spower_tools_trichy_Banner/Demolition_hammer_machines_spower_tools_trichy.png"),
      title: "Demolition_hammer_machines",
    },
    {
      image: require("./spower_tools_trichy_Banner/Drilling_machines_spower_tools_trichy.png"),
      title: "Drilling_machines",
    },
    {
      image: require("./spower_tools_trichy_Banner/Chemical_and_mechanical_anchors_spower_tools_trichy.png"),
      title: "Chemical_and_mechanical_anchors",
    },
    {
      image: require("./spower_tools_trichy_Banner/Accessories_spower_tools_trichy.png"),
      title: "Accessories",
    },
    {
      image: require("./spower_tools_trichy_Banner/Other_Power_Tools_spower_tools_trichy.png"),
      title: "Other_Power_Tools",
    },
  ];

  const slidesMobile = [
    {
      image: require("./spower_tools_trichy_Mobile/Core_cutting_machines_spower_tools_trichy_mobile.png"),
      title: "Core_cutting_machines",
    },
    {
      image: require("./spower_tools_trichy_Mobile/Concrete_cutting_machines_spower_tools_trichy_mobile.png"),
      title: "Concrete_cutting_machines",
    },

    {
      image: require("./spower_tools_trichy_Mobile/Demolition_hammer_machines_spower_tools_trichy_mobile.png"),
      title: "Demolition_hammer_machines",
    },
    {
      image: require("./spower_tools_trichy_Mobile/drilling_machines_spower_tools_trichy.png"),
      title: "Drilling_machines",
    },
    {
      image: require("./spower_tools_trichy_Mobile/Chemical_and_mechanical_anchors_spower_tools_trichy_mobile.png"),
      title: "Chemical_and_mechanical_anchors",
    },
    {
      image: require("./spower_tools_trichy_Mobile/Accessories_spower_tools_trichy_mobile.png"),
      title: "Accessories",
    },
    {
      image: require("./spower_tools_trichy_Mobile/Other_Power_Tools_spower_tools_trichy.png"),
      title: "Other_Power_Tools",
    },
  ];

  const slides = windowWidth <= 640 ? slidesMobile : slidesDesktop;

  console.log(slides);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    setWindowWidth(screenWidth);
  };
  console.log(windowWidth);
  useEffect(() => {
    console.log("useEffect in Main");
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("useEffect in Main");
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const refs = useRefsContext();

  return (
    <div className="mx-auto" style={{ margin: "0px auto" }}>
      <h1 className="py-4 px-4 lg:px-44 font-Rubik text-xl text-white text-center">
        Empower Your Projects with <br /> Best Core Cutting, Drilling,
        Demolition Hammer/Rotary Machines in Trichy – The Ultimate Store for all
        Brand Power Tools and its Accessories in Trichy.
      </h1>
      <ImageSlider slides={slides} windowWidth={windowWidth} />
      <Categories refs={refs} />
      <AboutUs refs={refs} />
      <Contact refs={refs} />
    </div>
  );
};

export default Main;
