import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://quirky-habits-hub.onrender.com/posts";

function Trending() {
  const [response, setResponse] = useState([]);
  const [eightToTen, setEightToTen] = useState([]);
  const [sixToEight, setSixToEight] = useState([]);
  const [fourToSix, setFourToSix] = useState([]);
  const [lessThanFour, setLessThanFour] = useState([]);
  const [selectedRating, setSelectedRating] = useState("All");

  const fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      const categorizedData = categorizePosts(response.data);
      setEightToTen(categorizedData.eightToTen);
      setSixToEight(categorizedData.sixToEight);
      setFourToSix(categorizedData.fourToSix);
      setLessThanFour(categorizedData.lessThanFour);
      setResponse(response.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const LikeIncrease = (id) => {
    console.log(id);
    axios
      .patch(`https://quirky-habits-hub.onrender.com/posts/${id}`)
      .then((res) => {
        console.log("Response:", res.data);
        fetchData();
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const categorizePosts = (data) => {
    const categorizedData = {
      eightToTen: [],
      sixToEight: [],
      fourToSix: [],
      lessThanFour: [],
    };

    data.forEach((post) => {
      const reactions = parseInt(post.reactions, 10);

      if (reactions >= 1000) {
        categorizedData.eightToTen.push(post);
      } else if (reactions < 1000 && reactions >= 700) {
        categorizedData.sixToEight.push(post);
      } else if (reactions < 700 && reactions >= 400) {
        categorizedData.fourToSix.push(post);
      } else if (reactions < 400) {
        categorizedData.lessThanFour.push(post);
      }
    });

    return categorizedData;
  };

  const renderSelectedData = () => {
    switch (selectedRating) {
      case "Greater than 1000":
        return eightToTen.map((post) => renderPost(post));
      case "Between 700 to 1000":
        return sixToEight.map((post) => renderPost(post));
      case "Between 400 to 700":
        return fourToSix.map((post) => renderPost(post));
      case "Less than 400":
        return lessThanFour.map((post) => renderPost(post));
      default:
        return response.map((post) => renderPost(post));
    }
  };

  const renderPost = (post) => (
    <div key={post.id} className="m-8 border border-cyan-700 p-10 ">
      <h1 className="font-bold text-2xl border border-cyan-500 py-2 pl-5">
        {post.username}
      </h1>
      <div className="flex items-center gap-10">
        <div
          style={{ backgroundImage: `url(${post.link})` }}
          className="my-3 post w-3/4 "
        >
          <img className="h-96" alt="" />
        </div>

        <div className="text-center"></div>

        <div className="text-center">
          <button
            onClick={() => LikeIncrease(post._id)}
            className=" bg-cyan-700 mb-7 font-mono hover:shadow-xl duration-500 text-white rounded py-3 px-9"
          >
            Like
          </button>
          <h2 className="text-xl font-semibold">Likes :- {post.reactions}</h2>
        </div>
      </div>
      <h3 className="text-cyan-950 text-2xl font-semibold mb-3">
        {post.title}
      </h3>
      <p className="text-lg text-cyan-900">
        <span className="font-semibold">Description : </span>
        {post.content}
      </p>
    </div>
  );

  return (
    <div>
      <div className="m-10">
        <div className="m-8 border border-cyan-900 trending p-10">
          <div className="flex justify-between px-4 mx-auto">
            <p className="text-4xl text-cyan-900 font-semibold tracking-widest text-g uppercase">
              Trending
            </p>
            <div className="dropdown">
              <select
                id="rating"
                className="w-40 pl-2 pr-2 text-xl border rounded-sm flex justify-center py-2 focus:outline-none focus:ring focus:border-cyan-700"
                value={selectedRating}
                onChange={handleRatingChange}
              >
                {[
                  "All",
                  "Greater than 1000",
                  "Between 700 to 1000",
                  "Between 400 to 700",
                  "Less than 400",
                ].map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-10 myposts overflow-auto">
            {renderSelectedData()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
