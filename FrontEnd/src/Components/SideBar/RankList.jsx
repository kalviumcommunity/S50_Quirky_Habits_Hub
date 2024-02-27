import React, { useState, useEffect } from "react";
import datajson from "../data.json";
import axios from "axios";


function RankList() {
  const [userData, setUserData] = useState([]);
  const [soretedData, setSoretedData] = useState([]);


    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts");
        console.log(res.data);
        setUserData(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
        console.log(
          "Error is there while fetching the data from the data base"
        );
      }
    };

    fetchData();
  }, []);


  // useEffect(() => {
  //   // Assuming 'reactions' is initially stored as strings, convert to numbers for sorting
  //   const sortedData = userData.sort((a, b) => parseInt(b.reactions, 10) - parseInt(a.reactions, 10));
  //   setSoretedData(sortedData);
  // }, []);

  return (
    <>
      <div>
        <div className="m-10 ranklistPosts overflow-x-auto">
          {userData.map((user, index) => (
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
                  <button className="bg-cyan-700 mt-10 mb-7 font-mono hover:shadow-xl duration-500 text-white rounded py-3 px-9">
                    Add to Fav
                  </button>
                </div>
              </div>
              <h3 className="text-cyan-950 text-2xl font-semibold mb-3">
                {user.title}
              </h3>
              <p className="text-lg text-cyan-900">
                <span className="font-semibold">Description:</span>{" "}
                {user.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RankList;
