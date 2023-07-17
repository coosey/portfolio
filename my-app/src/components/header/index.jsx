import { Icon } from '.././index';
import { SOCIALS } from '../../data/socials';

export const Header = () => {
  return (
    <section class="text-center px-5 py-5 sm:flex justify-center">
      <div class="pb-5 md:pb-0">
        <p class="text-3xl lg:text-4xl pb-4">
          Hello! My name is
        </p>
        <p class="text-6xl pb-4">
          Matthew Nguyen
        </p>
        <p class="text-2xl sm:text-2xl">
          I'm a former Scientist turned Engineer
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