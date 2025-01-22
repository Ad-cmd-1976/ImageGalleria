import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Line from "../assets/line";
import Mode from "../assets/mode";
import Ham from "../assets/hamburger.jsx";
import Search from "../assets/Search.jsx";
import { getImages, searchImages } from "../util.jsx";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [searchVal, setsearchVal] = useState("");
  const changeTheme = (theme) => {
    props.setTheme(!theme);
  };
  const changeDisplay=()=>{
    props.setdisplay(!props.display);
  }
  const handleDelete=()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    props.setisAuthenticated(false);
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response=await searchImages(searchVal,props.nextCursor);
    props.setimageList(response.resources);
    props.setnextCursor(response.next_cursor);
  }
  return (
    <div
      className={`${
        props.theme ? "text-gray-400" : "bg-black text-white"
      } flex flex-wrap justify-between p-4 border-2 border-green-400 min-w-screen`}
    >
      <div className="flex items-center gap-3">
        <div onClick={changeDisplay} className="pt-1">
          <Ham theme={props.theme} />
        </div>
        <div className="block">
          <img className="max-h-8 pt-2" src={logo} alt="Error" />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2 border-2 border-red-600 w-[70%]">
        <div className="flex flex-shrink flex-grow items-center bg-white rounded-md w-[65%]">
        <Search theme={props.theme} />
        <input
          onChange={(e)=>setsearchVal(e.target.value)}
          className="w-full p-1 rounded-md text-gray-400 outline-none"
          value={searchVal}
          type="search"
          placeholder="Search Photos and Wallpapers"
        />
        </div>
        <div className="hidden lg:block">
          <button
          className="bg-blue-700 px-3 rounded-xl py-1 hover:bg-blue-600" 
          type="submit"
          >
            Search
          </button>
        </div>
        <div className="hidden lg:block">
              <button
              onClick={()=>window.location.reload()}
              className="bg-red-700 px-3 rounded-xl py-1 hover:bg-red-500" 
              >
                Refresh
              </button>
        </div>
      </form>

      <div className="flex flex-wrap items-center pt-1 md:gap-6">
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

        <div onClick={() => changeTheme(props.theme)} className="cursor-pointer hidden sm:block">
          <Mode theme={props.theme} />
        </div>

        <div className="hidden md:block">
          <Line theme={props.theme} />
        </div>

        <div>
          <button className="bg-blue-700 px-3 rounded-xl py-1 hover:bg-blue-600">
            {props.isAuthenticated?<span onClick={handleDelete}>Logout</span>:<Link to='/login'>Login</Link>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
