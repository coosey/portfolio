import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="mx-auto p-6 grid gap-4 md:w-1/2 sm:w-[95%]">
      <div className="col-span-1 flex flex-col bg-white shadow-xl rounded-lg border-2 p-4">
        <div className="mb-2 font-bold text-2xl">{props?.title}</div>
        <div className="font-extralight mb-3">{props?.titleInfo}</div>
        <div className="font-normal">{props?.info}</div>
        <Link to={props.link} target="_blank" className="my-4 flex flex-wrap items-center font-normal hover:text-blue-400">
          <div className="mr-3">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
          <div>{props?.linkText}</div>
        </Link>
      </div>
    </div>
  )
};