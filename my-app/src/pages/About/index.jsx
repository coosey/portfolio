import {
  Button
} from '../../components/button';

export const About = () => {
  return (
    <div class="mx-auto p-6">
      <div class="h-screen">
        <div class="text-white p-5 text-gray-600 text-lg font-jet">
          <p class="py-5 text-center">
            I am a Frontend Developer with almost 2 years of experience within the aviation industry
          </p>
          <p class="pb-5 text-center">
            I am highly motivated and results-oriented, and I am always looking forward to learning new things to improve myself as a developer!
          </p>
          <p class="pb-5 text-center">
            In my spare time, I enjoy finding new restaurants to eat at, playing games with friends, and working out!
          </p>
          <p class="pb-5 text-center">
            If you have any questions, please feel free to email me at itsmatthewnguyen@gmail.com
          </p>
        </div>
        <div class="flex flex-wrap justify-center">
          <Button btnName="Download CSV" />
          <Button btnName="Let's chat!" />
        </div>
      </div>
    </div>
  )
};