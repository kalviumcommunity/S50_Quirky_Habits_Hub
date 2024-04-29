import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Dashbord from "./SideBar/Dashbord";
import Posts from "./SideBar/Posts";
import RankList from "./SideBar/Trending";
import Users from "./SideBar/Users";
import Settings from "./SideBar/Settings";
import WLOGO from "../Assets/WLOGO.png";
import BLOGO from "../Assets/BLOGO.png";
import Profile from "./SideBar/Profile";
import BG from "../Assets/BG.png";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Trending from "./SideBar/Trending";

function HomePage() {
  const [activeComponent, setActiveComponent] = useState("home");
  const [userData, setUserData] = useState("");
  const [logout, setLogout] = useState(false);
  const [signup, setSignup] = useState(false);

  useEffect(() => {
    const storedUserData = Cookies.get("userData");
    if (storedUserData) {
      setSignup(!signup);
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);


  const handleClick = (event) => {
    if (!userData) {
      alert("Create An Account First");
    } else {
      const spanContent = event.currentTarget.querySelector("span").textContent;
      setActiveComponent(spanContent.toLowerCase());
    }
  };

  const navigate = useNavigate();

  const openProfile = (e) => {
    navigate("/profile");
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Dashbord />;
      case "users":
        return <Users />;
      case "posts":
        return <Posts />;
      case "trending":
        return <Trending />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  const Cancel = () => {
    setLogout(false);
  };

  const Logout = () => {
    Cookies.remove("userData");
    alert("Logged Out Succussfully!");
    window.location.reload();
  };

  const SetLogOut = () => {
    setLogout(true);
  };

  if (!logout) {
    return (
      <>
        <nav className="p-4 flex items-center justify-between border-b borde  bg-cyan-800">
          <div className="container flex justify-between h-16 ml-16">
            <img className="cursor-pointer" src={WLOGO} alt="" />
          </div>
          <div className="mr-10 flex gap-6">
            {userData ? (
              <>
                <button
                  className="border hover:shadow-lg font-mono text-center py-2 rounded w-28 bg-white"
                  onClick={() => SetLogOut()}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="border hover:shadow-lg font-mono text-center py-2 rounded w-28 bg-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="border hover:shadow-lg font-mono text-center py-2 rounded w-28 bg-white"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </nav>

        <div className="flex">
          <aside className="sidebar ">
            <ul className="pt-8 pb-4 space-y-1 text-cyan-950 text-sm ">
              {signup && (
                <li
                  onClick={(e) => openProfile(e)}
                  className=" flex pl-5 items-center py-3 m-2 cursor-pointer hover:shadow-2xl hover:border hover:border-cyan-500 duration-700 hover:rounded-lg"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                    className="w-10"
                    alt=""
                  />
                  <div>
                    <h1 className="text-xl font-sans pl-6">
                      {userData.username}
                    </h1>
                    <p className="pl-6 pt-2">{userData.name}</p>
                  </div>
                </li>
              )}
              <li
                onClick={(event) => handleClick(event)}
                className=" hover:shadow-lg text-lg px-5 m-2 hover:border hover:border-cyan-950 duration-700 round"
              >
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 fill-current text-cyan-800"
                  >
                    <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                  </svg>
                  <span>Home</span>
                </a>
              </li>
              <li
                onClick={(event) => handleClick(event)}
                className="  hover:shadow-lg text-lg px-5 m-2 hover:border hover:border-cyan-950 duration-700 round"
              >
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 fill-current text-cyan-800"
                  >
                    <circle cx="256" cy="256" r="256" fill="#4FD1C9" />
                    <path
                      d="M256 295c-40.3 0-73-32.7-73-73s32.7-73 73-73 73 32.7 73 73-32.7 73-73 73zm0-128c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zM390 388H122c-14.4 0-26 11.6-26 26s11.6 26 26 26h268c14.4 0 26-11.6 26-26s-11.6-26-26-26z"
                      fill="#fff"
                    />
                  </svg>
                  <span>Users</span>
                </a>
              </li>
              <li
                onClick={(event) => handleClick(event)}
                className="  hover:shadow-lg text-lg px-5 m-2 hover:border hover:border-cyan-950 duration-700 round"
              >
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-6 h-6 fill-current text-cyan-800"
                  >
                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                  </svg>
                  <span>Posts</span>
                </a>
              </li>
              <li
                onClick={(event) => handleClick(event)}
                className="  hover:shadow-lg text-lg px-5 m-2 hover:border hover:border-cyan-950 duration-700 round"
              >
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 fill-current text-cyan-800"
                  >
                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                  </svg>
                  <span>Trending</span>
                </a>
              </li>
              <li
                onClick={(event) => handleClick(event)}
                className="  hover:shadow-lg text-lg px-5 m-2 hover:border hover:border-cyan-950 duration-700 round"
              >
                <a
                  href="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-6 h-6 fill-current text-cyan-800"
                  >
                    <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
                    <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
                  </svg>
                  <span>Settings</span>
                </a>
              </li>
              {signup && (
                <li
                  onClick={() => SetLogOut()}
                  className=" hover:shadow-lg text-lg px-5 m-2 hover:border hover:border-cyan-950 duration-700 round"
                >
                  <a
                    href="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-6 h-6 fill-current text-cyan-800"
                    >
                      <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                      <rect width="32" height="64" x="256" y="232"></rect>
                    </svg>
                    <span>Logout</span>
                  </a>
                </li>
              )}
            </ul>
          </aside>
          {renderActiveComponent()}
        </div>
      </>
    );
  } else {
    return (
      <div
        className="h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${BG})`, backgroundSize: "cover" }}
      >
        <div className="bg-white px-20 py-10 shadow-lg">
          <h2 className="text-2xl text-black">Do you want to Logout...?</h2>
          <div className="mt-7 flex gap-10 justify-center">
            <button
              className="py-2 px-4 bg-cyan-800 text-white"
              onClick={Cancel}
            >
              Cancel
            </button>
            <button
              className="py-2 px-4 bg-cyan-800 text-white"
              onClick={Logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
