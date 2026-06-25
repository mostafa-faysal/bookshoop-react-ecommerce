import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Payment from "../payment/Payment";

export default function FormCheckOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
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

          localStorage.setItem("forceEmptyCart", "true");
          queryClient.setQueryData(["cart"], []);
          toast.success("Checkout successful! Your order has been placed.");
          navigate("/books");
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
              className="w-full input"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="label">Phone</label>
            <input
              ref={refPhone}
              type="number"
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
              className="w-full input"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="label">Country</label>
            <input
              ref={refCountry}
              type="text"
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
