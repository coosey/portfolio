import { Link } from "react-router-dom";
import { Hamburger } from "../hamburger";

export const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 text-3xl backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-500 firefox:bg-opacity-90">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-gray-900">
          <span className="text-3xl shrink-0 font-semibold">Matthew Nguyen</span>
          <ul className="space-x-4 hidden md:flex">
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
          <Hamburger />
        </div>
      </div>
    </nav>
  )
};