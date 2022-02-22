import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

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
        <Input id="email" label="Email" placeholder="Enter Your Email" />
        <div className="bottom">
          <button
            className="btn btn-primary btn-auth"
            onClick={() => navigate("/reset-password")}
          >
            SEND
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
