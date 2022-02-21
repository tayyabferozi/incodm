import React from "react";
import { Link } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";

const Signin = () => {
  return (
    <AuthLayout
      img="./assets/img/signin.png"
      title="Sign In"
      subTitle="Sign in to manage your account"
    >
      <div className="form">
        <div className="custom-form-control">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="custom-form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="***************" />
          <img
            className="pwd-icon"
            src="./assets/vectors/pwd-show.svg"
            alt="show"
          />
        </div>
        <div className="d-flex justify-content-between">
          <label className="custom-checkbox-container">
            Remember Me
            <input type="checkbox" />
            <span className="checkmark"></span>
          </label>
          <Link className="unstyled" to="/forgot-password">
            Forgot Password ?
          </Link>
        </div>
        <div className="bottom">
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-primary btn-auth">SIGN IN</button>
            <div>
              Already have an account ?<Link to="/signup"> Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signin;
