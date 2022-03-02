import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import ListingLayout from "../layouts/ListingLayout";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import Checkbox from "../components/Checkbox";
import Modal from "../components/Modal";
import Select from "../components/select/select";
import Option from "../components/select/option";
import InputDate from "../components/InputDate";
import Collapse from "../components/Collapse";

const drawingData = [
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
  {
    number: "A-101",
    title: "AS NOTED",
    revision: 0,
    drawingDate: "2/1/2022",
    receivedDate: "2/17/2022",
    set: "39-40 MEGAGEN FLOOR PLAN LAYOUT",
  },
];

const Drawings = () => {
  const [listingTypeState, setListingTypeState] = useState("list");
  const [isModalActive, setIsModalActive] = useState(true);
  const [formState, setFormState] = useState({
    drawingDate: "",
    receivedDate: "",
  });

  const changeListingType = (type) => {
    setListingTypeState(type);
  };

  const showModal = () => {
    setIsModalActive(true);
  };

  const hideModal = () => {
    setIsModalActive(false);
  };

  const dateChangeHandler = (name, date) => {
    setFormState((prevState) => {
      return { ...prevState, [name]: date };
    });
  };

  return (
    <ListingLayout
      withSettings
      rootClassName="drawings"
      mainClassName="py-20"
      title="Drawings"
    >
      <Modal active={isModalActive} hideModal={hideModal}>
        <h4>Upload Drawings</h4>

        <Input
          noHelper
          rootClassName="mt-20"
          icon="./assets/vectors/clip-dark.svg"
          labelClassName="fs-16"
          withInfo
          id="logo"
          type="file"
          placeholder="Attach file or Drag &amp; Drop"
        />

        <Select
          rootClassName="mt-20"
          label="Set"
          imp
          withInfo
          placeholder="Select or Create set"
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
        </Select>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <InputDate
                rootClassName="mb-20"
                selected={formState.drawingDate}
                label="Default Drawing Date*"
                onChange={(date) => dateChangeHandler("startDate", date)}
              />
            </div>
            <div className="col-lg-6">
              <InputDate
                rootClassName="mb-20"
                selected={formState.receivedDate}
                label="Default Received Date*"
                onChange={(date) => dateChangeHandler("endDate", date)}
              />
            </div>
          </div>
        </div>

        <hr className="mb-20" />

        <Collapse title="Advanced Options">
          <div className="container-fluid mt-20 px-0">
            <div className="row">
              <div className="col-lg-6">
                <Input label="Default Revision" placeholder="Enter" />
              </div>
              <div className="col-lg-6">
                <Select label="Drawing Language" placeholder="Select Language">
                  <Option value="option-1">Option 1</Option>
                  <Option value="option-2">Option 2</Option>
                  <Option value="option-3">Option 3</Option>
                </Select>
              </div>
            </div>
          </div>

          <div className="fw-bold">Drawing Number</div>
          <div className="d-flex mt-20">
            <Checkbox label="Contains Revision" />
            <Checkbox rootClassName="ms-20" label="Get From Filename" />
          </div>
        </Collapse>
      </Modal>
      <div className="top pb-20">
        <div className="tabs">
          <NavLink to="/drawings" className="tab">
            Current Drawings
          </NavLink>
          <NavLink to="/drawing-sets" className="tab">
            Drawing Sets
          </NavLink>
        </div>
        <div className="options d-flex align-items-center">
          <Checkbox
            rootClassName="me-10"
            inputEnd
            small
            bold
            label="Subscribe: "
          />

          <Dropdown btn dropdownItems={["Export document"]}>
            EXPORT
          </Dropdown>

          <button
            onClick={showModal}
            className="ms-10 btn btn-primary-outlined"
          >
            <img
              className="me-10"
              src="./assets/vectors/upload-btn.svg"
              alt="add"
            />
            UPLOAD
          </button>
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
        <div className="card-body p-0 d-flex">
          <div className="card-left">
            <div className="card-nav">
              {[
                {
                  name: "Manpower",
                  active: true,
                },
                {
                  name: "Interior",
                },
                {
                  name: "Telecommunications",
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

            <div className="sets">
              {[
                {
                  head: "Permit set",
                  status: "Ready for Review",
                  desc: "26 sheets require your attention",
                },
                {
                  head: "Permit set",
                  status: "Ready for Review",
                  desc: "1 sheets require your attention",
                },
              ].map((el, idx) => {
                const { head, status, desc } = el;

                return (
                  <div key={"set" + idx} className="set">
                    <div className="set-head d-flex align-items-center justify-content-between">
                      <div className="fs-13 fw-bold">{head}</div>
                      <img
                        src="./assets/vectors/delete-table.svg"
                        alt="delete"
                      />
                    </div>
                    <div className="set-body">
                      <div className="fs-13">{status}</div>
                      <div className="fs-12 mt-1 text-light-1">{desc}</div>
                    </div>
                    <div className="set-foot d-flex justify-content-center">
                      <button className="btn text-center btn-primary-text fs-12">
                        CLICK HERE TO REVIEW
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="reports">
              <div className="fw-bold mb-20">DRAWING REPORTS</div>
              {[
                {
                  name: "All Sets and Revisions",
                },
                {
                  name: "Sketches",
                },
                {
                  name: "Deleted Drawing Revisions",
                },
                {
                  name: "Measurements",
                },
              ].map((el, idx) => {
                const { name } = el;

                return (
                  <div key={"report" + idx} className="report">
                    <div className="fs-14 fw-bold">{name}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="card-right">
            <h4 className="fs-20 mb-20">Architectural</h4>

            {listingTypeState === "list" && (
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>
                        <Checkbox />
                      </th>
                      <th>Drawing No.</th>
                      <th>Drawing Title</th>
                      <th>Revision</th>
                      <th>Drawing Date</th>
                      <th>Received Date</th>
                      <th>Set</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {drawingData.map((el, idx) => {
                      const {
                        number,
                        title,
                        drawingDate,
                        receivedDate,
                        revision,
                        set,
                      } = el;

                      return (
                        <tr key={"drawing-list-item" + idx}>
                          <td>
                            <Checkbox />
                          </td>
                          <td>
                            <a href="#0">{number}</a>
                          </td>
                          <td>{title}</td>
                          <td>{revision}</td>
                          <td>{drawingDate}</td>
                          <td>{receivedDate}</td>
                          <td>{set}</td>
                          <td>
                            <div className="d-flex">
                              <button className="btn btn-contained-2 me-10">
                                INFO
                              </button>
                              <button className="btn btn-contained-2 ms-10">
                                OPEN
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            {listingTypeState === "grid" && (
              <div className="drawing-grid container-fluid px-0">
                <div className="row g-4">
                  {drawingData.map((el, idx) => {
                    const { name, revision, title } = el;

                    return (
                      <div key={"grid-item" + idx} className="col">
                        <div className="drawing-grid-item">
                          <Checkbox />
                          <img src="./assets/img/drawing.png" alt="drawing" />
                          <div className="mt-10 d-flex justify-content-between">
                            <div className="fw-bold fs-13">{name}</div>
                            <div className="fs-13">Rev. {revision}</div>
                          </div>
                          <div className="fs-14 mt-2">{title}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ListingLayout>
  );
};

export default Drawings;
