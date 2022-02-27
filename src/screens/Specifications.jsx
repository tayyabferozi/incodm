import React from "react";

import Checkbox from "../components/Checkbox";
import Dropdown from "../components/Dropdown";
import Input from "../components/Input";
import ListingLayout from "../layouts/ListingLayout";

import isEmpty from "../utils/is-empty";

const specificationsData = [];

const Specifications = () => {
  return (
    <ListingLayout
      rootClassName="specifications"
      mainClassName="py-20"
      withSettings
      title="Specifications"
    >
      <div className="d-flex align-items-center justify-content-end">
        <Checkbox rootClassName="me-10" small bold label="Subscribe" />

        <Dropdown rootClassName="me-10" btn dropdownItems={["Export document"]}>
          EXPORT
        </Dropdown>

        <button className="me-10 btn btn-primary-outlined">
          <img src="./assets/vectors/upload-btn.svg" alt="upload" />
          CREATE DIVISIONS
        </button>

        <button className="me-10 btn btn-contained-2">
          <img src="./assets/vectors/add.svg" alt="add" />
          UPLOAD
        </button>

        <button className="me-10 btn btn-contained-2">
          <img src="./assets/vectors/add.svg" alt="add" />
          UPLOAD
        </button>
      </div>

      <div className="card mt-20">
        <div className="card-head d-flex">
          <Input rootClassName="m-0" type="search" placeholder="Search..." />
          <Dropdown
            rootClassName="mx-10"
            btn
            dropdownItems={["Export document"]}
          >
            ALL DIVISIONS
          </Dropdown>
          <Dropdown
            rootClassName="me-10"
            btn
            dropdownItems={["Export document"]}
          >
            CURRENT(0)
          </Dropdown>
        </div>
        <div className="card-body">
          <div className="table-container">
            <table className="open-items">
              <thead>
                <tr>
                  <th className="text-center">Number</th>
                  <th className="text-center">Description</th>
                  <th className="text-center">Revision</th>
                  <th className="text-center">Issued Date</th>
                  <th className="text-center">Received Date</th>
                  <th className="text-center">Set</th>
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
      </div>
    </ListingLayout>
  );
};

export default Specifications;
