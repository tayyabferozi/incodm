import React from "react";
import { Link } from "react-router-dom";

import Dropdown from "../components/Dropdown";

const UserInfo = () => {
  return (
    <Dropdown
      dropdownItems={["Settings", "Logout"].map((el, idx) => {
        return (
          <Link to="#0" key={"user-info" + idx}>
            {el}
          </Link>
        );
      })}
    >
      <div className="user-info">
        <div className="img-placeholder">MT</div>
        <div className="fw-bold">Mike Thomson</div>
      </div>
    </Dropdown>
  );
};

export default UserInfo;
