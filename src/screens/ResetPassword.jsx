import React from "react";
import { useNavigate } from "react-router-dom";

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
        <div className="custom-form-control">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="*****************" />
        </div>
        <div className="custom-form-control">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" placeholder="*****************" />
        </div>
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
