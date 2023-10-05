import { Icon } from '.././index';
import { SOCIALS } from '../../data/socials';

export const Header = () => {
  return (
    <section className="flex flex-col justify-center text-center py-20 px-10 h-min sm:h-screen">
      <div className="px-6">
        <p className="text-2xl lg:text-4xl font-roboto text-gray-900 pb-3">
          Hello, my name is
        </p>
        <p className="text-6xl md:text-8xl lg:text-9xl font-roboto font-semibold text-gray-900 pb-4 leading-[0.75]">
          Matthew Nguyen
        </p>
        <p className="text-xl lg:text-3xl text-gray-900 font-roboto">
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