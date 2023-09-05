import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <div className="bg-primary max-w-screen-xl shadow-md p-5 m-5 mt-0">
        <nav className="text-3xl text-white font-nav-700">
          <ul className="flex flex-row items-center w-full h-10 space-x-5 md:w-auto md:space-x-8">
            <li className="hover:text-nav">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-nav">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-nav">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
};