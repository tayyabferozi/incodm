import React from "react";
import clsx from "clsx";
import { useState } from "react";

const Input = ({
  id,
  rootClassName,
  textarea,
  label,
  type,
  errorMsg,
  withInfo,
  ...rest
}) => {
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
    <div
      className={clsx(
        "custom-form-control",
        { error: errorMsg },
        rootClassName
      )}
    >
      {label && (
        <label htmlFor={id}>
          {label}
          {withInfo && (
            <img
              className="ms-2 info"
              src="./assets/vectors/info.svg"
              alt="info"
            />
          )}
        </label>
      )}
      {type === "file" && (
        <>
          <label className="uploader" htmlFor={id}>
            <img src="./assets/vectors/upload.svg" alt="upload" />
            <div className="text">{rest.placeholder}</div>
          </label>
          <div className="helper">
            Image (JPG, PNG, or GIF) must be 200 x 70 pixels. File Max: 3MB
          </div>
        </>
      )}
      {textarea ? (
        <textarea id={id} {...rest}></textarea>
      ) : (
        <input id={id} type={type === "password" ? pwdState : type} {...rest} />
      )}
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
      {type === "search" && (
        <img
          className="search-icon"
          src="./assets/vectors/search.svg"
          alt="search"
        />
      )}
    </div>
  );
};

export default Input;
