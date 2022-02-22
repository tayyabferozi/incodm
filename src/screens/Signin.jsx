import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Loader from "../components/Loader";

import AuthLayout from "../layouts/AuthLayout";

const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <AuthLayout
      img="./assets/img/signin.png"
      title="Sign In"
      subTitle="Sign in to manage your account"
    >
      <form onSubmit={formSubmitHandler} className="form">
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="Enter Your Email"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="***************"
        />
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
            <button className="btn btn-primary btn-auth">
              {isLoading ? <Loader /> : "SIGN IN"}
            </button>
            <div>
              Already have an account ?<Link to="/signup"> Sign Up</Link>
            </div>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signin;
