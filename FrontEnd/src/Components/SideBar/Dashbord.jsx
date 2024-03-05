import React, { useState, useEffect } from "react";
import axios from "axios";
import datajson from "../data.json";

function Dashbord() {
  const [userData, setUserData] = useState([]);
  const [selectedUsername, setSelectedUsername] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("https://quirky-habits-hub.onrender.com/posts");
  //       console.log(res);
  //       setUserData(res.data);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //       console.log(
  //         "Error is there while fetching the data from the data base"
  //       );
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    setUserData(datajson);
  }, []);

  const handleSelectChange = (event) => {
    setSelectedUsername(event.target.value);
  };

  const filteredData = selectedUsername
    ? userData.filter((user) => user.username === selectedUsername)
    : userData;

  return (
    <>
      <div>
        <div className="flex justify-center items-center h-20">
          <select
            className="DROPDOWN h-12 border border-cyan-100 pl-2 mt-10 hover:shadow-lg duration-500"
            onChange={handleSelectChange}
            value={selectedUsername}
          >
            <option className="bg-cyan-900 text-white font-mono border border-gray-100" value="">All</option>
            {userData.map((user) => (
              <option className="bg-cyan-900 text-white font-mono" key={user.username} value={user.username}>
                {user.username}
              </option>
            ))}
          </select>
        </div>
        <div className="m-7 posts  overflow-x-auto">
          {filteredData.map((user, index) => (
            <div key={index} className="m-8 border border-cyan-700 p-10 ">
                <h1 className="font-bold text-2xl border border-cyan-500 py-2 pl-5">
                  {user.username}
                </h1>
                <div className="flex items-center gap-10">
                  <div className="my-3 w-3/4 bg-slate-700">
                    <img className="" src={user.link} alt="" />
                  </div>

                  <div className="text-center">
                    <button className=" bg-cyan-700 mb-7 font-mono hover:shadow-xl duration-500 text-white rounded py-3 px-9">
                      Like
                    </button>
                    <h2 className="text-xl font-semibold">
                      Likes :- {user.reactions}
                    </h2>
                  </div>
                </div>
                <h3 className="text-cyan-950 text-2xl font-semibold mb-3">
                  {user.title}
                </h3>
                <p className="text-lg text-cyan-900">
                  <span className="font-semibold">Description:</span>
                  {user.content}
                </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashbord;
