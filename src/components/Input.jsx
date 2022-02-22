import React from "react";
import clsx from "clsx";
import { useState } from "react";

const Input = ({ id, label, type, errorMsg, ...rest }) => {
  const [pwdState, setPwdState] = useState("password");

  const togglePwdState = () => {
    setPwdState((prevState) => {
      if (prevState === "password") {
        return "text";
      } else {
        return "password";
      }
    });
  };

  return (
    <div className={clsx("custom-form-control", { error: errorMsg })}>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type === "password" ? pwdState : type} {...rest} />
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {type === "password" && (
        <img
          className="pwd-icon"
          src={
            pwdState === "password"
              ? "./assets/vectors/pwd-show.svg"
              : "./assets/vectors/pwd-hide.svg"
          }
          alt="show"
          onClick={togglePwdState}
        />
      )}
    </div>
  );
};

export default Input;
