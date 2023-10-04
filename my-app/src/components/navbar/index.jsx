import { Hamburger } from "../hamburger";
import { NavBarLinks } from "../navbar-links";

const hover = "relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center";

export const NavBar = () => {
  return (
    <nav className="sticky top-0 z-10 text-3xl backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-500 firefox:bg-opacity-90">
      <div className="xs:max-w-5xl md:w-[90%] mx-auto px-4">
        <div className="flex items-center justify-between h-16 text-black">
          <img alt="My initials" className="w-[50px] h-[50px] rounded-full bg-primary" src={require("../../assets/images/mn.png")} width="50px" height="50px" />
          <NavBarLinks
            ul_className="font-rale font-light md:text-2xl space-x-4 hidden md:flex"
            li_className={hover}
          />
          <div className="md:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
    </nav>
  )
};