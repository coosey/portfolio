import {
  Project
} from '../../components/index.js';
import { SectionTitle } from '../../components/index';

export const Projects = () => {
  return (
    <div class="container m-auto">
      <div class="flex justify-center">
        <SectionTitle title="Experiences" width="210px" />
      </div>
      <div class="m-auto ml-5 mr-5 bg-white flex flex-col flex-wrap rounded-md border p-2">
        <div class="font-bold mb-5 text-lg">
          Frontend Developer @777 Partners <span class="italic font-light">(Mar 2022 - present)</span>
        </div>
        <div>
          • Developed Bonza Airline's PSS that is used by admins and travel agents to book/manage flights that generated over 600k AUD within first week of launch <br />
          • Constructed React components to be agnostic to be reusable in future implementations <br />
          • Integrated internal SDK with backend API to modify specific functions based on flight data, statuses, availability and passenger booking information <br />
          • Maintained Airline’s PSS  by releasing 20+ new features with quick and efficient turnaround time <br />
        </div>
      </div>
      <Project />
    </div>
  )
};