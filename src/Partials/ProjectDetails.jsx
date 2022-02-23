import React, { useState } from "react";

import Select from "../components/select/select";
import Option from "../components/select/option";
import Input from "../components/Input";
import Checkbox from "../components/Checkbox";
import InputDate from "../components/InputDate";

const ProjectDetails = () => {
  const [formState, setFormState] = useState({
    startDate: "",
    endDate: "",
  });

  const dateChangeHandler = (name, date) => {
    setFormState((prevState) => {
      return { ...prevState, [name]: date };
    });
  };

  return (
    <div className="project">
      <div className="sub-section">
        <h3>Project Details</h3>

        <div className="custom-form-control">
          <label htmlFor="lastName">Template</label>
          <Select placeholder="Do not apply a template...">
            <Option value="template-1">Template 1</Option>
            <Option value="template-2">Template 2</Option>
          </Select>
        </div>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <Input
                withInfo
                id="name"
                label="Name*"
                placeholder="Enter Name"
              />
            </div>
            <div className="col-lg-6">
              <Input
                withInfo
                id="projectName"
                label="Total Value*"
                placeholder="Enter Project Name"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <InputDate
                selected={formState.startDate}
                label="Start Date*"
                onChange={(date) => dateChangeHandler("startDate", date)}
              />
            </div>
            <div className="col-lg-6">
              <InputDate
                selected={formState.endDate}
                label="Completion Date*"
                onChange={(date) => dateChangeHandler("endDate", date)}
              />
            </div>
          </div>
        </div>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="custom-form-control">
                <label htmlFor="stage">Stage</label>
                <Select placeholder="Select">
                  <Option value="stage-1">Stage 1</Option>
                  <Option value="stage-2">Stage 2</Option>
                </Select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-form-control">
                <label htmlFor="type">Type</label>
                <Select placeholder="Select">
                  <Option value="type-1">Type 1</Option>
                  <Option value="type-2">Type 2</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <Input
                withInfo
                id="projectNumber"
                label="Project Number"
                placeholder="Enter Project Number"
              />
            </div>
            <div className="col-lg-6">
              <Input
                id="squareFeet"
                label="Square Feet"
                placeholder="Enter Square Feet"
              />
            </div>
          </div>
        </div>

        <Input
          rows={5}
          textarea
          id="description"
          label="Description"
          placeholder="Enter Description"
        />

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <Input
                withInfo
                id="logo"
                type="file"
                label="Logo"
                placeholder="Click to Upload Drag and drop image here"
              />
            </div>
            <div className="col-lg-6">
              <Input
                withInfo
                id="photo"
                type="file"
                label="Photo"
                placeholder="Click to Upload Drag and drop image here"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sub-section">
        <h3>Project Location</h3>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <Input
                id="address"
                label="Address*"
                placeholder="Enter Address"
              />
            </div>
            <div className="col-lg-6">
              <Input id="city" label="City*" placeholder="Enter City" />
            </div>
          </div>
        </div>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="custom-form-control">
                <label htmlFor="state">State</label>
                <Select placeholder="State">
                  <Option value="state-1">State 1</Option>
                  <Option value="state-2">State 2</Option>
                </Select>
              </div>
            </div>
            <div className="col-lg-6">
              <Input id="zip" label="Zip*" placeholder="Enter Zip" />
            </div>
          </div>
        </div>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <Input
                id="phone"
                label="Phone"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="sub-section">
        <h3>Advanced</h3>

        <div className="container-fluid px-0">
          <div className="row">
            <div className="col-lg-6">
              <div className="custom-form-control">
                <label htmlFor="state">Region</label>
                <Select placeholder="Select">
                  <Option value="region-1">Region 1</Option>
                  <Option value="region-2">Region 2</Option>
                </Select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-form-control">
                <label htmlFor="language">Language - Country</label>
                <Select placeholder="Select">
                  <Option value="language-1">Language 1</Option>
                  <Option value="language-2">Language 2</Option>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <Checkbox label="Test Project" rootClassName="fs-12 lh-15" />
      </div>
    </div>
  );
};

export default ProjectDetails;
