import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>logo</h1>
      </div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Linkink to={"/users"}>users</Link>
        <Linkink to={"/posts"}>posts</Link>
      </nav>
   </header>
  )
}
