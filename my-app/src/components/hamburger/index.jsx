
export const Hamburger = () => {
  return (
    <div className="items-center flex md:hidden">
      <button id="hamburger-btn" className="relative group">
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[30px] h-[30px] transform transition-all bg-primary ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[15px] h-[15px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className="bg-white h-[2px] w-4 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
            <div className="bg-white h-[2px] w-4 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
            <div className="bg-white h-[2px] w-4 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>
            <div className="absolute items-center justify-between transform transition-all duration-500 top-2 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
              <div className="absolute bg-white h-[2px] w-4 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
              <div className="absolute bg-white h-[2px] w-4 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}