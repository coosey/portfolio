import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
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