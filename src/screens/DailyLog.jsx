import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import ListingLayout from "../layouts/ListingLayout";
import Select from "../components/select/select";
import Option from "../components/select/option";

const DailyLog = () => {
  return (
    <ListingLayout
      withSettings
      rootClassName="daily-log"
      mainClassName="py-20"
      title="Daily Log"
    >
      <div className="top pb-20">
        <div className="tabs">
          <NavLink to="/daily-log" className="tab">
            List
          </NavLink>
          <NavLink to="/daily-log-calender" className="tab">
            Calender
          </NavLink>
        </div>
        <div className="options d-flex">
          <Dropdown btn dropdownItems={["Export document"]}>
            EXPORT
          </Dropdown>

          <button className="ms-10 btn btn-primary-outlined">
            <img className="me-10" src="./assets/vectors/add.svg" alt="add" />
            ADD NEW MEMBERS
          </button>

          <button className="ms-10 btn btn-contained-2">EMAIL</button>
          <button className="ms-10 btn btn-contained-2">COPY</button>
        </div>
      </div>

      <div className="card">
        <div className="card-head d-flex justify-content-between">
          <div className="d-flex">
            <Input rootClassName="m-0" type="search" placeholder="Search..." />
            <Dropdown
              rootClassName="mx-20"
              btn
              dropdownItems={["Export document"]}
            >
              ADD FILTERS
            </Dropdown>
            <button className="btn btn-primary-text">CLEAR ALL</button>
          </div>
          <div>
            <div className="cal-nav">
              <button className="prev">
                <img src="./assets/vectors/select-arrow.svg" alt="arrow" />
              </button>

              <Dropdown
                rootClassName="mx-10"
                btn
                dropdownItems={["Export document"]}
              >
                TUE Feb 8,2022
              </Dropdown>
              <button className="next">
                <img src="./assets/vectors/select-arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="card-left">
            <div className="card-nav">
              {[
                {
                  name: "Manpower",
                  active: true,
                },
                {
                  name: "Notes",
                },
                {
                  name: "Timecards",
                },
                {
                  name: "Equipment",
                },
                {
                  name: "Visitors",
                },
                {
                  name: "Phone Calls",
                },
                {
                  name: "Inspections",
                },
                {
                  name: "Deliveries",
                },
                {
                  name: "Safety Violations",
                },
                {
                  name: "Accidents",
                },
                {
                  name: "Quantities",
                },
                {
                  name: "Dumpster",
                },
                {
                  name: "Waste",
                },
                {
                  name: "Scheduled Work",
                },
                {
                  name: "Photos",
                },
              ].map((el, idx) => {
                const { name, active } = el;

                return (
                  <div
                    key={"body-nav-" + idx}
                    className={clsx("nav-item", { active })}
                  >
                    {name}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="card-right">
            <h4 className="fs-20 mb-20">Manpower</h4>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Workers</th>
                    <th>Hours</th>
                    <th>Total Hours</th>
                    <th>Location</th>
                    <th>Comments</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Select placeholder="Select Company">
                        <Option value="company-1">Company 1</Option>
                        <Option value="company-2">Company 2</Option>
                        <Option value="company-3">Company 3</Option>
                      </Select>
                    </td>
                    <td>
                      <Select placeholder="1">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                      </Select>
                    </td>
                    <td>
                      <Select placeholder="1">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                      </Select>
                    </td>
                    <td>
                      <Select placeholder="1">
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                      </Select>
                    </td>
                    <td>
                      <Select placeholder="Select Location">
                        <Option value="location-1">Location 1</Option>
                        <Option value="location-2">Location 2</Option>
                        <Option value="location-3">Location 3</Option>
                      </Select>
                    </td>
                    <td>
                      <Input placeholder="Add Comments" />
                    </td>
                    <td>
                      <div className="d-flex">
                        <label htmlFor="file" className="d-flex me-20">
                          <img
                            className="clip"
                            src="./assets/vectors/clip.svg"
                            alt="clip"
                          />
                          <div className="text">Attach File(s)</div>
                        </label>
                        <input id="file" className="d-none" type="file" />
                        <button className="ms-20 btn sm btn-primary">
                          CREATE
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ListingLayout>
  );
};

export default DailyLog;
