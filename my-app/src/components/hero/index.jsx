import { Button, Icon } from '.././index';
import { SOCIALS } from '../../data/socials';

export const Hero = (props) => {
  return (
    <div className="m-auto py-20 lg:px-20">
      <div className="items-start h-min grid justify-between mt-10 lg:grid-cols-2 xl:text-2xl">
        <div className="p-3 md:p-15">
          <img src={require("../../assets/images/option-1.png")} alt="Matthew Nguyen" width="auto" height="auto" className="rgw-[85%] rounded-xl drop-shadow-2xl mx-auto" />
        </div>
        <div className="py-1 px-2 lg:ml-10 text-lg">
          <div className="text-black text-[1.15rem] text-center font-montserrat leading-normal">
            <p className="px-3 py-2">
              I am a Frontend Developer & my experiences are currently specialized in aviation - I have previously developed Bonza Airline's Passenger Service System, and now I am currently maintaining
              or creating new features for Flair Airline.
            </p>
            <p className="px-3 py-2">
              When I am not working on fixing bugs or new features, I love to expand my knowledge and learn more about new technology, discover better ways to improve my code, and explore innovative
              ways to create a better and exceptional user experience.
            </p>
          </div>
          <div className="pt-5 flex flex-wrap justify-center">
            <Button downloadBtn downloadBtnName="Download CSV" btnStyle />
          </div>
          {props?.socialIcons && (
            <div className="flex flex-row justify-center py-3">
              {SOCIALS?.links?.map?.((item) => (
                <div className="text-center px-3 py-5">
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