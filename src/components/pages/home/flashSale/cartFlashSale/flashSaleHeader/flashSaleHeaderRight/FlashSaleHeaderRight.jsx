import React, { useState, useEffect } from "react";

export default function FlashSaleHeaderRight() {
  const [timeLeft, setTimeLeft] = useState(10 * 3600 + 59 * 60 + 59);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <>
      <div className="grid grid-flow-col auto-cols-max gap-5 text-center">
        <div className="flex flex-col p-2  rounded-box text-neutral-content bg-[#D9176C]">
          <span className="font-mono text-5xl countdown">
            <span
              style={{ "--value": hours, "--digits": 2 }}
              aria-live="polite"
            ></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 bg-[#D9176C] rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">
            <span
              style={{ "--value": minutes, "--digits": 2 }}
              aria-live="polite"
            ></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-[#D9176C] rounded-box text-neutral-content">
          <span className="font-mono text-5xl countdown">
            <span
              style={{ "--value": seconds, "--digits": 2 }}
              aria-live="polite"
            ></span>
          </span>
          sec
        </div>
      </div>
    </>
  );
}
