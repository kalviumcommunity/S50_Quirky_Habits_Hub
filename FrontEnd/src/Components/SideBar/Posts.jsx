import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PostForm from "../forms/PostForm";

function Posts() {
  const [myData, setMyData] = useState([]);
  const [postsdata, setPostsData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedMyData = Cookies.get("userData");
    if (storedMyData) {
      setMyData(JSON.parse(storedMyData));
    }
  }, []);

  useEffect(() => {
    fetchUserPosts();
  }, [myData]);

  const fetchUserPosts = async () => {
    try {
      const username = myData.username;
      const response = await axios.get(`https://quirky-habits-hub.onrender.com/posts`);
      if (response.data) {
        const filteredPosts = response.data.filter(
          (post) => post.username === username
        );
        setPostsData(filteredPosts);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const AddPost = () => navigate("/PostForm");
  const UpdatePost = () => console.log(postsdata);

  return (
    <div className="m-10">
      <div className="m-8 border border-cyan-900 settings p-10">
        <div className="flex justify-between px-4 mx-auto">
          <p className="text-4xl text-cyan-900 font-semibold tracking-widest text-g uppercase">
            Your Posts
          </p>
          <button
            onClick={AddPost}
            className="bg-cyan-800 px-3 py-2 text-white cursor-pointer"
          >
            ADD POSTS
          </button>
        </div>

        <div className="mt-10 myposts overflow-auto">
          {postsdata == "" ? (
            <h2 className="text-4xl text-center text-cyan-900 mt-20 font-bold border border-cyan-950 py-5">
              Create A New Post +
            </h2>
          ) : (
            postsdata.map((post) => (
              <div key={post._id} className="m-8 border border-cyan-700 p-10">
                <h1 className="font-bold text-2xl border border-cyan-500 py-2 pl-5">
                  {post.username}
                </h1>
                <div className="flex items-center gap-10">
                  <div
                    style={{ backgroundImage: `url(${user.link})` }}
                    className="my-3 post w-3/4 "
                  >
                    <img className="h-96" alt="" />
                  </div>
                  <div className="text-center"></div>
                </div>
                <h3 className="text-cyan-950 text-2xl font-semibold mb-3">
                  {post.title}
                </h3>
                <p className="text-lg text-cyan-900">
                  <span className="font-semibold">Description:</span>{" "}
                  {post.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Posts;
