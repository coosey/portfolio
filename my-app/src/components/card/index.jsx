import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div class="mx-auto p-6 grid gap-4 sm:w-1/2">
      <div class="col-span-1 flex flex-col bg-white shadow-xl rounded-lg border-2 p-4 text-justify">
        <div class="mb-2 font-bold text-2xl">{props?.title}</div>
        <div class="font-extralight mb-3">{props?.titleInfo}</div>
        <div class="font-normal">{props?.info}</div>
        <Link to={props.link} target="_blank" class="my-4 flex flex-wrap items-center font-normal hover:text-blue-400">
          <div class="mr-3">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
          <div>{props?.linkText}</div>
        </Link>
      </div>
    </div>
  )
};