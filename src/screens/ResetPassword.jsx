import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";

import AuthLayout from "../layouts/AuthLayout";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      img="./assets/vectors/reset-pwd.svg"
      title="Reset Password?"
      subTitle="&nbsp;"
    >
      <div className="form">
        <Input id="password" label="Password" placeholder="*****************" />
        <Input
          id="password2"
          label="Confirm Password"
          placeholder="*****************"
        />
        <div className="bottom">
          <button
            className="btn btn-primary btn-auth"
            onClick={() => navigate("/")}
          >
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
