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
        <h3 className="font-bold text-lg">Login Alert</h3>
        <p className="py-4">You must login to continue</p>
        <AuthButtons />
        <div className="modal-action">
          <form method="dialog">
            
            <button className="btn" onClick={onClose}>
              close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
