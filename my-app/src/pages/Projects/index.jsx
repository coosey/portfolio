import {
  Project
} from '../../components/index.js';
import { SectionTitle } from '../../components/index';

const Projects = () => {

  return (
    <div className="container m-auto">
      <div className="flex justify-center pb-20">
        <SectionTitle title="Experiences" width="220px" />
      </div>
      <div className="font-satoshi m-auto ml-5 mr-5 bg-white flex flex-col flex-wrap rounded-md border p-4 text-justify">
        <div className="font-bold mb-5 text-xl">
          Frontend Developer @777 Partners <span className="italic font-light">(Mar 2022 - present)</span>
        </div>
        <div>
          <ul className="mx-3 list-disc text-left text-lg">
            <li className="py-2">
              Developed Bonza Airline’s Passenger Service System that is used by admins & travel agents to help book flights & manage
              bookings for thousands of Australian customers
            </li>
            <li className="py-2">
              Implemented layered architecture that separates data and business logic to improve maintainability and create modular,
              scalable React components for future reuse
            </li>
            <li className="py-2">
              Integrated internal SDK with backend API to modify or allow specific functionality of booking/management flow
            </li>
            <li className="py-2">
              Lead booking management & booking flow development process from concept to production while working alongside with
              business analysts, product managers, and developers
            </li>
          </ul>
        </div>
      </div>
      <Project />
    </div>
  )
};

export default Projects;