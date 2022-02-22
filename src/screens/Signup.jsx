import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import Select from "../components/select/select";
import Option from "../components/select/option";
import Loader from "../components/Loader";
import Input from "../components/Input";
import countryCodes from "../constants/country-codes";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      navigate("/verification");
    }, 1000);
  };

  return (
    <AuthLayout
      signup
      img="./assets/img/signin.png"
      title="Sign Up"
      subTitle="Sign up to manage your account"
    >
      <form onSubmit={formSubmitHandler} className="form">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-6">
              <Input
                id="firstName"
                label="First Name"
                placeholder="Enter Your first name"
              />
            </div>
            <div className="col-6">
              <Input
                id="lastName"
                label="Last Name"
                placeholder="Enter Your last name"
              />
            </div>
          </div>
        </div>

        <div className="custom-form-control">
          <label htmlFor="number">Mobile Number</label>
          <div className="mobile-number-input">
            <Select placeholder="+91">
              {countryCodes.map((el) => {
                return (
                  <Option key={el.dial_code} value={el.dial_code}>
                    {el.dial_code}
                  </Option>
                );
              })}
            </Select>
            <Input id="number" placeholder="Mobile number" />
          </div>
        </div>
        <Input
          id="email"
          label="Work Email"
          type="email"
          placeholder="Enter Email"
          errorMsg="Please enter a valid email address"
        />
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-6">
              <Input
                id="companyName"
                label="Company Name"
                placeholder="Enter company name"
              />
            </div>
            <div className="col-6">
              <div className="custom-form-control">
                <label htmlFor="lastName">Company Type</label>
                <Select placeholder="Choose an option">
                  <Option value="small">small</Option>
                  <Option value="large">large</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="***************"
        />
        <Input
          id="password2"
          label="Confirm Password"
          type="password"
          placeholder="***************"
        />

        <div className="bottom">
          <button className="btn btn-primary btn-auth">
            {isLoading ? <Loader /> : "SIGN UP"}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default Signup;
