import React, { useState } from "react";

import ListingLayout from "../layouts/ListingLayout";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Select from "../components/select/select";
import Option from "../components/select/option";
import GridContainer from "../components/GridContainer";

const ESignature = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [signatureAdded, setSignatureAdded] = useState(false);

  const showModal = () => {
    setIsModalActive(true);
  };

  const hideModal = () => {
    setIsModalActive(false);
  };

  const onAccept = () => {
    setSignatureAdded(true);
  };

  return (
    <ListingLayout
      mainClassName="h-100"
      rootClassName="e-signature"
      withSettings
      title="E-signature"
    >
      <Modal
        acceptBtnLabel="CREATE"
        active={isModalActive}
        hideModal={hideModal}
        onAccept={onAccept}
      >
        <h3 className="fs-28">Create E-signature</h3>

        <div className="tabs-lg mt-20">
          <button className="btn tab active">UPLOAD</button>
          <button className="btn tab">TYPE</button>
        </div>

        <Input
          rootClassName="mt-20"
          dull
          label="Name"
          placeholder="Enter Name"
        />

        <Input
          rows={4}
          rootClassName="mt-20"
          dull
          textarea
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

        <Select
          rootClassName="mt-20"
          label="Change Style"
          imp
          withInfo
          placeholder="Hurricane"
        >
          <Option value="option-1">Option 1</Option>
          <Option value="option-2">Option 2</Option>
          <Option value="option-3">Option 3</Option>
        </Select>
        <div className="mt-20 sign-container">Write here...</div>
      </Modal>

      {signatureAdded ? (
        <GridContainer rootClassName="signs-wrap">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-end">
                  <div className="btn">
                    <img src="./assets/vectors/bin.svg" alt="bin" />
                  </div>
                </div>
                <h1 className="sign">Randy Bergson</h1>
                <div className="fw-bold">Randy Bergson</div>
                <div className="mt-3">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      ) : (
        <div className="no-signature">
          <h2>Don't have E-signature</h2>

          <div className="fw-400 mt-10">
            Please click below buton and upload or create E-signature
          </div>

          <button className="btn btn-primary mt-40" onClick={showModal}>
            CREATE E-SIGNAURE
          </button>
        </div>
      )}
    </ListingLayout>
  );
};

export default ESignature;
