
export const Hero = () => {
  return (
    // <div class="container mx-auto">
    //   <div class="flex justify-around flex-nowrap sm:flex-wrap">
    //     <div class="max-w-md rounded overflow-hidden">
    //       <img src={require("../../assets/images/profile.png")} alt="Matthew Nguyen" />
    //     </div>
    //     <div class="bg-white-100 w-1/2 rounded-md shadow-md border">
    //       <div class="p-3 m-2 text-left">
    //         Hi! My name is Matthew Nguyen and I'm a former scientist turned engineer
    //         My experiences are currently specialized in aviation - developing and maintaining an airline PSS system,
    //         however I am always trying to expand my knowledge and learn about new technology and exploring innovative
    //         ways to create a better and exceptional user experience.
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div class="container mx-auto items-center grid md:grid-cols-2 md:justify-between lg:grid-cols-2 xl:grid-cols-2">
      <div class="xl:max-w-md">
        <img src={require("../../assets/images/profile.png")} alt="Matthew Nguyen" class="rgw-[80%] md:mx-auto" />
      </div>
      <div class="">
        <p class="pb-5">
          Hi! My name is Matthew Nguyen and I'm a former scientist turned engineer.
        </p>
        <p class="pb-5">
          I am a Frontend Developer and my experiences are currently specialized in aviation - developing and maintaining
          an airline PSS system.
        </p>
        <p class="pb-5">
          However, I am always trying to expand my knowledge and learn about new technology and exploring innovative
          ways to create a better and exceptional user experience.
        </p>
      </div>
    </div>
  )
}