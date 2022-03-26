import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import ListingLayout from "../layouts/ListingLayout";
import Dropdown from "../components/Dropdown";

const Invoice = () => {
  const [invoiceData] = useState([
    {
      date: "03/03/2020",
      invoiceNumber: "PO-01-003",
      orderNumber: "",
      company: "Time for Tilling Co",
      dueDate: "03/10/2021",
      attachments: "Invoice 01.png",
      isReadyForReview: true,
      paymentDone: false,
    },
    {
      date: "03/03/2020",
      invoiceNumber: "PO-01-003",
      orderNumber: "",
      company: "Time for Tilling Co",
      dueDate: "03/10/2021",
      attachments: "Invoice 01.png",
      isReadyForReview: false,
      paymentDone: false,
    },
    {
      date: "03/03/2020",
      invoiceNumber: "PO-01-003",
      orderNumber: "",
      company: "Time for Tilling Co",
      dueDate: "03/10/2021",
      attachments: "Invoice 01.png",
      isReadyForReview: true,
      paymentDone: false,
    },
    {
      date: "03/03/2020",
      invoiceNumber: "PO-01-003",
      orderNumber: "",
      company: "Time for Tilling Co",
      dueDate: "03/10/2021",
      attachments: "Invoice 01.png",
      isReadyForReview: false,
      paymentDone: false,
    },
    {
      date: "24/03/2020",
      invoiceNumber: "PO-01-003",
      orderNumber: "",
      company: "Time for Tilling Co",
      dueDate: "19/07/2020",
      attachments: "Invoice 01.png",
      isReadyForReview: true,
      paymentDone: true,
    },
  ]);

  return (
    <ListingLayout rootClassName="invoice" withSettings title="Invoice">
      <div className="options pb-20 d-flex justify-content-end">
        <Dropdown btn dropdownItems={["Export document"]}>
          EXPORT
        </Dropdown>

        <Link to="/create-invoice" className="ms-10 btn btn-primary-outlined">
          <img className="me-10" src="./assets/vectors/add.svg" alt="add" />
          New Invoice
        </Link>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Invoice Dates</th>
              <th>Invoice #</th>
              <th>Order Number</th>
              <th>Contract Company</th>
              <th>Due Date</th>
              <th>Attachments</th>
              <th>Invoice Status</th>
              <th>Payment Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.map((el, idx) => {
              const {
                date,
                invoiceNumber,
                orderNumber,
                company,
                dueDate,
                attachments,
                isReadyForReview,
                paymentDone,
              } = el;

              return (
                <tr key={"invoice-table-item" + idx}>
                  <td>{date}</td>
                  <td>{invoiceNumber}</td>
                  <td>{orderNumber || "-"}</td>
                  <td>{company}</td>
                  <td>{dueDate}</td>
                  <td>
                    <a href="#0">{attachments}</a>
                  </td>
                  <td
                    className={clsx(
                      isReadyForReview && "text-blue",
                      !isReadyForReview && "text-orange",
                      paymentDone && "text-green"
                    )}
                  >
                    {paymentDone ? (
                      "Done"
                    ) : (
                      <>{isReadyForReview ? "Ready For Review" : "Draft"}</>
                    )}
                  </td>
                  <td
                    className={clsx(
                      !paymentDone && "text-primary-1",
                      paymentDone && "text-green"
                    )}
                  >
                    {paymentDone ? "Paid" : "Unpaid"}
                  </td>
                  <td cqsazlassName="text-center">
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
    </ListingLayout>
  );
};

export default Invoice;
