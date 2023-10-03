import { Icon } from '.././index';
import { SOCIALS } from '../../data/socials';

export const Header = () => {
  return (
    <section className="flex flex-col justify-center text-center p-10 h-min sm:h-screen font-satoshi">
      <div className="px-6">
        <p className="text-2xl lg:text-4xl font-satoshi text-gray-900 pb-4">
          Hello, my name is
        </p>
        <p className="text-5xl md:text-8xl lg:text-9xl font-roboto font-semibold text-gray-900 pb-4 leading-[0.75]">
          Matthew Nguyen
        </p>
        <p className="text-2xl lg:text-3xl text-gray-900 font-satoshi">
          a former Scientist turned Engineer
        </p>
        <div className="flex flex-row justify-center mt-2">
          {SOCIALS?.links?.map?.((item) => (
            <div className="xs:text-xs m-3">
              <Icon icon={item?.icon} link={item?.link} label={item?.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}