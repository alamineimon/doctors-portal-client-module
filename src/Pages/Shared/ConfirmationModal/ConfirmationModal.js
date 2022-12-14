import React from 'react';

const ConfirmationModal = ({
  message,
  title,
  closeModal,
  modalData,
  successAction,
  successButtonName,
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-primary text-white"
            >
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              cencel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;