import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function LoginFrom() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState();
  const [sub, setSub] = useState(false);

  const onSubmit = async (data) => {
    setSub(true);
    setData(data);

    // try {
    //   const response = await fetch("http://localhost:3000/posts", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }

    //   const responseData = await response.json();
    //   console.log("Server response:", responseData);
    // } catch (error) {
    //   console.error("Error during POST request:", error.message);
    // }
  };

  return (
    <>
      <div className="w-screen justify-center bg-cyan-700 h-lvh">
        <div className="grid justify-center">
          <h1 className="text-center text-3xl text-white font-medium p-10">
            LOGIN
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
            {/* <div className="">
            <input
              className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
              {...register("Name", {
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
              {errors.Name && (
                <span className="error-message">{errors.Name.message}</span>
              )}
            </p>
          </div> */}

            <div className="form-group">
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

            {/* 
          <div className="form-group">
            <input
              id="phonenumber"
              className="duration-500 hover:border hover:border-cyan-700 hover:shadow-2xl border mt-6 w-96 py-2 pl-4 rounded-sm bg-white text-cyan-900"
              {...register("phonenumber", {
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
              {errors.phonenumber && (
                <span className="error-message">
                  {errors.phonenumber.message}
                </span>
              )}
            </p>
          </div>

          <div className="form-group">
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
 */}
            <div className="form-group">
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

export default LoginFrom;
