import React from "react";
import clsx from "clsx";

const Checkbox = ({
  rootClassName,
  label,
  subLabel,
  bold,
  small,
  withReorder,
  ...rest
}) => {
  return (
    <label
      className={clsx("custom-checkbox-container", rootClassName, {
        "fw-bold": bold,
        "fs-14": small,
        "with-reorder": withReorder,
      })}
    >
      {label}
      {subLabel && (
        <div className="fs-11 fw-400 text-light-1 mt-1">{subLabel}</div>
      )}
      <input type="checkbox" {...rest} />
      <span className="checkmark"></span>
      {withReorder && (
        <img
          className="reorder"
          src="./assets/vectors/reorder.svg"
          alt="reorder"
        />
      )}
    </label>
  );
};

export default Checkbox;
