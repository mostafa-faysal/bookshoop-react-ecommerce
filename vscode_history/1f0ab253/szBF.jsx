import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>logo</h1>
      </div>
      <nav className="flex m-4 f">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/users"}>users</NavLink>
        <NavLink to={"/posts"}>posts</NavLink>
      </nav>
   </header>
  )
}
