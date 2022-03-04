import React, { useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import InputDate from "../components/InputDate";
import Option from "../components/select/option";
import Select from "../components/select/select";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

import ListingLayout from "../layouts/ListingLayout";

const CreateMeeting = () => {
  const [editorState, setEditorState] = useState("");

  const onEditorStateChange = (val) => {
    setEditorState(val);
  };

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
                  <div className="custom-form-control">
                    <img
                      className="clock"
                      src="./assets/vectors/clock.svg"
                      alt="clock"
                    />
                    <label htmlFor="" className="d-block fs-12">
                      Start time
                    </label>
                    <TimePicker placeholder="Select time" />
                  </div>
                </div>

                <div className="col-6">
                  <div className="custom-form-control">
                    <img
                      className="clock"
                      src="./assets/vectors/clock.svg"
                      alt="clock"
                    />
                    <label htmlFor="" className="d-block fs-12">
                      End time
                    </label>
                    <TimePicker placeholder="Select time" />
                  </div>
                </div>
              </div>
            </div>
            <Input label="Meeting Location" placeholder="Enter location" />

            <div className="mb-30">
              <label htmlFor="editor" className="d-block fs-12 fw-400">
                Overview
              </label>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
              />
            </div>

            <Input
              icon="./assets/vectors/clip-dark.svg"
              type="file"
              label="Attachments"
              placeholder="Attach file or Drag &amp; Drop"
              noHelper
            />
            <Select
              label="Scheduled Attendees"
              placeholder="Scheduled Attendees"
            >
              <Option value="Attendee 1">Attendee 1</Option>
              <Option value="Attendee 2">Attendee 2</Option>
            </Select>
            <div className="d-flex justify-content-end mt-40">
              <button className="me-20 btn btn-cancel">CANCEL</button>
              <button className="btn btn-primary">CREATE</button>
            </div>
          </form>
        </div>
      </div>
    </ListingLayout>
  );
};

export default CreateMeeting;
