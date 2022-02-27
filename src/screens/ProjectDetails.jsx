import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import ListingLayout from "../layouts/ListingLayout";
import Collapse from "../components/Collapse";

import isEmpty from "../utils/is-empty";

const teamData = [
  {
    role: "Architect",
    name: "Hoojoon Chung (JR Architecture and Design. LLC)",
    email: "hcas2012@gmail.com",
    office: "",
    mobile: "(732) 586-2563",
  },
  {
    role: "Project Manager",
    name: "Daniel Yi (JD PHOENIX INC)",
    email: "daniely@incodm.com",
    office: "",
    mobile: "(646) 773-7680",
  },
  {
    role: "CEO",
    name: "Hyunseung Lee (JD PHOENIX INC)",
    email: "8jdphoenixinc@gmail.com",
    office: "",
    mobile: "(917) 565-0940",
  },
  {
    role: "Senior Director",
    name: "jimmy Jung (JD PHOENIX INC)",
    email: "jimmy.jdphoenixinc@gmail.com",
    office: "(201) 496-6470",
    mobile: "(201) 961-5811",
  },
  {
    role: "Project codinator",
    name: "Jeewon Kang (JD PHOENIX INC)",
    email: "jeewon.jd@gmail.com",
    office: "",
    mobile: "(201) 888-1901",
  },
  {
    role: "Senior Designer",
    name: "Jieun Yun (JD PHOENIX INC)",
    email: "jieuny@incodm.com",
    office: "(480) 555-0103",
    mobile: "",
  },
];

const scheduleData = [
  {
    num: "",
    name: "Main Water Extension",
    resource: "Lee, Jonathan (JD PHOENIX INC)",
    start: "02/07/22",
    finish: "02/18/22",
    percent: "0.0",
  },
  {
    num: "",
    name: "Main Water Extension",
    resource: "Lee, Jonathan (JD PHOENIX INC)",
    start: "02/07/22",
    finish: "02/18/22",
    percent: "0.0",
  },
];

ChartJS.register(ArcElement, Tooltip);

const chartOptions = {
  legen: { display: false },
};

const chartData = {
  labels: ["Overdue(05)", "Next 7 Days (01)", "> 7 Days (02)"],
  datasets: [
    {
      label: "# of Votes",
      data: [5, 1, 2],
      backgroundColor: ["#F84949", "#F6BB21", "#346979"],
      borderColor: [
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 1)",
        "rgba(255, 255, 255, 1)",
      ],
      borderWidth: 4,
    },
  ],
};

const ProjectDetails = () => {
  return (
    <ListingLayout
      withSettings
      rootClassName="project"
      title="Refined Homes"
      subTitle="3517 W. Gray St. Utica, Pennsylvania 57867"
    >
      <div className="section">
        <div className="section-title mb-10">
          <h4>PROJECT TEAM</h4>
          <button className="btn btn-primary-outlined">
            <img className="me-10" src="./assets/vectors/add.svg" alt="add" />
            ADD NEW MEMBERS
          </button>
        </div>

        <div className="table-container">
          <table className="team">
            <thead>
              <tr>
                <th>Role</th>
                <th>Name</th>
                <th>Email</th>
                <th>Office</th>
                <th>Mobile</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((el, idx) => {
                const { role, name, email, office, mobile } = el;

                return (
                  <tr key={"table-item" + idx}>
                    <td>{role}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{office || "-"}</td>
                    <td>{mobile || "-"}</td>
                    <td>
                      <img
                        className="me-10"
                        src="./assets/vectors/edit-table.svg"
                        alt="edit"
                      />
                      <img
                        className="ms-10"
                        src="./assets/vectors/delete-table.svg"
                        alt="delete"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section">
        <div className="section-title mb-20">
          <h4>PROJECT OVERVIEW</h4>
        </div>

        <div className="cards">
          <div className="container-fluid px-0">
            <div className="row">
              {[
                {
                  title: "Schedule (91)",
                },
                {
                  title: "RFIs (01)",
                },
                {
                  title: "Punch List (05)",
                },
              ].map((el, idx) => {
                const { title } = el;

                return (
                  <div key={"project-card" + idx} className="col-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <h4>{title}</h4>
                          <button className="btn btn-primary-text">
                            VIEW ALL
                          </button>
                        </div>
                        <div className="chart-container">
                          <Doughnut options={chartOptions} data={chartData} />
                        </div>
                        <Legend
                          overdue="05"
                          nextSeven="01"
                          greaterThanSeven="02"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title mb-20">
          <h4>MY OPEN ITEMS</h4>
        </div>

        <div className="table-container">
          <table className="open-items">
            <thead>
              <tr>
                <th>Item Type</th>
                <th>Details</th>
                <th>Status</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {isEmpty([]) ? (
                <tr className="empty">
                  <td colSpan={5}>No Open Items</td>
                </tr>
              ) : (
                <>
                  {[].map((el, idx) => {
                    const { type, details, status, dueDate } = el;

                    return (
                      <tr key={"table-item" + idx}>
                        <td>{type}</td>
                        <td>{details}</td>
                        <td>{status}</td>
                        <td>{dueDate}</td>
                      </tr>
                    );
                  })}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="section bx">
        <Collapse title="RECENTLY CHANGED ITEMS"></Collapse>
      </div>

      <div className="section">
        <Collapse title="TODAY'S SCHEDULE">
          <div className="table-container">
            <table className="schedule">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-center">#</th>
                  <th>Name</th>
                  <th>Resource</th>
                  <th>Start</th>
                  <th>Finish</th>
                  <th>%</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((el, idx) => {
                  const { num, name, resource, start, finish, percent } = el;

                  return (
                    <tr key={"table-item" + idx}>
                      <td>
                        <img
                          src="./assets/vectors/calender.svg"
                          alt="calender"
                        />
                      </td>
                      <td className="text-center">{num || "-"}</td>
                      <td>{name}</td>
                      <td>{resource}</td>
                      <td>{start}</td>
                      <td>{finish}</td>
                      <td>{percent}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Collapse>
      </div>

      <div className="section bx">
        <Collapse title="PROJECT MILESTONES"></Collapse>
      </div>
    </ListingLayout>
  );
};

const Legend = ({ overdue, nextSeven, greaterThanSeven }) => {
  return (
    <div className="do-legend">
      <div className="overdue">
        <div className="clr"></div>
        <div className="text">Overdue {overdue && <>({overdue})</>}</div>
      </div>
      <div className="nextSeven">
        <div className="clr"></div>
        <div className="text">
          Next 7 Days {nextSeven && <>({nextSeven})</>}
        </div>
      </div>
      <div className="greaterThanSeven">
        <div className="clr"></div>
        <div className="text">
          &gt; 7 Days {greaterThanSeven && <>({greaterThanSeven})</>}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
