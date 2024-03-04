import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function SignUpFrom() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState([]);
  const [sub, setSub] = useState(false);

  const onSubmit = async (data) => {
    setSub(true);

    try {
      const response = await axios.post("http://localhost:3000/users",  data );

      const { user, token } = response.data;
      console.log("Token: ", token);
      console.log("User: ", JSON.stringify(user));
      Cookies.set("userData", JSON.stringify(user));
      Cookies.set("Token", token);
      navigate("/HomePage");
      setData(data);
    } catch (error) {
      console.error("Error during POST request:", error);
    }
  };

  return (
    <>
      <div className="w-screen bg-cyan-700 h-screen">
        <div className="grid justify-center">
          <h1 className="text-center text-3xl text-white font-medium p-10">
            CREATE ACCOUNT
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-center items-center p-10 h-fit bg-white w-fit flex-col  text-white"
          >
            {sub && !Object.keys(errors).length && (
              <h2 className="text-green-600 font-semibold text-lg border py-4 px-24">
                Registration Successfull!
              </h2>
            )}
            <div className="">
              <input
                className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 5,
                    message: "Minimum length is 5 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum length is 20 characters",
                  },
                })}
                placeholder="Enter your Name"
              />
              <p className="text-red-500 text-xs">
                {errors.name && (
                  <span className="error-message">{errors.name.message}</span>
                )}
              </p>
            </div>

            <div className="">
              <input
                className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
                {...register("username", {
                  required: "username is required",
                  minLength: {
                    value: 5,
                    message: "Minimum length is 5 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum length is 20 characters",
                  },
                })}
                placeholder="Enter your username"
              />
              <p className="text-red-500 text-xs ">
                {errors.username && (
                  <span className="error-message">
                    {errors.username.message}
                  </span>
                )}
              </p>
            </div>

            <div className="">
              <input
                id="phonenumber"
                className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
                {...register("phone_number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit phone number.",
                  },
                })}
                placeholder="Enter your Phone Number"
                type="tel"
              />
              <p className="text-red-500 text-xs">
                {errors.phone_number && (
                  <span className="error-message">
                    {errors.phone_number.message}
                  </span>
                )}
              </p>
            </div>

            <div className="">
              <input
                className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
                    message: "Invalid email",
                  },
                })}
                placeholder="Enter your Email"
              />
              <p className="text-red-500 text-xs ">
                {errors.email && (
                  <span className="error-message">{errors.email.message}</span>
                )}
              </p>
            </div>

            <div className="">
              <input
                className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length is 4 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Maximum length is 20 characters",
                  },
                })}
                placeholder="Enter your Password"
                type="password"
              />
              <p className="text-red-500 text-xs">
                {errors.password && (
                  <span className="error-message">
                    {errors.password.message}
                  </span>
                )}
              </p>
            </div>

            <button
              type="submit"
              className="bg-cyan-700 duration-500 mt-10 px-10 py-2 hover:bg-cyan-900 text-white p-10-15 border-none border-radius-4px cursor-pointer text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpFrom;
