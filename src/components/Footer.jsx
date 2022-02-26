import React from "react";
import clsx from "clsx";

const Footer = ({ className }) => {
  return (
    <div className={clsx("footer", className)}>
      © 2021 Incodm Technologies, Inc
    </div>
  );
};

export default Footer;
