import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div class="container mx-auto">
      <div class="bg-primary rounded-xl shadow-md p-6 m-6 mt-0 mb-10">
        <nav class="text-3xl text-white font-bold">
          <ul class="relative flex h-10 items-center space-x-7">
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
    </div>
  )
};