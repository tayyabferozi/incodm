import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import ListingLayout from "../layouts/ListingLayout";
import Input from "../components/Input";
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

const Dashboard = () => {
  const [listingTypeState, setListingTypeState] = useState("list");
  const navigate = useNavigate();

  const changeListingType = (type) => {
    setListingTypeState(type);
  };
  return (
    <ListingLayout withLog rootClassName="portfolio" title="Portfolio">
      <div className="top">
        <div className="tabs">
          <div to="#0" className="tab active">
            Projects
          </div>
          <div to="#0" className="tab">
            Executive Dashboard
          </div>
          <div to="#0" className="tab">
            Health Dashboard
          </div>
          <div to="#0" className="tab">
            My Open Items
          </div>
        </div>
        <div className="options d-flex">
          <Dropdown btn dropdownItems={["Export document"]}>
            EXPORT
          </Dropdown>
          <div className="ms-10 btn btn-primary-outlined">CREATE PROJECT</div>
        </div>
      </div>
      <div className="main">
        <div className="filter">
          <div className="search">
            <Input rootClassName="mb-0 " type="search" placeholder="Search" />
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
                      <tr
                        onClick={() => navigate("/project")}
                        key={"table-item" + idx}
                      >
                        <td>{name}</td>
                        <td>{projectNo}</td>
                        <td>{address}</td>
                        <td>{phone || "-"}</td>
                        <td>
                          <div className="badge success">{status}</div>
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
                    const { num, name, address, status, stage } = el;

                    return (
                      <div key={"grid" + idx} className="col-xxl-4 col-lg-6">
                        <div className="grid-card">
                          <div className="badge success">{status}</div>
                          <img
                            src="./assets/vectors/portfolio-img.svg"
                            alt="img"
                          />
                          <div className="text">
                            <h4>
                              {name}
                              <div className="tag">{num}</div>
                            </h4>
                            <div className="text-light-1 my-10">{address}</div>
                            <div className="text-light-1">{stage}</div>
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
                  <div key={"laptop" + idx} className="laptop-card">
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
                            <div className="right fw-bold">{duration} days</div>
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
                            <div className="label">Overdue(3)</div>
                          </div>
                          <div className="item">
                            <div
                              className="clr"
                              style={{
                                backgroundColor: "#F6BB21",
                              }}
                            ></div>
                            <div className="label">Next 7 Days(0)</div>
                          </div>
                          <div className="item">
                            <div
                              className="clr"
                              style={{
                                backgroundColor: "#346979",
                              }}
                            ></div>
                            <div className="label">&gt; 7 Days(0)</div>
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
    </ListingLayout>
  );
};

export default Dashboard;
