import { Icon } from '.././index';
import { SOCIALS } from '../../data/socials';

export const Header = () => {
  return (
    <section class="flex flex-col justify-center text-center px-5 py-5 h-min sm:h-screen">
      <div class="pb-5 md:pb-0">
        <p class="text-3xl lg:text-4xl pb-4 font-nav-light">
          Hello! I'm
        </p>
        <p class="text-6xl md:text-7xl lg:text-8xl pb-4 font-medium">
          Matthew Nguyen
        </p>
        <p class="text-3xl lg:text-4xl font-nav-light">
          a former Scientist turned Engineer
        </p>
        <div class="flex flex-row justify-center mt-5">
          {SOCIALS?.links?.map((item) => (
            <div class="mr-5">
              <Icon icon={item?.icon} link={item?.link} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}