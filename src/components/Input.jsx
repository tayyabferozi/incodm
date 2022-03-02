import React from "react";
import clsx from "clsx";
import { useState } from "react";

const Input = ({
  id,
  imp,
  dull,
  helperClassName,
  labelClassName,
  rootClassName,
  textarea,
  label,
  type,
  errorMsg,
  withInfo,
  icon,
  noHelper,
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
        { dull },
        rootClassName
      )}
    >
      {label && (
        <label htmlFor={id}>
          {label}
          {imp && <span className="text-danger">*</span>}
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
            <img src={icon || "./assets/vectors/upload.svg"} alt="upload" />
            <div className={clsx("text", labelClassName)}>
              {rest.placeholder}
            </div>
          </label>
          {!noHelper && (
            <div className={clsx("helper", helperClassName)}>
              Image (JPG, PNG, or GIF) must be 200 x 70 pixels. File Max: 3MB
            </div>
          )}
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
