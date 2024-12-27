import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Line from "../assets/line";
import Mode from "../assets/mode";
import Ham from "../assets/hamburger.jsx";
import Search from "../assets/Search.jsx";

const Navbar = (props) => {
  const [name, setname] = useState("");
  const handleChange = (e) => {
    setname(e.target.value);
  };
  const changeTheme = (theme) => {
    props.setTheme(!theme);
  };
  return (
    <div
      className={`${
        props.theme ? "text-gray-400" : "bg-black text-white"
      } flex flex-wrap items-center justify-between p-4 gap-1 w-screen`}
    >
      <div className="flex items-center gap-3">
        <div className="pt-1">
          <Ham theme={props.theme} />
        </div>
        <div>
          <img className="max-h-8 pt-2" src={logo} alt="Error" />
        </div>
      </div>

      <div className="flex flex-grow items-center bg-white border-2 rounded-md max-w-full md:max-w-[50%]">
        <Search theme={props.theme} />
        <input
          onChange={handleChange}
          className="w-full p-1 rounded-md text-gray-400 outline-none"
          value={name}
          type="search"
          placeholder="Search Photos and Wallpapers"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1 justify-center md:gap-8">
        <div onClick={() => changeTheme(props.theme)} className="cursor-pointer">
          <Mode theme={props.theme} />
        </div>

        <div className="hidden md:block">
          <a
            href="#"
            className={`hover:underline-offset-8 hover:underline ${
              props.theme ? "decoration-gray-400" : "decoration-white"
            }`}
          >
            Explore
          </a>
        </div>
        <div className="hidden md:block">
          <a
            href="#"
            className={`hover:underline-offset-8 hover:underline ${
              props.theme ? "decoration-gray-400" : "decoration-white"
            }`}
          >
            Advertise
          </a>
        </div>
        <div className="hidden md:block">
          <a
            href="#"
            className={`hover:underline-offset-8 hover:underline ${
              props.theme ? "decoration-gray-400" : "decoration-white"
            }`}
          >
            Get FreePixz+
          </a>
        </div>

        <div className="hidden md:block">
          <Line theme={props.theme} />
        </div>

        <div>
          <button className="bg-blue-700 px-3 rounded-xl py-1 hover:bg-blue-600">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
