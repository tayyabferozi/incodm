import React from "react";
import { useNavigate } from "react-router-dom";

const DailyLog = ({ logMinimal }) => {
  const navigate = useNavigate();

  return (
    <div className="logs-container">
      <div className="main-title">
        <h3>Daily Log</h3>
        <div>
          <button className="btn btn-primary-text fs-12">FILTER</button>
          <button
            className="btn btn-contained-2 fs-12 ms-20"
            onClick={() => navigate("/daily-log")}
          >
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
              <div className="d-flex justify-content-between">
                <div className="me-10">
                  {!logMinimal && <div className="name fw-bold">{name}</div>}
                  <div className="desc fs-12">{desc}</div>
                </div>
                <div className="text-light-1 text-right fs-12">{date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyLog;
