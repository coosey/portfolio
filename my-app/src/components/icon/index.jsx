import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Icon = (props) => {
  return (
    <div class="text-5xl transition duration-200 hover:scale-125">
      <Link to={props.link} target="_blank">
        <FontAwesomeIcon icon={props?.icon} />
      </Link>
    </div>
  )
}