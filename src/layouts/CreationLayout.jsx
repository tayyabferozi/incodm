import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";

import Footer from "../components/Footer";

const CreationLayout = ({ children }) => {
  return (
    <>
      <div className="project-creation-container">
        <div className="header">
          <Link to="/">
            <img src="./assets/vectors/logo.svg" alt="logo" />
          </Link>
          <Dropdown
            dropdownItems={["Settings", "Logout"].map((el, idx) => {
              return (
                <Link to="#0" key={"user-info" + idx}>
                  {el}
                </Link>
              );
            })}
          >
            <div className="user-info">
              <div className="img-placeholder">MT</div>
              <div className="fw-bold">Mike Thomson</div>
            </div>
          </Dropdown>
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
