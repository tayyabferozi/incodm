import React, { useState } from "react";
import clsx from "clsx";

import Footer from "../components/Footer";
import Select from "../components/select/select";
import Option from "../components/select/option";
import UserInfo from "../components/UserInfo";
import DailyLog from "../components/DailyLog";
import { Link } from "react-router-dom";

const ListingLayout = ({
  withLog,
  withCreateBtn,
  logMinimal,
  withSettings,
  title,
  subTitle,
  rootClassName,
  mainClassName,
  children,
}) => {
  const [sideNavOpenState, setSideNavOpenState] = useState(false);

  const toggleSideNav = () => setSideNavOpenState((prevState) => !prevState);

  return (
    <>
      <div
        onClick={toggleSideNav}
        className={clsx("dark-overlay", { open: sideNavOpenState })}
      ></div>
      <div className="listing-container">
        <div className={clsx("left", { open: sideNavOpenState })}>
          <div className="header">
            <Link to="/dashboard">
              <img src="./assets/vectors/logo.svg" alt="logo" />
            </Link>
          </div>
          <div className="body">
            <div className="input-card">
              <Select noBorder label="INCODM" placeholder="Select a Project">
                <Option value="project-1">Project 1</Option>
                <Option value="project-2">Project 2</Option>
              </Select>
            </div>
            <div className="input-card">
              <Select
                noBorder
                bold
                label="Company Tools"
                placeholder="Portfolio"
              >
                <Option value="portofolio">Portfolio</Option>
              </Select>
            </div>
          </div>
          <div className="foot">
            <button className="btn btn-transparent">
              <img src="./assets/vectors/favourite.svg" alt="fav" />
              FAVORITES
            </button>
          </div>
        </div>
        <div className={clsx("right", rootClassName)}>
          <div className="head">
            <div className="d-flex align-items-center">
              <img
                className="menu me-10 hamburger"
                onClick={toggleSideNav}
                src="./assets/vectors/hamburger.svg"
                alt="hamburger"
              />
              {withSettings && (
                <button className="settings-btn">
                  <img src="./assets/vectors/settings.svg" alt="settings" />
                </button>
              )}
              <div>
                <h3>{title}</h3>
                <p className="fs-14 fs-1550-10 mt-1">{subTitle}</p>
              </div>
            </div>
            <div className="nav">
              {withCreateBtn && (
                <button className="btn btn-contained">
                  CREATE CUSTOM REPORTS
                </button>
              )}
              <div className="input-card">
                <Select noBorder label="Apps" placeholder="Select an App">
                  <Option value="app-1">App 1</Option>
                </Select>
              </div>
              <div className="options">
                <img src="./assets/vectors/search.svg" alt="search" />
                <img src="./assets/vectors/help.svg" alt="help" />
                <img
                  src="./assets/vectors/notifications.svg"
                  alt="notifications"
                />
              </div>
              <UserInfo />
            </div>
          </div>
          <div className="body">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div
                  className={clsx(withLog && "col-md-8", !withLog && "col-12")}
                >
                  <div className={clsx("body-main", mainClassName)}>
                    {children}
                  </div>
                </div>
                {withLog && (
                  <div className="col-md-4">
                    <DailyLog logMinimal={logMinimal} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer className="mt-0" />
        </div>
      </div>
    </>
  );
};

export default ListingLayout;
