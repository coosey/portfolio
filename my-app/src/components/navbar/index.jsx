import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <div class="bg-primary max-w-screen-xl shadow-md p-5 m-5 mt-0">
        <nav class="text-3xl text-white font-nav-700">
          <ul class="flex flex-row items-center w-full h-10 space-x-5 md:w-auto md:space-x-8">
            <li class="hover:text-nav">
              <Link to="/">Home</Link>
            </li>
            <li class="hover:text-nav">
              <Link to="/projects">Projects</Link>
            </li>
            <li class="hover:text-nav">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
};