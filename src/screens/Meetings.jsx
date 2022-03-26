import React from "react";
import { useNavigate } from "react-router-dom";

import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import ListingLayout from "../layouts/ListingLayout";

import isEmpty from "../utils/is-empty";

const specificationsData = [
  {
    title: "Pending items review",
    overview:
      "Sprinkler schedule check:8/23 start Site work stake out schedule check:calculation need and schedule. Wall paneling schedule check: 8/20 complete Dock leveler schedule: 8/14 Concrete finish schedule: Main bldg. work schedule:Fredy team 8/25 start Ace flooring: after conc finish and floor sealer?",
    number: "1",
    date: "08/13/2021",
    timeStart: "12:00 PM",
    timeEnd: "12:00 PM EST",
    location: "Site",
    state: "Minutes",
    items: "0",
  },
  {
    title: "Fursys",
    overview:
      "Dock leveler schedule: 8/14 Concrete finish schedule: Main bldg. work schedule:Fredy team 8/25 start Ace flooring: after conc finish and floor sealer?",
    number: "1",
    date: "08/09/2021",
    timeStart: "1pm",
    timeEnd: "EST",
    location: "Site",
    state: "Minutes",
    items: "0",
  },
];

const Specifications = () => {
  const navigate = useNavigate();

  return (
    <ListingLayout rootClassName="meetings" withSettings title="Meetings">
      <div className="d-flex align-items-center justify-content-between">
        <div className="tabs">
          <div className="tab active">Current Meetings</div>
          <div className="tab">All Meetings</div>
          <div className="tab">Recycle Bin</div>
        </div>
        <div>
          <button
            className="me-10 btn btn-primary-outlined"
            onClick={() => navigate("/create-meeting")}
          >
            <img src="./assets/vectors/add.svg" alt="add" />
            CREATE MEETING
          </button>

          <button className="me-10 btn btn-contained-2">
            <img src="./assets/vectors/add.svg" alt="add" />
            CREATE MEETING FROM TEMPLATE
          </button>
        </div>
      </div>

      <div className="card mt-20">
        <div className="card-head d-flex">
          <Input rootClassName="m-0" type="search" placeholder="Search..." />
          <Dropdown
            rootClassName="mx-10"
            btn
            dropdownItems={["Export document"]}
          >
            ALL FILTER
          </Dropdown>
        </div>
        <div className="card-body">
          <div className="table-container">
            <table className="meetings">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>#</th>
                  <th>Meeting Overview</th>
                  <th>Meeting Date</th>
                  <th>Meeting Time</th>
                  <th>Meeting Location</th>
                  <th>State</th>
                  <th># Items</th>
                  <th className="text-center">Attachments</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {isEmpty(specificationsData) ? (
                  <tr className="empty">
                    <td colSpan={5}>No Open Items</td>
                  </tr>
                ) : (
                  <>
                    {specificationsData.map((el, idx) => {
                      const {
                        title,
                        number,
                        overview,
                        date,
                        timeStart,
                        timeEnd,
                        location,
                        state,
                        items,
                      } = el;

                      return (
                        <tr key={"table-item" + idx}>
                          <td className="fw-bold">{title}</td>
                          <td>{number}</td>
                          <td className="lh-15">{overview}</td>
                          <td>{date}</td>
                          <td>
                            {timeStart} - {timeEnd}
                          </td>
                          <td>{location}</td>
                          <td>{state}</td>
                          <td>{items}</td>
                          <td className="text-center">
                            <img
                              className="me-10"
                              src="./assets/vectors/calender.svg"
                              alt="calender"
                            />
                            <img src="./assets/vectors/copy.svg" alt="copy" />
                          </td>
                          <td className="text-center">
                            <img
                              className="me-10 c-pointer"
                              src="./assets/vectors/eye.svg"
                              alt="eye"
                            />
                            <img
                              className="me-10 c-pointer"
                              src="./assets/vectors/edit-table.svg"
                              alt="edit-table"
                            />
                            <img
                              className="c-pointer"
                              src="./assets/vectors/delete-table.svg"
                              alt="delete-table"
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ListingLayout>
  );
};

export default Specifications;
