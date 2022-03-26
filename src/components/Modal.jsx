import React from "react";
import clsx from "clsx";

const Modal = ({
  active,
  acceptBtnLabel,
  hideModal,
  onAccept,
  footClassName,
  children,
}) => {
  const onAcceptHandler = () => {
    onAccept();
    hideModal();
  };

  return (
    <>
      <div
        onClick={hideModal}
        className={clsx("custom-modal-overlay", { active })}
      ></div>
      <div className={clsx("custom-modal", { active })}>
        <div className="wrap">
          <div className="modal-body">{children}</div>
          <div
            className={clsx(
              "modal-foot my-30 d-flex justify-content-end",
              footClassName
            )}
          >
            <button onClick={hideModal} className="btn btn-cancel me-20">
              CANCEL
            </button>
            <button onClick={onAcceptHandler} className="btn btn-primary">
              {acceptBtnLabel || "PROCESS"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
