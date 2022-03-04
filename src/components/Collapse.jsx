import React, { useState } from "react";
import clsx from "clsx";
import $ from "jquery";

const Collapse = ({ icon, title, closed, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = (e) => {
    const $this = $(e.target);

    $this.parents(".collapse").children(".collapse-body").slideToggle();
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className="collapse">
      <div
        className={clsx("collapse-title", { close: isCollapsed })}
        onClick={toggleCollapse}
      >
        <h4 className="fs-20">{title}</h4>
        <img
          className={clsx({ arrow: !icon })}
          src={icon || "./assets/vectors/select-arrow.svg"}
          alt="arrow"
        />
      </div>
      <div
        className="collapse-body"
        style={{ display: closed ? "none" : "block" }}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
