import React from "react";
import FlashSaleHeaderRight from "./flashSaleHeaderRight/FlashSaleHeaderRight";
import FlashSaleHeaderLift from "./flashSaleHeaderLeft/FlashSaleHeaderLeft";

export default function FlashSaleHeader() {
  return (
    <div className="flex flex-col gap-5 justify-between items-center mb-30 mx-15 md:flex-row">
      <FlashSaleHeaderLift />
      <FlashSaleHeaderRight />
    </div>
  );
}
