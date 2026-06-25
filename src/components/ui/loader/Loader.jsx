export default function Loader({ height = "100%" }) {
  return (
    <div
      className="flex justify-center items-center w-full"
      style={{ height: height }}
    >
      <span className="loading loading-spinner bg-[#D9176C]"></span>
    </div>
  );
}
