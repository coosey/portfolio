import { Link } from "react-router-dom";

export const NavBarLinks = (props) => {
  return (
    <ul className={props?.ul_className}>
      <li className={props?.li_className} onClick={() => props?.setOpen && props?.setOpen(false)}>
        <Link to="/">Home</Link>
      </li>
      <li className={props?.li_className} onClick={() => props?.setOpen && props?.setOpen(false)}>
        <Link to="/experience">Experience</Link>
      </li>
      <li className={props?.li_className} onClick={() => props?.setOpen && props?.setOpen(false)}>
        <Link to="/about">About</Link>
      </li>
    </ul>
  )
}