import React, { useState, useEffect } from "react";
import datajson from "../data.json";
import Cookies from 'js-cookie';

function Posts() {
  const [userData, setUserData] = useState([]);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    setUserData(datajson);

    const storedMyData = Cookies.get("userData");
    if (storedMyData) {
      const parsedMyData = JSON.parse(storedMyData);
      setMyData(parsedMyData);
    }
  }, []); 
    
  const AddPost = () => {
    
  }  

  return (
    <div className="m-10 ">
      <div className="m-8 border border-cyan-900 settings p-10 ">
        <div className="flex justify-between px-4 mx-auto">
          <p className="text-4xl text-cyan-900 font-semibold tracking-widest text-g uppercase">
            Your Posts
          </p>
          <button onClick={() => AddPost()} className="bg-cyan-800 px-3 py-2 text-white cursor-pointer">
            ADD POSTS
          </button>
        </div>
        <div className="mt-10 myposts overflow-auto">
        {/* {userData.map((user, index) => ( */}
          <div  className="m-8 border border-cyan-700 p-10 ">
            <h1 className="font-bold text-2xl border border-cyan-500 py-2 pl-5">
              {myData.name}
            </h1>
            <div className="flex items-center gap-10">
              <div className="my-3 w-3/4 bg-slate-700">
                <img className="" src="https://th.bing.com/th/id/OIP.jiNE8jxGZ64_WHHjpseJJgHaEo?rs=1&pid=ImgDetMain" alt="" />
              </div>

              <div className="text-center">
                <button className=" bg-cyan-700 mb-7 font-mono hover:shadow-xl duration-500 text-white rounded py-3 px-9">
                  Like
                </button>
                <h2 className="text-xl font-semibold">
                  Likes :- 60
                </h2>
                <button className="bg-cyan-700 mt-10 mb-7 font-mono hover:shadow-xl duration-500 text-white rounded py-3 px-9">
                  Add to Fav
                </button>
              </div>
            </div>
            <h3 className="text-cyan-950 text-2xl font-semibold mb-3">
              Post Title
            </h3>
            <p className="text-lg text-cyan-900">
              <span className="font-semibold">Description:</span> post content
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
