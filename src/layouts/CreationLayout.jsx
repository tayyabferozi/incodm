import React from "react";
import Footer from "../components/Footer";

const CreationLayout = ({ children }) => {
  return (
    <>
      <div className="project-creation-container">
        <div className="header">
          <img src="./assets/vectors/logo.svg" alt="logo" />
          <div className="user-info">
            <div className="img-placeholder">MT</div>
            <div className="fw-bold">Mike Thomson</div>
          </div>
        </div>
        <div className="title-container">
          <h2>Create Project</h2>
          <button className="btn btn-primary-outlined">SKIP &amp; SAVE</button>
        </div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default CreationLayout;
