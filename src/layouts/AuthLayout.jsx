import React from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ signup, img, title, subTitle, children }) => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="left">
        <img
          className="circles circle-left"
          src="./assets/vectors/aut-left-circles.svg"
          alt="aut-left-circles"
        />
        <div className="main">
          <h1>
            Connected <br />
            <span className="text-secondary">Construction:</span> Top Technology
            Trends
          </h1>
          <img src={img} alt="vector" />
        </div>
      </div>
      <div className={clsx({ signup }, "right")}>
        <img
          className="circles circle-right"
          src="./assets/vectors/auth-right-circles.svg"
          alt="auth-right-circles"
        />
        <div className="main">
          <button
            className="btn btn-arrow"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src="./assets/vectors/back-arrow.svg" alt="back-arrow" />
          </button>
          <h2>{title}</h2>
          <p className="mt-2">{subTitle}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
