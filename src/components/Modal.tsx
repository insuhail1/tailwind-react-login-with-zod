import React, { ReactNode, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      setTimeout(() => {
        setShowModal(false);
      }, 300);
    }
  }, [isOpen]);

  if (!showModal) return <></>;

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div
        className={`relative w-auto max-w-3xl mx-auto my-6 z-50 ${
          isOpen ? "animate-slide-down" : "animate-slide-up"
        }`}
      >
        <div className="modal-container w-full mx-auto rounded shadow-lg overflow-y-auto">
          <div className="modal-header">
            <button
              className="absolute top-2 right-2 p-2 text-white"
              onClick={onClose}
            >
              <AiOutlineClose />
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-500 opacity-75`}
        onClick={onClose}
      />
    </div>
  );
};
