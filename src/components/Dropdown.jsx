import React from "react";

const Dropdown = ({ children, dropdownItems }) => {
  return (
    <div className="dropdown">
      <img
        className="arrow"
        src="./assets/vectors/select-arrow.svg"
        alt="arrow"
      />
      {children}
      <div className="dropdown-items">
        <ul className="dropdown-items-main">
          {dropdownItems.map((el, idx) => {
            return <li key={"dropdown-item" + Math.random() + idx}>{el}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
