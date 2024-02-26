import React, { useEffect, useState } from "react";
import axios from "axios";


function Users() {
  const [userData, setUserData] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log("Error while fetching the data of Users", err);
      });
  }, []);

  const handleInputChange = (event) => {
    setFilterValue(event.target.value);
  };

  const filteredUsers = userData.filter((user) =>
    user.username.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <div className="m-16 users  overflow-x-auto">
        <div className="flex justify-center my-5">
        <input
            type="text"
            placeholder="Search Here"
            className="border border-cyan-900 duration-500 hover:shadow-lg h-10 w-2/3 pl-6"
            value={filterValue}
            onChange={handleInputChange}
          />        </div>

        <h1 className="text-3xl font-bold mb-6">Users</h1>
        {filteredUsers.map((user, index) => (
          <div key={index} className="m-8 border border-cyan-700 p-10">
            <h2 className="text-xl font-bold border-b border-cyan-500 pb-2">
              {user.username}
            </h2>
            <h1 className="text-2xl font-semibold mt-3">{user.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default Users;
