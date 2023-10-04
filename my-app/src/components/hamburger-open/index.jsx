// import { Link } from "react-router-dom";
import { NavBarLinks } from "../navbar-links";

export const HamburgerOpen = (props) => {
  return (
    <div className={`${props?.open ? 'block absolute flex flex-col bg-secondary w-full h-[100vh] top-[0px] left-[0] z-10 text-black p-[1.5rem] font-rale' : 'hidden'}`}>
      <div className="flex justify-end">
        <button type="button" className="text-white rounded-lg text-sm w-[15px] h-[15px] justify-center items-center" onClick={() => props?.setOpen(false)}>
          <svg classNames="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>
      <NavBarLinks 
        ul_className="flex flex-col justify-center items-center pt-[3rem] text-center gap-[3rem] text-white my-8 uppercase font-light"
        li_className="pb-10 md:pb-0"
        setOpen={props?.setOpen}
      />
    </div>
  )
}