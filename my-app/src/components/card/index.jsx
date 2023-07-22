import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    // TEST CSS STYLING
    <div class="h-100% w-full m-auto md:w-1/2 lg:w-1/3 xlg:w-1/4">
      <div class="rounded-md border ml-5 mr-5 mb-10 bg-white">
        <div class="m-2 text-lg font-bold">{props?.title}</div>
        <div class="m-2 font-extralight">{props?.info}</div>
        <Link to={props.link} class="m-2 flex items-center font-normal hover:text-blue-400">
          <div class="mr-3">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </div>
          <div>{props?.linkText}</div>
        </Link>
      </div>
    </div>
  )
};