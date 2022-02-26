import React, { useState } from "react";
import clsx from "clsx";

import Footer from "../components/Footer";
import Input from "../components/Input";
import Select from "../components/select/select";
import Option from "../components/select/option";
import UserInfo from "../components/UserInfo";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const portfolioData = [
  {
    duration: 924,
    num: 10,
    name: "Art Hall",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "990 470 3101",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
  {
    duration: 924,
    num: 10,
    name: "Refined Homes",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
  {
    duration: 924,
    num: 10,
    name: "Essential Homes",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "990 470 3101",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
  {
    duration: 924,
    num: 10,
    name: "Premium Contra...",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "990 470 3101",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
  {
    duration: 924,
    num: 10,
    name: "Art Quality Mate...",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "990 470 3101",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
  {
    duration: 924,
    num: 10,
    name: "Savvy Homes",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "990 470 3101",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
  {
    duration: 924,
    num: 10,
    name: "Builder Rhino",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "990 470 3101",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
  {
    duration: 924,
    num: 10,
    name: "Savvy Homes",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "990 470 3101",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
  {
    duration: 924,
    num: 10,
    name: "Art Quality Mate...",
    projectNo: 111,
    address: "8502 Preston Rd. Inglewood, Maine 98380",
    phone: "990 470 3101",
    status: "Active",
    stage: "Pre-Construction",
    type: "Institutional",
    note: "",
  },
];

const ListingLayout = () => {
  const [listingTypeState, setListingTypeState] = useState("list");
  const [sideNavOpenState, setSideNavOpenState] = useState(false);

  const changeListingType = (type) => {
    setListingTypeState(type);
  };

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
            <img src="./assets/vectors/logo.svg" alt="logo" />
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
        <div className="right portfolio">
          <div className="head">
            <h3>
              <img
                className="menu me-3 hamburger"
                onClick={toggleSideNav}
                src="./assets/vectors/hamburger.svg"
                alt="hamburger"
              />
              Portfolio
            </h3>
            <div className="nav">
              <button className="btn btn-contained">
                CREATE CUSTOM REPORTS
              </button>
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
                <div className="col-md-8">
                  <div className="body-left">
                    <div className="top">
                      <div className="links">
                        <Link to="#0" className="link active">
                          Projects
                        </Link>
                        <Link to="#0" className="link">
                          Executive Dashboard
                        </Link>
                        <Link to="#0" className="link">
                          Health Dashboard
                        </Link>
                        <Link to="#0" className="link">
                          My Open Items
                        </Link>
                      </div>
                      <div className="options d-flex">
                        <Dropdown btn dropdownItems={["Export document"]}>
                          EXPORT
                        </Dropdown>
                        <div className="ms-10 btn btn-primary-outlined">
                          CREATE PROJECT
                        </div>
                      </div>
                    </div>
                    <div className="main">
                      <div className="filter">
                        <div className="search">
                          <Input
                            rootClassName="mb-0 "
                            type="search"
                            placeholder="Search"
                          />
                          <Dropdown btn dropdownItems={["filter 1"]}>
                            ADD FILTERS
                          </Dropdown>
                          <div className="btn btn-primary-text ">CLEAR ALL</div>
                        </div>
                        <div className="more-filters">
                          {[
                            {
                              type: "list",
                              icon: "./assets/vectors/list-check.svg",
                            },
                            {
                              type: "grid",
                              icon: "./assets/vectors/grid.svg",
                            },
                            {
                              type: "laptop",
                              icon: "./assets/vectors/laptop.svg",
                            },
                            {
                              type: "location-pin",
                              icon: "./assets/vectors/location-pin.svg",
                            },
                          ].map((el, idx) => {
                            const { type, icon } = el;

                            return (
                              <img
                                key={"opt" + idx}
                                className={clsx({
                                  active: type === listingTypeState,
                                })}
                                onClick={() => {
                                  changeListingType(type);
                                }}
                                src={icon}
                                alt={type}
                              />
                            );
                          })}
                        </div>
                      </div>
                      <div className="listing mt-20">
                        {listingTypeState === "list" && (
                          <div className="table-container">
                            <table>
                              <thead>
                                <tr>
                                  <th>Name</th>
                                  <th>Project No.</th>
                                  <th>Address</th>
                                  <th>Phone</th>
                                  <th>Status</th>
                                  <th>Stage</th>
                                  <th>Type</th>
                                  <th>Note</th>
                                </tr>
                              </thead>
                              <tbody>
                                {portfolioData.map((el, idx) => {
                                  const {
                                    name,
                                    projectNo,
                                    address,
                                    phone,
                                    status,
                                    stage,
                                    type,
                                    note,
                                  } = el;

                                  return (
                                    <tr key={"table-item" + idx}>
                                      <td>{name}</td>
                                      <td>{projectNo}</td>
                                      <td>{address}</td>
                                      <td>{phone || "-"}</td>
                                      <td>
                                        <div className="badge success">
                                          {status}
                                        </div>
                                      </td>
                                      <td>{stage}</td>
                                      <td>{type}</td>
                                      <td>{note || "-"}</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {listingTypeState === "grid" && (
                          <div className="grid">
                            <div className="container-fluid px-0">
                              '
                              <div className="row g-3">
                                {portfolioData.map((el, idx) => {
                                  const { num, name, address, status, stage } =
                                    el;

                                  return (
                                    <div
                                      key={"grid" + idx}
                                      className="col-xxl-4 col-lg-6"
                                    >
                                      <div className="grid-card">
                                        <div className="badge success">
                                          {status}
                                        </div>
                                        <img
                                          src="./assets/vectors/portfolio-img.svg"
                                          alt="img"
                                        />
                                        <div className="text">
                                          <h4>
                                            {name}
                                            <div className="tag">{num}</div>
                                          </h4>
                                          <div className="text-light-1 my-10">
                                            {address}
                                          </div>
                                          <div className="text-light-1">
                                            {stage}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}

                        {listingTypeState === "laptop" && (
                          <div className="laptop">
                            {portfolioData.map((el, idx) => {
                              const { duration, name, type, stage } = el;

                              return (
                                <div
                                  key={"laptop" + idx}
                                  className="laptop-card"
                                >
                                  <h4>{name}</h4>
                                  <div className="body">
                                    <div className="details">
                                      <img
                                        className="me-3"
                                        src="./assets/vectors/portfolio-img.svg"
                                        alt="portfolio-img"
                                      />
                                      <div className="text">
                                        <div>
                                          <div className="left">Duracion:</div>
                                          <div className="right fw-bold">
                                            {duration} days
                                          </div>
                                        </div>
                                        <div>
                                          <div className="left">Stage:</div>
                                          <div className="fw-bold">{stage}</div>
                                        </div>
                                        <div>
                                          <div className="left">Type:</div>
                                          <div className="fw-bold">{type}</div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="stats">
                                      <div className="progress">
                                        <div className="progress-bar"></div>
                                      </div>

                                      <div className="legend">
                                        <div className="item">
                                          <div
                                            className="clr"
                                            style={{
                                              backgroundColor: "#F84949",
                                            }}
                                          ></div>
                                          <div className="label">
                                            Overdue(3)
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div
                                            className="clr"
                                            style={{
                                              backgroundColor: "#F6BB21",
                                            }}
                                          ></div>
                                          <div className="label">
                                            Next 7 Days(0)
                                          </div>
                                        </div>
                                        <div className="item">
                                          <div
                                            className="clr"
                                            style={{
                                              backgroundColor: "#346979",
                                            }}
                                          ></div>
                                          <div className="label">
                                            &gt; 7 Days(0)
                                          </div>
                                        </div>
                                        <button className="btn btn-primary-outlined">
                                          SCHEDULE 03
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="body-right">
                    <div className="main-title">
                      <h3>Daily Log</h3>
                      <div>
                        <button className="btn btn-primary-text fs-12">
                          FILTER
                        </button>
                        <button className="btn btn-contained-2 fs-12 ms-20">
                          VIEW ALL
                        </button>
                      </div>
                    </div>

                    <div className="log-items">
                      {[
                        {
                          name: "Art Hall",
                          date: "Dec 7, 2019 23:26",
                          desc: "Recommendation Item Varients selected",
                        },
                        {
                          name: "Essential Homes",
                          date: "Dec 7, 2019 23:26",
                          desc: "Recommendation Item Varients selected",
                        },
                        {
                          name: "Savvy Homes",
                          date: "Mar 20, 2019 23:14",
                          desc: "Recommendation sent via email",
                        },
                        {
                          name: "Refined Homes",
                          date: "Feb 2, 2019 19:28",
                          desc: "Recommendation Previewed",
                        },
                        {
                          name: "Builder Rhino",
                          date: "Dec 30, 2019 07:52",
                          desc: "Recommendation Template compiled",
                        },
                        {
                          name: "Savvy Homes",
                          date: "Dec 4, 2019 21:42",
                          desc: "Recommendation assigned by Joe",
                        },
                        {
                          name: "Art Hall",
                          date: "Dec 4, 2019 21:42",
                          desc: "Recommendation sent via Phone Number",
                        },
                        {
                          name: "Builder Rhino",
                          date: "Dec 30, 2019 05:18",
                          desc: "Recommendation update received",
                        },
                        {
                          name: "Savvy Homes",
                          date: "Dec 30, 2019 05:18",
                          desc: "Recommendation Item Varients selected",
                        },
                      ].map((el, idx) => {
                        const { name, date, desc } = el;

                        return (
                          <div key={"log-item" + idx} className="log-item">
                            <div className="title">
                              <div className="name fw-bold">{name}</div>
                              <div className="text-light-1 fs-12">{date}</div>
                            </div>
                            <div className="desc fs-12">{desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
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
