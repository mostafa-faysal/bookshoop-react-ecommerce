import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">Error404!</h1>
      <p className="font-semibold">Not found page..</p>
      <Link className="btn btn-active btn-secondary text-[16px] my-5">
        Back
      </Link>
    </div>
  );
}
