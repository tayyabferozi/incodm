import React from "react";
import DatePicker from "react-datepicker";
import clsx from "clsx";

import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({ label, noInfo, rootClassName, ...rest }) => {
  return (
    <div className={clsx("custom-form-control", rootClassName)}>
      <label htmlFor="startDate">
        {label}
        {!noInfo && (
          <img
            className="info ms-2"
            src="./assets/vectors/info.svg"
            alt="info"
          />
        )}
      </label>
      <DatePicker
        placeholderText="DD-MM-YY"
        dateFormat="dd-MM-yyyy"
        {...rest}
      />
      <img
        className="calender"
        src="./assets/vectors/calender.svg"
        alt="calender"
      />
    </div>
  );
};

export default InputDate;
