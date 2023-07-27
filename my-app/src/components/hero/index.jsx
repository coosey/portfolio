import { Button } from '.././index';

export const Hero = () => {
  return (
    <div class="items-center h-min grid justify-between mt-20 sm:h-screen md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:text-2xl">
      <div class="sm: mb-10 xl:max-w-md">
        <img src={require("../../assets/images/option-1.png")} alt="Matthew Nguyen" class="rgw-[80%] rounded-xl drop-shadow-2xl mx-auto xl:grid-cols-2" />
      </div>
      <div class="text-lg font-pd-400 md:text-xl ml-10">
        <div class="pb-5 md:pb-0">
          <p class="pb-3">
            I am a Frontend Developer & my experiences are currently specialized in aviation - developing and maintaining
            Bonza Airline's Passenger Service System and Flair Airline.
          </p>
          <p class="pb-3">
            However, I am always trying to expand my knowledge and learn about new technology and explore innovative
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