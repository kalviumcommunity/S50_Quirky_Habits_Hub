import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import HomePage from "./Components/HomePage";
import SignUpFrom from "./Components/forms/SignUpFrom";
import LoginFrom from "./Components/forms/LoginFrom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Profile from "./Components/SideBar/Profile";
import Posts from "./Components/SideBar/Posts";



function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/login" element={<LoginFrom />} />
        <Route path="/signup" element={<SignUpFrom />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
  );
}

export default App;
