import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Icon = (props) => {
  return (
    <div className="xs:text-xs text-5xl transition duration-200 hover:scale-125">
      <Link to={props?.link} target="_blank" aria-label={props?.label}>
        <FontAwesomeIcon icon={props?.icon} />
      </Link>
    </div>
  )
}