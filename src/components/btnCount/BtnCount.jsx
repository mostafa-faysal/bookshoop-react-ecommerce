export default function BtnCount({ count, setCount, isLoading }) {
  const numericCount = Number(count);
  return (
    <div className="flex gap-2 items-center join">
      <button
        className="flex justify-center items-center p-0 w-8 h-8 min-h-0 text-lg rounded-full btn btn-outline join-item border-[#D9176C] text-[#D9176C] hover:bg-[#D9176C] hover:text-white hover:border-[#D9176C] disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-400"
        onClick={() => setCount(numericCount + 1)}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          "+"
        )}
      </button>
      <p className="flex justify-center items-center w-8 text-xl font-semibold">
        {count}
      </p>
      <button
        className="flex justify-center items-center p-0 w-8 h-8 min-h-0 text-lg rounded-full btn btn-outline join-item border-[#D9176C] text-[#D9176C] hover:bg-[#D9176C] hover:text-white hover:border-[#D9176C] disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-400"
        onClick={() => setCount(numericCount - 1)}
        disabled={numericCount <= 1 || isLoading}
      >
        {isLoading ? (
          <span className="loading loading-spinner loading-xs"></span>
        ) : (
          "-"
        )}
      </button>
    </div>
  );
}
