import React from "react";
import { Link } from "react-router-dom";

import GridContainer from "../components/GridContainer";
import ListingLayout from "../layouts/ListingLayout";

const InvoiceDetails = () => {
  return (
    <ListingLayout
      rootClassName="todo-details"
      withSettings
      title="Invoice Details"
    >
      <div className="breadcrumb mb-20">
        <Link to="/invoice" className="breadcrumb-item">
          Invoice
        </Link>
        <div className="breadcrumb-item">PO-01-003</div>
      </div>
      <div className="card">
        <div className="card-body">
          <GridContainer rootClassName="details ms-0">
            <div className="col-lg-3">
              <div className="fs-14 fw-400 text-light-1">Contract Company:</div>
              <div className="mt-3 fw-600">TIme for Tilling Co</div>
            </div>
            <div className="col-lg-3">
              <div className="fs-14 fw-400 text-light-1">Invoice Dates:</div>
              <div className="mt-3 fw-600">03/03/2020</div>
            </div>
            <div className="col-lg-3">
              <div className="fs-14 fw-400 text-light-1">Invoice #:</div>
              <div className="mt-3 fw-600">PO-01-003</div>
            </div>
            <div className="col-lg-3">
              <div className="fs-14 fw-400 text-light-1">Due Date:</div>
              <div className="mt-3 fw-600">PO-01-003</div>
            </div>
            <div className="col-lg-3">
              <div className="fs-14 fw-400 text-light-1">DuOrder Number:</div>
              <div className="mt-3 fw-600">09/04/2020</div>
            </div>
            <div className="col-lg-3">
              <div className="fs-14 fw-400 text-light-1">Invoice Satus:</div>
              <div className="mt-3 fw-600 text-blue">Ready For Review</div>
            </div>
            <div className="col-lg-3">
              <div className="fs-14 fw-400 text-light-1">Payment Status:</div>
              <div className="mt-3 fw-600 text-primary-1">Unpaid</div>
            </div>
            <div className="col-lg-3">
              <div className="fs-14 fw-400 text-light-1">Attachments:</div>
              <div className="mt-3 fw-600 text-primary-1 d-flex align-items-center">
                <img
                  className="me-10"
                  src="./assets/vectors/file.svg"
                  alt="file"
                />{" "}
                Invoice 01.pdf
              </div>
            </div>
          </GridContainer>

          <div className="fs-14 fw-400 text-light-1 mt-30">Attachments:</div>
          <div className="card mt-2 d-inline-block">
            <div className="card-body">
              <img
                className="d-block"
                src="./assets/vectors/invoice-dummy.svg"
                alt="invoice"
              />

              <div className="fw-600 mt-10">Invoice 01.pdf</div>
            </div>
          </div>

          <div className="mt-30">
            <button className="btn btn-primary">EDIT</button>
            <button className="ms-20 btn btn-danger">DELETE</button>
          </div>
        </div>
      </div>
    </ListingLayout>
  );
};

export default InvoiceDetails;
