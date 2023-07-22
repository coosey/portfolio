import {
  Button
} from '../../components/button';

export const About = () => {
  return (
    <div class="container m-auto">
      <div class="h-screen">
        <div class="bg-white p-5 shadow-lg rounded text-gray-600 text-lg">
          <p class="pb-5">
            My name is Matthew Nguyen and I am passionate about software development. I have been working in the tech industry for 1 year with experience in Front End development.
          </p>
          <p class="pb-5">
            I am highly motivated and results-oriented, and I am always looking forward to learning new things to improve myself as a developer!
          </p>
          <p>
            In my spare time, I enjoy finding new restaurants to eat at, playing games with friends, and working out.
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