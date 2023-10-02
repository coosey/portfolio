import { useState } from "react";
import { HamburgerOpen } from "../hamburger-open";

export const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="items-center flex md:hidden">
        <button className="relative group flex flex-col justify-center items-center" onClick={() => setOpen(!open)}>
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all bg-primary ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-4 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
              <div className="bg-white h-[2px] w-4 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
              <div className="bg-white h-[2px] w-4 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
            </div>
          </div>
        </button>
      </div>
      {
        open && (
          <HamburgerOpen setOpen={setOpen} open={open} />
        )
      }
    </div>
  )
}