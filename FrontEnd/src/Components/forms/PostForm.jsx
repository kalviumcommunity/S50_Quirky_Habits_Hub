import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function PostForm() {
  const [data, setData] = useState([]);
  const [sub, setSub] = useState(false);
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    const storedMyData = Cookies.get("userData");
    if (storedMyData) {
      const parsedMyData = JSON.parse(storedMyData);
      setMyData(parsedMyData);
    }
  }, []); 


  const handlePostSubmit = (data) => {
    data.reactions = 0;
    if(myData){
      data.username = myData.username
      data.created_by = myData._id
    }

    axios.post( "http://localhost:3000/posts", data)
    .then((response) => {
      console.log("Post request successful:", response.data);
      navigate("/HomePage")
    })
    .catch((error) => {
      console.error("Error sending post request:", error);
    });

    console.log(data);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="grid justify-center mt-10">
        <h1 className="text-center m-10 text-3xl font-bold">
          CREATE A NEW POST
        </h1>
        <form
          onSubmit={handleSubmit((data) => handlePostSubmit(data))}
          className="flex justify-center items-center border p-10 h-fit bg-white w-fit flex-col text-white"
        >
          {sub && !Object.keys(errors).length && (
            <h2 className="text-green-600 font-semibold text-lg border py-4 px-24">
              Post Submitted Successfully!
            </h2>
          )}
          <div className="">
            <input
              className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
              {...register("title", {
                required: "Title is required",
              })}
              placeholder="Enter the Title"
            />
            <p className="text-red-500 text-xs">
              {errors.title && (
                <span className="error-message">{errors.title.message}</span>
              )}
            </p>
          </div>

          <div className="">
            <textarea
              className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
              {...register("content", {
                required: "Content is required",
              })}
              placeholder="Enter the Content"
            />
            <p className="text-red-500 text-xs">
              {errors.content && (
                <span className="error-message">{errors.content.message}</span>
              )}
            </p>
          </div>

          <div className="">
            <input
              className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
              {...register("link")}
              placeholder="Enter a Link (Optional)"
            />
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => {
                navigate("/Homepage");
              }}
              className="bg-cyan-700 duration-500 mt-10 px-10 py-2 hover:bg-cyan-900 text-white p-10-15 border-none border-radius-4px cursor-pointer text-base"
            >
              GO BACK
            </button>
            <button
              type="submit"
              className="bg-cyan-700 duration-500 mt-10 px-10 py-2 hover:bg-cyan-900 text-white p-10-15 border-none border-radius-4px cursor-pointer text-base"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default PostForm;
