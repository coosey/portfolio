import { Icon } from '.././index';
import { SOCIALS } from '../../data/socials';

export const Header = () => {
  return (
    <section className="flex flex-col justify-center text-center p-10 h-min sm:h-screen font-satoshi">
      <div className="px-6">
        <p className="text-3xl lg:text-4xl font-extralight text-gray-900 pb-4">
          Hello! I'm
        </p>
        <p className="text-6xl md:text-8xl lg:text-9xl font-semibold text-gray-900 pb-4">
          Matthew Nguyen
        </p>
        <p className="text-3xl lg:text-4xl text-gray-900 font-extralight">
          a former Scientist turned Engineer
        </p>
        <div className="flex flex-row justify-center mt-5">
          {SOCIALS?.links?.map?.((item) => (
            <div className="xs:text-lg m-3">
              <Icon icon={item?.icon} link={item?.link} label={item?.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}