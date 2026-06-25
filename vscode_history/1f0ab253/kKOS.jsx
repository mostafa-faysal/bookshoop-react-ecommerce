import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>logo</h1>
      </div>
      <nav className="flex my-5">
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>users</Link>
        <Link to={"/posts"}>posts</Link>
      </nav>
   </header>
  )
}
