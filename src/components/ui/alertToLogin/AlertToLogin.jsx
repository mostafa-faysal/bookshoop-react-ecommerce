import { useEffect, useRef } from "react";
import AuthButtons from "../../authButtons/AuthButtons";

export default function AlertToLogin({ onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  return (
    <dialog
      ref={modalRef}
      id="my_modal_5"
      className="modal modal-bottom sm:modal-middle"
      onClose={onClose}
    >
      <div className="modal-box">
        <div className="flex justify-end w-full">
          <button className="btn btn-circle" onClick={onClose}>
            X
          </button>
        </div>
        <h3 className="text-lg font-bold">Login Alert</h3>
        <p className="py-4">You must login to continue</p>
        <AuthButtons />
        <div className="modal-action">
          <form method="dialog"></form>
        </div>
      </div>
    </dialog>
  );
}
