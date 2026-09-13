import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ProductFeatures() {
  return (
    <div className="flex flex-col justify-end items-end space-y-2">
      <div className="flex gap-2">
        <div className="bg-white border-[#22222233] px-3 py-2 alert w-28 flex justify-center ">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-[#25D994]"
            />

            <p className="font-normal text-[14px] text-[#25D994]">In Stock</p>
          </div>
        </div>
        <div className="bg-white border-[#22222233] px-3 py-2 alert w-50 flex justify-center ">
          <div className="flex gap-2 items-center">
            <img src="/features/car.png" alt="fast delivery" className="w-5" />
            <p className="font-normal text-[14px] text-[#22222280]">
              Free Shipping Today
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white border-[#EAA451] px-2 py-3 alert w-41  ">
        <p className="font-normal text-[14px] text-[#EAA451]">
          Discount code: Ne212
        </p>
      </div>
    </div>
  );
}
