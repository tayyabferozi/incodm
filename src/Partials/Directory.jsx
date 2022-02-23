import React from "react";

import Select from "../components/select/select";
import Option from "../components/select/option";

const Directory = ({ stepsComplete }) => {
  return (
    <div className="directory">
      <h3>Directory</h3>

      <div className="info d-flex align-items-start">
        <img
          className="me-3"
          src="./assets/vectors/info-primary.svg"
          alt="info"
        />
        <p className="text-light-1 lh-15">
          If using a project template, contacts in the Directory of the project
          template will automatically be added to the project. If you have
          awarded contracts, the entries can be added here or you can add
          contacts through the project Directory tool later.
        </p>
      </div>

      <Select
        id="directory"
        label="Directory"
        helper="Use the picker to start adding contacts."
        placeholder="Select"
      >
        <Option value="lorem">lorem</Option>
        <Option value="ipsum">ipsum</Option>
      </Select>

      {stepsComplete && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>External ID</th>
                <th>Permission Template *</th>
                <th>Project Role</th>
                <th>Notify?</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "7star interior Inc",
                  notify: false,
                },
                {
                  name: "Ace Flooring",
                  notify: false,
                },
                {
                  name: "A.C. Krause Electric LLC",
                  notify: false,
                },
              ].map((el, idx) => {
                const { name, exteralId, temp, role, notify } = el;

                return (
                  <tr>
                    <td>{name}</td>
                    <td>{exteralId || "-"}</td>
                    <td>{temp || "-"}</td>
                    <td>{role || "-"}</td>
                    <td>
                      {notify || (
                        <img src="./assets/vectors/cross.svg" alt="no" />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Directory;
