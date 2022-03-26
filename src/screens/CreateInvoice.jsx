import React from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import InputDate from "../components/InputDate";
import Option from "../components/select/option";
import Select from "../components/select/select";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "rc-time-picker/assets/index.css";

import ListingLayout from "../layouts/ListingLayout";

const CreateInvoice = () => {
  return (
    <ListingLayout
      rootClassName="create-invoice"
      withSettings
      title="Create A New Invoice"
    >
      <div className="breadcrumb">
        <Link to="/invoice" className="breadcrumb-item">
          Invoice
        </Link>
        <div className="breadcrumb-item">Create A New Invoice</div>
      </div>
      <div className="card mt-20">
        <div className="card-body">
          <form className="form" action="">
            <Select
              label="Contract Company"
              placeholder="Select contract company"
            >
              <Option value="lorem">Lorem</Option>
              <Option value="ipsum">Ipsum</Option>
            </Select>

            <Input dull label="Invoice #" imp placeholder="Enter invoice" />

            <Input
              dull
              label="Order Number"
              imp
              placeholder="Enter order number"
            />

            <div className="container-fluid px-0 mt-30">
              <div className="row">
                <div className="col-6">
                  <InputDate noInfo label="Invoice Date*" />
                </div>
                <div className="col-6">
                  <InputDate noInfo label="Due Date" />
                </div>
              </div>
            </div>

            <Select label="Terms" placeholder="Due on Receipt">
              <Option value="lorem">Lorem</Option>
              <Option value="ipsum">Ipsum</Option>
            </Select>

            <Select label="Salesperson" placeholder="Select salesperson">
              <Option value="lorem">Lorem</Option>
              <Option value="ipsum">Ipsum</Option>
            </Select>

            <Input
              icon="./assets/vectors/clip-dark.svg"
              type="file"
              label="Attachments"
              placeholder="Attach file or Drag &amp; Drop"
              noHelper
            />

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

export default CreateInvoice;
