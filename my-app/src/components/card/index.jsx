import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="mx-auto p-6 grid gap-4 lg:w-[80%] md:w-[95%] sm:w-[95%]">
      <div className="col-span-1 flex flex-col bg-white shadow-xl rounded-lg border-2 p-4">
        <div>
          {/* <div className="relative w-16">
            <img src={require(props?.img?.src)} alt='derp' className="rgw-[80%] rounded-xl drop-shadow-2xl mx-auto xl:grid-cols-2" />
            <img src={require('../../assets/images/flyflair.png')} alt="fly flair" className="rounded-full border border-gray-100 shadow-sm" />
          </div> */}
          <div className="mb-2 font-bold text-2xl">{props?.title}</div>
        </div>
        <div className="font-extralight text-lg mb-3">{props?.titleInfo}</div>
        <div className="font-normal text-lg">{props?.info}</div>
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