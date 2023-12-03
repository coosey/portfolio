import { Icon } from "../index";
import { SOCIALS } from '../../data/socials';

export const Footer = () => {
  return (
    <footer className="bg-primary m-auto text-white text-center p-6 h-min-full">
      <span>Matthew Nguyen © 2023 | all rights reserved</span>
      <div className="flex flex-row justify-center mt-2">
          {SOCIALS?.links?.map?.((item, idx) => (
            <div key={idx} className="xs:text-xs m-3">
              <Icon icon={item?.icon} link={item?.link} label={item?.label} />
            </div>
          ))}
        </div>
    </footer>
  )
}