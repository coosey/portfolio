import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div class="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <nav class="text-3xl text-gray-700 font-bold mb-5">
        <ul className="navbar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
};