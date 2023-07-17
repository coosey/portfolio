import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <div class="bg-primary max-w-screen-xl shadow-md p-6 m-6 mt-0 mb-10">
        <nav class="text-3xl text-white font-bold">
          <ul class="flex flex- h-10 items-center space-x-7">
            <li class="flex-1">
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