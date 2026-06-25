import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <h1>logo</h1>
      </div>
      <nav>
        <Link to={"/"}>Home</Link>
        <link to={"/posts"}>posts</link>
        <link to={"/users"}>users</link>
      </nav>
   </header>
  )
}
