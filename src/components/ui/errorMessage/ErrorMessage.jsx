export default function ErrorMessage({ message, height = "100%" }) {
  return (
    <div
      className="flex justify-center items-center text-red-500 font-bold w-full"
      style={{ height: height }}
    >
      {message}
    </div>
  );
}
