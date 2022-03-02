import React from "react";
import clsx from "clsx";

const Modal = ({ active, hideModal, children }) => {
  return (
    <>
      <div
        onClick={hideModal}
        className={clsx("custom-modal-overlay", { active })}
      ></div>
      <div className={clsx("custom-modal", { active })}>
        <div className="wrap">
          <div className="modal-body">{children}</div>
          <div className="modal-foot my-30 d-flex justify-content-end">
            <button onClick={hideModal} className="btn btn-cancel me-20">
              CANCEL
            </button>
            <button onClick={hideModal} className="btn btn-primary">
              PROCESS
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
