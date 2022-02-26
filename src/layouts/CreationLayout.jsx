import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import UserInfo from "../components/UserInfo";

const CreationLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="project-creation-container">
        <div className="header">
          <Link to="/">
            <img src="./assets/vectors/logo.svg" alt="logo" />
          </Link>
          <UserInfo />
        </div>
        <div className="title-container">
          <h2>Create Project</h2>
          <button
            onClick={() => navigate("/dashboard")}
            className="btn btn-primary-outlined"
          >
            SKIP &amp; SAVE
          </button>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default CreationLayout;
