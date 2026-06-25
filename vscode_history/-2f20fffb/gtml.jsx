import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <>
      <header>dashboard header</header>
      <Outlet />
    </>
  );
}
