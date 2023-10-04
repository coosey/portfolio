import * as Component from '../../components/index.js';
import { SectionTitle } from '../../components/index';

const Experience = () => {

  return (
    <div className="container m-auto flex flex-col pt-20 pb-20">
      <SectionTitle title="Work Experience" />
      <div className="font-satoshi m-auto ml-5 mr-5 flex flex-col flex-wrap p-4 text-justify">
        <Component.Timeline />
      </div>
      <Component.Skills />
      <Component.Project />
    </div>
  )
};

export default Experience;