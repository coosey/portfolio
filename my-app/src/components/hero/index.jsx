import { Button, Icon } from '.././index';
import { SOCIALS } from '../../data/socials';

export const Hero = (props) => {
  return (
    <div className="mx-10">
      <div className="items-center w-50 h-min grid justify-between mt-10 sm:h-screen md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:text-2xl">
        <div className="sm:mb-10 xl:max-w-md">
          <img src={require("../../assets/images/option-1.png")} alt="Matthew Nguyen" className="rgw-[80%] rounded-xl drop-shadow-2xl mx-auto xl:grid-cols-2" />
        </div>
        <div className="md:ml-10 font-satoshi text-lg">
          <div className="pb-5 md:pb-0 text-lg lg:text-2xl text-center">
            <p className="pb-3 text-gray-900">
              I am a Frontend Developer & my experiences are currently specialized in aviation - developing and maintaining
              Bonza Airline's Passenger Service System and Flair Airline.
            </p>
            <p className="pb-3 text-gray-900">
              However, I am always trying to expand my knowledge and learn about new technology and explore innovative
              ways to create a better and exceptional user experience.
            </p>
          </div>
          <div className="flex flex-wrap justify-center sm:flex-col">
            <Button downloadBtn downloadBtnName="Download CSV" btnStyle />
          </div>
          {props?.socialIcons && (
            <div className="flex flex-row justify-center mt-5">
              {SOCIALS?.links?.map?.((item) => (
                <div className="mr-5">
                  <Icon icon={item?.icon} link={item?.link} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}