import {
  Button
} from '.././index';

export const Hero = () => {
  return (
    <div class="container mx-auto items-center grid md:grid-cols-2 justify-between lg:grid-cols-2 xl:grid-cols-2 xl:text-2xl">
      <div class="xl:max-w-md">
        <img src={require("../../assets/images/profile.png")} alt="Matthew Nguyen" class="rgw-[80%] md:mx-auto xl:grid-cols-2" />
      </div>
      <div class="sm:mt-10 ml-10">
        <div class="pb-5 md:pb-0">
          <p class="pb-3">
            I am a Frontend Developer & my experiences are currently specialized in aviation - developing and maintaining
            an airline PSS system.
          </p>
          <p class="pb-3">
            However, I am always trying to expand my knowledge and learn about new technology and exploring innovative
            ways to create a better and exceptional user experience.
          </p>
        </div>
        <div class="flex flex-wrap justify-around sm:flex-col">
          <Button btnName="Download CSV" />
          <Button btnName="Let's chat!" />
        </div>
      </div>
    </div>
  )
}