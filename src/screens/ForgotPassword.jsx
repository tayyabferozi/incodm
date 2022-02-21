import React from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      img="./assets/vectors/forgot-pwd.svg"
      title="Forgot Password?"
      subTitle="Enter your registered email will send you link for reset password"
    >
      <div className="form">
        <div className="custom-form-control">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="bottom">
          <button
            className="btn btn-primary btn-auth"
            onClick={() => navigate("/verification")}
          >
            SEND
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
