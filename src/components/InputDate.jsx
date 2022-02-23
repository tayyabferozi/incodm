import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({ label, ...rest }) => {
  return (
    <div className="custom-form-control">
      <label htmlFor="startDate">
        {label}
        <img className="info ms-2" src="./assets/vectors/info.svg" alt="info" />
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
