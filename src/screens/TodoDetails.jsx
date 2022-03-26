import React from "react";
import { Link } from "react-router-dom";

import GridContainer from "../components/GridContainer";
import ListingLayout from "../layouts/ListingLayout";

const TodoDetails = () => {
  return (
    <ListingLayout
      rootClassName="todo-details"
      withSettings
      title="Interior Modeling Phase 2"
    >
      <div className="breadcrumb mb-20">
        <Link to="/todo" className="breadcrumb-item">
          To Do
        </Link>
        <div className="breadcrumb-item">Interior Modelling Phase 2</div>
      </div>
      <GridContainer>
        <div className="col-lg-7 col-xxlg-8">
          <div className="card">
            <div className="card-head bg-grey d-flex justify-content-between bb-0">
              <h3 className="fs-28">General Information</h3>
              <div className="d-flex align-items-center">
                <img
                  className="me-10 c-pointer"
                  src="./assets/vectors/edit-table.svg"
                  alt="edit"
                />
                <img
                  className="ms-10 c-pointer"
                  src="./assets/vectors/delete-table.svg"
                  alt="delete"
                />
              </div>
            </div>

            <div className="card-body">
              <h4>Interior Modeling Phase 2</h4>
              <div className="text-light-1 fw-600 mt-10">
                1. 1st Fl Reception Area 2. Cafeteria 3. 2nd Fl Reception Area
                4. Office &amp; Lab
              </div>

              <GridContainer rootClassName="mt-30 details ms-0">
                <div className="col-lg-4">
                  <div className="fs-14 fw-400 text-light-1">Action By:</div>
                  <div className="mt-2 fw-600">Ahmad Workman</div>
                </div>
                <div className="col-lg-4">
                  <div className="fs-14 fw-400 text-light-1">Created By:</div>
                  <div className="mt-2 fw-600">Hana Lee</div>
                </div>
                <div className="col-lg-4">
                  <div className="fs-14 fw-400 text-light-1">Created At:</div>
                  <div className="mt-2 fw-600">10/06/21</div>
                </div>
                <div className="col-lg-4">
                  <div className="fs-14 fw-400 text-light-1">Due Date:</div>
                  <div className="mt-2 fw-600">10/06/21</div>
                </div>
                <div className="col-lg-4">
                  <div className="fs-14 fw-400 text-light-1">Status:</div>
                  <div className="mt-2 fw-600">Ready For Review</div>
                </div>
              </GridContainer>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xxlg-4">
          <div className="card">
            <div className="card-head bg-grey bb-0">
              <h4 className="fs-20 py-1">Change History</h4>
            </div>
            <div className="card-body pt-0">
              {[
                {
                  date: "Tue Mar 22, 2022 at 12:36 am EDT",
                  by: "Abram Baptista",
                  changed: "Ready For Review At",
                  from: "None",
                  to: "03/22/22 at 12:36 am",
                },
                {
                  date: "Tue Mar 22, 2022 at 12:36 am EDT",
                  by: "Abram Baptista",
                  changed: "Ready For Review At",
                  from: "None",
                  to: "03/22/22 at 12:36 am",
                },
                {
                  date: "Tue Mar 22, 2022 at 12:36 am EDT",
                  by: "Abram Baptista",
                  changed: "Ready For Review At",
                  from: "None",
                  to: "03/22/22 at 12:36 am",
                },
                {
                  date: "Tue Mar 22, 2022 at 12:36 am EDT",
                  by: "Abram Baptista",
                  changed: "Ready For Review At",
                  from: "None",
                  to: "03/22/22 at 12:36 am",
                },
              ].map((el, idx) => {
                const { date, by, changed, from, to } = el;

                return (
                  <div
                    className="history-item py-20"
                    key={"history-element" + idx}
                  >
                    <h4>{date}</h4>
                    <GridContainer rootClassName="mt-20" rowClassName="gy-2">
                      <div className="col-lg-6">
                        <div className="fs-14 fw-400 text-light-1">
                          Action By:
                        </div>
                        <div className="mt-3 fw-600">{by}</div>
                      </div>
                      <div className="col-lg-6">
                        <div className="fs-14 fw-400 text-light-1">
                          Changed:
                        </div>
                        <div className="mt-3 fw-600">{changed}</div>
                      </div>
                      <div className="col-lg-6">
                        <div className="fs-14 fw-400 text-light-1">From:</div>
                        <div className="mt-3 fw-600">{from}</div>
                      </div>
                      <div className="col-lg-6">
                        <div className="fs-14 fw-400 text-light-1">To:</div>
                        <div className="mt-3 fw-600">{to}</div>
                      </div>
                    </GridContainer>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </GridContainer>
    </ListingLayout>
  );
};

export default TodoDetails;
