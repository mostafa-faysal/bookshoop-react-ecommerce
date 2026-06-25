export default function Payment() {
  return (
    <fieldset className="flex flex-col gap-4 p-4 py-8 mt-8 mb-10 w-full border bg-base-200 border-base-300 rounded-box">
      <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
      <div className="flex flex-col gap-4 justify-center items-center w-full md:flex-row">
        <button className="flex gap-2 justify-center items-center w-full h-14 text-base font-semibold rounded-xl shadow-lg opacity-70 transition-all duration-200 cursor-not-allowed">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-secondary"
            disabled
          />
          Online payment
        </button>
        <button className="flex gap-2 justify-center items-center w-full h-14 text-base font-semibold rounded-xl shadow-lg transition-all duration-200 cursor-pointer">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-secondary"
            defaultChecked
          />
          Cash on delivery
        </button>
        <button className="flex gap-2 justify-center items-center w-full h-14 text-base font-semibold rounded-xl shadow-lg opacity-70 transition-all duration-200 cursor-not-allowed">
          <input
            type="radio"
            name="radio-5"
            className="radio radio-secondary"
            disabled
          />
          POS on delivery
        </button>
      </div>
    </fieldset>
  );
}
