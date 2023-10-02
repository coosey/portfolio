import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
  return (
    <section className="mx-auto p-6 grid gap-4 lg:w-[80%] sm:w-[95%]">
      <div className="col-span-1 flex flex-col bg-white shadow-xl rounded-lg border-2 p-4">
        <div className="flex flex-row justify-between items-center pb-[20px]">
          <div className="font-satoshi font-bold text-2xl">{props?.title}</div>
          <div className="xs:w-1/4 w-1/5 flex justify-end">
            <img src={props?.image} alt={props?.title} className="max-h-[2.5rem]" />
          </div>
        </div>
        <div className="font-rale font-light text-lg mb-3">{props?.titleInfo}</div>
        <div className="font-normal font-rale text-lg">{props?.info}</div>
        <div className="my-4 w-fit flex flex-wrap items-center font-extralight font-rale hover:text-blue-400 hover:underline underline-offset-2">
          <a className="mr-2" href={props?.link} target="_blank" rel="noreferrer">{props?.linkText}</a>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
        <div className="flex flex-row flex-wrap gap-2">
          {props?.technology?.map?.((name) => (
            <div className="flex justify-start md:mb-2 text-start">
              <div className="font-light font-rale inline-block bg-neutral-200 my-2 pb-1.5 px-4 pt-1.5 rounded-full text-xs">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};