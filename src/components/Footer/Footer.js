import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "./main-logo-transparent.png";

const Footer = ({ refs }) => {
  return (
    <div id="footer" className="bg-black py-8 px-4 md:px-44 ">
      <div className="text-white flex flex-wrap justify-between items-center font-Rubik pb-8">
        <div className="w-36 h-auto pr-4 pb-4">
          <img src={logo} alt="logo" className="object-cover w-full h-full" />
        </div>
        <div className="max-w-[400px] pr-4 pb-4">
          <p>
            <span>Address: </span>D/NO 1D, Ramakrishna theatre back side,
            bharathiyar salai, tiruchirapalli, tamilnadu 620008
          </p>
          <p></p>
        </div>
        <div className="pr-4 pb-4">
          <p>
            <span>Phone: </span>+91-9363031126
          </p>
          <p>
            <span>Email: </span>spowertoolstrichy@gmail.com
          </p>
        </div>
        <div className="pr-4 pb-4">
          <p>Follow Us:</p>

          <div className="flex">
            <a
              href="https://www.facebook.com/RamanathanSPowerToolsTrichy"
              className="pr-4"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>

            <a
              href="https://www.instagram.com/corecuttingmachinestrichy/"
              className="pr-4"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="https://www.youtube.com/@SPowerToolsTrichy"
              className="pr-4"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center">
        <p className="text-gray-400 font-Rubik pr-4">
          © Copyright 2023. All Rights Reserved to S Power Tools
        </p>
      </div>
    </div>
  );
};

export default Footer;
