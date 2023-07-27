import {
  Project
} from '../../components/index.js';
import { SectionTitle } from '../../components/index';

export const Projects = () => {
  return (
    <div class="container m-auto">
      <div class="flex justify-center pb-20">
        <SectionTitle title="Experiences" width="210px" />
      </div>
      <div class="m-auto ml-5 mr-5 bg-white flex flex-col flex-wrap rounded-md border p-4 text-justify">
        <div class="font-bold mb-5 text-xl font-roboto">
          Frontend Developer @777 Partners <span class="italic font-light">(Mar 2022 - present)</span>
        </div>
        <div>
          • Developed Bonza Airline’s Passenger Service System that is used by admins & travel agents to help book flights & manage
          bookings for thousands of Australian customers <br />
          • Implemented layered architecture that separates data and business logic to improve maintainability and create modular,
          scalable React components for future reuse <br />
          • Integrated internal System Design Kit with backend API to modify or allow specific functionality of booking/management flow <br />
          • Lead booking management & booking flow development process from concept to production while working alongside with
          business analysts, product managers, and developers <br />
        </div>
      </div>
      <Project />
    </div>
  )
};