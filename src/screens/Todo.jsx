import React, { useState } from "react";
import clsx from "clsx";

import Input from "../components/Input";
import ListingLayout from "../layouts/ListingLayout";
import Modal from "../components/Modal";
import Dropdown from "../components/Dropdown";
import Select from "../components/select/select";
import Option from "../components/select/option";
import InputDate from "../components/InputDate";

const Todo = () => {
  const [todoData] = useState([
    {
      title: "Megagen Design Meeting",
      desc: "",
      assignee: "Jaydon Dias",
      dueDate: "03/10/2021",
      isReadyForReview: true,
      category: "Design",
    },
    {
      title: "Interior Modeling Phase 2",
      desc: "1. 1st Fl Reception Area 2. Cafeteria 3. 2nd Fl Reception Area 4. Office & Lab",
      assignee: "Jaydon Dias",
      dueDate: "03/10/2021",
      isReadyForReview: false,
      category: "Design",
    },
    {
      title: "Interior Modeling Phase",
      desc: "1. 1st Fl Reception Area 2. Cafeteria 3. 2nd Fl Reception Area 4. Office & Lab 5. Finish Board",
      assignee: "Jaydon Dias",
      dueDate: "03/10/2021",
      isReadyForReview: true,
      category: "Design",
    },
    {
      title: "Interior Modeling Phase 2",
      desc: "1. 1st Fl Reception Area 2. Cafeteria 3. 2nd Fl Reception Area 4. Office & Lab",
      assignee: "Jaydon Dias",
      dueDate: "03/10/2021",
      isReadyForReview: false,
      category: "Minutes",
    },
    {
      title: "Interior Modeling Phase",
      desc: "1. 1st Fl Reception Area 2. Cafeteria 3. 2nd Fl Reception Area 4. Office & Lab 5. Finish Board",
      assignee: "Jaydon Dias",
      dueDate: "03/10/2021",
      isReadyForReview: true,
      category: "Design",
    },
    {
      title: "Interior Modeling Phase 2",
      desc: "1. 1st Fl Reception Area 2. Cafeteria 3. 2nd Fl Reception Area 4. Office & Lab",
      assignee: "Jaydon Dias",
      dueDate: "03/10/2021",
      isReadyForReview: false,
      category: "Minutes",
    },
  ]);
  const [isModalActive, setIsModalActive] = useState(false);
  const [formState, setFormState] = useState({
    drawingDate: "",
    receivedDate: "",
  });

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
    <ListingLayout rootClassName="todo" withSettings title="To Do">
      <Modal
        acceptBtnLabel="CREATE"
        active={isModalActive}
        hideModal={hideModal}
      >
        <h3 className="fs-28">Create To Do</h3>

        <Input
          withInfo
          rootClassName="mt-20"
          dull
          label="Title"
          imp
          placeholder="Enter Title"
        />

        <Select
          rootClassName="mt-20"
          label="Status"
          imp
          withInfo
          placeholder="Select status"
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
        </Select>

        <Select
          rootClassName="mt-20"
          label="Assignee"
          imp
          withInfo
          placeholder="Enter Assignee"
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
        </Select>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <InputDate
                noInfo
                rootClassName="mb-20"
                selected={formState.drawingDate}
                label="Due Date"
                onChange={(date) => dateChangeHandler("dueDate", date)}
              />
            </div>
            <div className="col-lg-6">
              <Select label="Category" placeholder="Select Category">
                <Option value="option-1">Option 1</Option>
                <Option value="option-2">Option 2</Option>
                <Option value="option-3">Option 3</Option>
              </Select>
            </div>
          </div>
        </div>

        <Input
          textarea
          rows={4}
          dull
          label="Description"
          placeholder="Write here..."
        />

        <Input
          noHelper
          label="Attachments"
          icon="./assets/vectors/clip-dark.svg"
          labelClassName="fs-16"
          id="logo"
          type="file"
          placeholder="Attach file or Drag &amp; Drop"
        />
      </Modal>

      <div className="options pb-20 d-flex justify-content-end">
        <Dropdown btn dropdownItems={["Export document"]}>
          EXPORT
        </Dropdown>

        <button onClick={showModal} className="ms-10 btn btn-primary-outlined">
          <img className="me-10" src="./assets/vectors/add.svg" alt="add" />
          CREATE TO DO
        </button>
      </div>

      <div className="card">
        <div className="card-head d-flex">
          <Input rootClassName="m-0" type="search" placeholder="Search..." />
          <Dropdown
            rootClassName="mx-20"
            btn
            dropdownItems={["Export document"]}
          >
            ADD FILTERS
          </Dropdown>
        </div>

        <div className="card-body">
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Assignee</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Category</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {todoData.map((el, idx) => {
                  const {
                    title,
                    desc,
                    assignee,
                    dueDate,
                    isReadyForReview,
                    category,
                  } = el;

                  return (
                    <tr key={"todo-table-item" + idx}>
                      <td>{idx + 1}</td>
                      <td>{title}</td>
                      <td>{desc || "-"}</td>
                      <td>{assignee}</td>
                      <td>{dueDate}</td>
                      <td
                        className={clsx(
                          isReadyForReview && "text-blue",
                          !isReadyForReview && "text-orange"
                        )}
                      >
                        {isReadyForReview ? "Ready For Review" : "In Progress"}
                      </td>
                      <td>{category}</td>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ListingLayout>
  );
};

export default Todo;
