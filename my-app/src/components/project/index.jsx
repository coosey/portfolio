import {
  Card
} from '.././index';

export const Project = () => {
  return (
    <div class="container mx-auto flex flex-col pt-20 pb-20 sm:justify-center">
      <div>
        <h2 class="text-4xl text-left font-bold mb-5 border-b-[5px] w-[140px] border-primary pt-20">Projects</h2>
      </div>
      <div class="flex flex-wrap justify-center pt-20 pb-20 sm:flex-col">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}