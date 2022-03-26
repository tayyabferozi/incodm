import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

import Collapse from "../components/Collapse";
import ListingLayout from "../layouts/ListingLayout";

const DailyLogCalender = () => {
  return (
    <ListingLayout
      withSettings
      rootClassName="daily-log-calender"
      title="Daily Log"
    >
      <div className="top b-0 pb-20 d-flex align-items-center flex-row">
        <div className="tabs">
          <NavLink to="/daily-log" className="tab">
            List
          </NavLink>
          <NavLink to="/daily-log-calender" className="tab">
            Calender
          </NavLink>
        </div>
      </div>

      <div className="calender-container">
        <div className="calender-left">
          <CalendarComponent></CalendarComponent>
        </div>
        <div className="calender-right">
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="fs-20">2 Approved Entries</h4>
              <div className="mt-1">Thursday, 10th 2022</div>
            </div>
            <div>
              <button className="btn btn-primary-outlined">COMPLETE DAY</button>
            </div>
          </div>
          <div className="entries mt-20">
            {[
              {
                name: "MANPOWER",
              },
              {
                name: "NOTES",
              },
            ].map((el, idx) => {
              return (
                <div key={"entry" + idx} className="entry">
                  <Collapse closed title={el.name}>
                    Lorem
                  </Collapse>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ListingLayout>
  );
};

export default DailyLogCalender;
