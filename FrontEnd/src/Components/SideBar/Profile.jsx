import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { MDBIcon } from "mdb-react-ui-kit";

function Profile() {
  const [userData, setUserData] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isSubmit, setSubmit] = useState(false);
  const [updatedUserData, setUpdatedUserData] = useState({
    username: "",
    name: "",
    phone_number: "",
    email: "",
  });
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/HomePage");
  };

  const DeleteAcc = () => {
    console.log("Deleting account...");

    axios
      .delete(`http://localhost:3000//users/${userData._id}`)
      .then((response) => {
        console.log("Account deleted successfully:", response.data);
        Cookies.remove("userData");
        navigate("/HomePage");
      })
      .catch((error) => {
        console.error("Error deleting account:", error);
      });
  };

  useEffect(() => {
    const storedUserData = Cookies.get("userData");
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setUserData(parsedUserData);
    }
  }, []);

  const Edit = (e) => {
    setIsInputDisabled(!isInputDisabled);
    setSubmit(!isSubmit);
    setUpdatedUserData(userData);
  };

  const handleSubmission = async () => {
    const { email, username, name, phone_number } = updatedUserData;

    try {
      const response = await axios.patch(
        `http://localhost:3000/users/${userData._id}`,
        { email, username, name, phone_number }
      );

      const data = response.data;

      setUserData(data);
      Cookies.set("userData", JSON.stringify(data));
      setIsInputDisabled(true);
      setSubmit(!isSubmit);
      alert("Updation Completed Successfully");
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-cyan-700">
        <div className="">
          <div className="h-screen flex justify-center items-center ">
            <div className="block md:flex">
              <div className="w-full grid  items-center md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
                <div className="flex justify-between">
                  <span className="text-4xl m-2 font-semibold block">
                    {userData.username}
                  </span>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="w-40 h-40 mt-[-70px] rounded-full ">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <a href="#!">
                    <MDBIcon fab icon="facebook me-3" size="xl" />
                  </a>
                  <a href="#!">
                    <MDBIcon fab icon="twitter me-3" size="xl" />
                  </a>
                  <a href="#!">
                    <MDBIcon fab icon="instagram me-3" size="xl" />
                  </a>
                </div>
              </div>

              <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
                <div className="rounded  shadow p-6">
                  <div className="flex justify-end">
                  <MDBIcon
                    onClick={Edit}
                    far
                    icon="edit"
                    className="cursor-pointer"
                  />
                  </div>

                  <div className="pb-6">
                    <label className="font-semibold text-gray-700 block pb-1">
                      Name
                    </label>
                    <div className="flex">
                      <input
                        disabled={isInputDisabled}
                        id="name"
                        className="border-1 rounded-r px-4 py-2 w-full"
                        type="text"
                        value={
                          updatedUserData.name !== ""
                            ? updatedUserData.name
                            : userData.name
                        }
                        onChange={(e) =>
                          setUpdatedUserData({
                            ...userData,
                            name: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label className="font-semibold text-gray-700 block pb-1">
                      Phone Number
                    </label>
                    <div className="flex">
                      <input
                        disabled={isInputDisabled}
                        id="phone_number"
                        className="border-1  rounded-r px-4 py-2 w-full"
                        type="text"
                        value={
                          updatedUserData.phone_number !== ""
                            ? updatedUserData.phone_number
                            : userData.phone_number
                        }
                        onChange={(e) =>
                          setUpdatedUserData({
                            ...userData,
                            phone_number: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="pb-4">
                    <label className="font-semibold text-gray-700 block pb-1">
                      Email
                    </label>
                    <input
                      disabled={isInputDisabled}
                      id="email"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="email"
                      value={
                        updatedUserData.email !== ""
                          ? updatedUserData.email
                          : userData.email
                      }
                      onChange={(e) =>
                        setUpdatedUserData({
                          ...userData,
                          email: e.target.value,
                        })
                      }
                    />

                    <span className="text-gray-600 pt-4 block opacity-70">
                      Personal login information of your account
                    </span>
                    <div className="mt-5">
                      {!isSubmit && (
                        <button
                          onClick={() => DeleteAcc()}
                          className="bg-red-600 px-3 py-1 text-white"
                        >
                          Delete Account
                        </button>
                      )}

                      {isSubmit ? (
                        <div className="inline pl-5 text-end pt-3">
                          <button
                            onClick={handleSubmission}
                            className="bg-cyan-800  px-10 py-1 text-white"
                          >
                            Submit
                          </button>
                        </div>
                      ) : (
                        <div className="inline pl-5 text-end pt-3">
                          <button
                            onClick={handleGoBack}
                            className="bg-cyan-800 px-3 py-1 text-white"
                          >
                            Go Back
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
