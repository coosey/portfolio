import { Hamburger } from "../hamburger";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 text-3xl backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-500 firefox:bg-opacity-90">
      <div className="xs:max-w-5xl md:w-[90%] mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-black">
          <img alt="My initials" className="w-[50px] h-[50px] rounded-full bg-primary" src={require("../../assets/images/mn.png")} width="50px" height="50px" />
          <ul className="font-rale font-light md:text-2xl space-x-4 hidden md:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  )
};