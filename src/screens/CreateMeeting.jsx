import React from "react";
import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import InputDate from "../components/InputDate";
import Option from "../components/select/option";
import Select from "../components/select/select";

import ListingLayout from "../layouts/ListingLayout";

const CreateMeeting = () => {
  return (
    <ListingLayout
      rootClassName="create-meeting"
      mainClassName="py-20"
      withSettings
      title="Create A New Meeting"
    >
      <div className="breadcrumb">
        <Link to="/meetings" className="breadcrumb-item">
          Meetings
        </Link>
        <div className="breadcrumb-item">New Meeting</div>
      </div>
      <div className="card mt-20">
        <div className="card-body">
          <h4 className="fs-20">MEETING INFORMATION</h4>

          <form className="form mt-20" action="">
            <Input dull label="Meeting #" imp placeholder="Enter meeting" />
            <Input
              dull
              label="Meeting Name"
              imp
              placeholder="Enter Meeting Name"
            />
            <Input
              dull
              label="Vide Conferencing Link"
              imp
              placeholder="Enter Meeting Name"
            />

            <div>
              <div className="fw-bold mt-30">Private Meeting</div>
              <Checkbox
                rootClassName="mt-10"
                small
                label="Visible only to meeting admins and scheduled attendees"
              />
            </div>

            <div>
              <div className="fw-bold mt-30">Draft Meeting</div>
              <Checkbox rootClassName="mt-10" small label="Draft Meeting" />
            </div>

            <div className="container-fluid px-0 mt-30">
              <div className="row">
                <div className="col-6">
                  <InputDate noInfo label="Meeting Date" />
                </div>
                <div className="col-6">
                  <Select label="Timezone" placeholder="Select timezone">
                    <Option value="lorem">Lorem</Option>
                    <Option value="ipsum">Ipsum</Option>
                  </Select>
                </div>
              </div>
            </div>

            <div className="container-fluid px-0 mt-30">
              <div className="row">
                <div className="col-6">
                  <InputDate noInfo label="Meeting Date" />
                </div>
                <div className="col-6">
                  <Select label="Timezone" placeholder="Select timezone">
                    <Option value="lorem">Lorem</Option>
                    <Option value="ipsum">Ipsum</Option>
                  </Select>
                </div>
              </div>
            </div>

            <Input label="Meeting Location" placeholder="Enter location" />
          </form>
        </div>
      </div>
    </ListingLayout>
  );
};

export default CreateMeeting;
