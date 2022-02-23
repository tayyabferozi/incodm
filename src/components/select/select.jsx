import React, { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { SelectContext } from "./selectContext";

const Select = ({ id, label, helper, children, defaultValue, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue || "");
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownHandler = () => setShowDropdown(!showDropdown);
  const selectPlaceholder = placeholder || "Choose an option";
  const selectContainerRef = useRef(null);

  const clickOutsideHandler = () => setShowDropdown(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div className="custom-form-control">
        {label && <label htmlFor={id}>{label}</label>}
        <div className="custom-select-container" ref={selectContainerRef}>
          <div
            className={showDropdown ? "selected-text active" : "selected-text"}
            onClick={showDropdownHandler}
          >
            {selectedOption.length > 0 ? selectedOption : selectPlaceholder}
          </div>
          <ul
            className={
              showDropdown
                ? "select-options show-dropdown-options"
                : "select-options hide-dropdown-options"
            }
          >
            {children}
          </ul>
        </div>
        {helper && <div className="helper">{helper}</div>}
      </div>
    </SelectContext.Provider>
  );
};

export default Select;
