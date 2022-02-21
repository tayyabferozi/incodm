import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const Signin = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      img="./assets/img/signin.png"
      title="Verification Code"
      subTitle="We have to sent the code for verification"
    >
      <div className="form">
        <div className="custom-form-control">
          <label htmlFor="email">Verification Code</label>
          <div className="verification-inputs">
            <input type="number" value={1} />
            <input type="number" value={2} />
            <input type="number" value={5} />
            <input type="number" value={1} />
          </div>
        </div>
        <div>
          Don’t get OTP <a href="#0">Resend</a>
        </div>
        <div className="mt-3">
          <button
            className="mt-4 btn btn-primary btn-auth"
            onClick={() => {
              navigate("/reset-password");
            }}
          >
            SIGN IN
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signin;
