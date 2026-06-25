import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "../payment/Payment";
import { useSubmitCheckout } from "../../../../hooks/useSubmitCheckout";

export default function FormCheckOut() {
  const navigate = useNavigate();
  const checkoutMutation = useSubmitCheckout();
  const refName = useRef();
  const refPhone = useRef();
  const refEmail = useRef();
  const refCountry = useRef();
  const refNote = useRef();

  return (
    <div className="mt-6 w-full md:ml-5">
      <form
        id="checkout-form"
        className="flex flex-col gap-8 p-4 w-full border py-15 bg-base-200 border-base-300 rounded-box"
        onSubmit={(e) => {
          e.preventDefault();
          const data = {
            customerName: refName.current.value,
            customerEmail: refEmail.current.value,
            customerPhone: refPhone.current.value,
            customerAddress: refCountry.current.value,
            notes: refNote.current.value,
          };

          checkoutMutation.mutate(data, {
            onSuccess: () => {
              localStorage.setItem("forceEmptyCart", "true");
              navigate("/");
            },
          });
        }}
      >
        <h2 className="text-xl font-bold text-gray-800">
          Shipping information
        </h2>
        <div className="flex gap-3">
          <div className="flex flex-col w-full">
            <label className="label">Name</label>
            <input
              ref={refName}
              type="text"
              required
              className="w-full input"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="label">Phone</label>
            <input
              ref={refPhone}
              type="number"
              required
              className="w-full input [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              placeholder="Enter Your Phone"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col w-full">
            <label className="label">Email</label>
            <input
              ref={refEmail}
              type="email"
              required
              className="w-full input"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="label">Country</label>
            <input
              ref={refCountry}
              type="text"
              required
              className="w-full input"
              placeholder="Enter Your Country"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label className="label">Note</label>
          <input
            ref={refNote}
            type="text"
            className="w-full input h-[10vh]"
            placeholder="Enter Your note"
          />
        </div>
      </form>
      <Payment />
    </div>
  );
}
