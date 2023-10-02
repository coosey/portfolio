import { Button, Icon } from '.././index';
import { SOCIALS } from '../../data/socials';

export const Hero = (props) => {
  return (
    <div className="md:px-15 lg:px-20">
      <div className="items-center h-min grid justify-between mt-10 sm:h-screen lg:grid-cols-2 xl:text-2xl">
        <div className="p-3 xs:mb-10 md:p-15 xl:max-w-lg">
          <img src={require("../../assets/images/option-1.png")} alt="Matthew Nguyen" className="rgw-[85%] rounded-xl drop-shadow-2xl mx-auto xl:grid-cols-2" />
        </div>
        <div className="py-1 lg:ml-10 text-lg">
          <div className="text-black text-lg md:text-xl text-center font-montserrat">
            <p className="px-3 py-2">
              I am a Frontend Developer & my experiences are currently specialized in aviation - developing and maintaining
              Bonza Airline's Passenger Service System and Flair Airline.
            </p>
            <p className="px-3 py-2">
              When I am not working on fixing bugs or working on new features, I love to expand my knowledge and learn more about new technology, discover better ways to improve my code, and explore innovative
              ways to create a better and exceptional user experience.
            </p>
          </div>
          <div className="pt-5 flex flex-wrap justify-center sm:flex-col">
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