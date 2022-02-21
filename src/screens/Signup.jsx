import React from "react";

import AuthLayout from "../layouts/AuthLayout";
import Select from "../components/select/select";
import Option from "../components/select/option";

const Signup = () => {
  return (
    <AuthLayout
      signup
      img="./assets/img/signin.png"
      title="Sign Up"
      subTitle="Sign up to manage your account"
    >
      <div className="form">
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-6">
              <div className="custom-form-control">
                <label htmlFor="firstName">First Name</label>
                <input type="text" placeholder="Enter Your first name" />
              </div>
            </div>
            <div className="col-6">
              <div className="custom-form-control">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" placeholder="Enter Your last name" />
              </div>
            </div>
          </div>
        </div>
        <div className="custom-form-control">
          <label htmlFor="number">Mobile Number</label>
          <div className="mobile-number-input">
            <Select placeholder="+91">
              <Option value="+91">+91</Option>
              <Option value="+92">+92</Option>
              <Option value="+93">+93</Option>
            </Select>
            <input type="number" placeholder="Mobile number" />
          </div>
        </div>
        <div className="custom-form-control">
          <label htmlFor="email">Work Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-6">
              <div className="custom-form-control">
                <label htmlFor="companyName">Company Name</label>
                <input type="text" placeholder="Enter company name" />
              </div>
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
        <div className="custom-form-control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="***************" />
          <img
            className="pwd-icon"
            src="./assets/vectors/pwd-show.svg"
            alt="show"
          />
        </div>
        <div className="custom-form-control">
          <label htmlFor="password">Confirm Password</label>
          <input id="password" type="password" placeholder="***************" />
          <img
            className="pwd-icon"
            src="./assets/vectors/pwd-show.svg"
            alt="show"
          />
        </div>

        <div className="bottom">
          <button className="btn btn-primary btn-auth">SIGN UP</button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
