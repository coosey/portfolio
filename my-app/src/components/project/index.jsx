import {
  Card,
  SectionTitle
} from '.././index';
import { DATA } from '../../data/experience';

export const Project = () => {
  return (
    <div className="mx-auto flex flex-col pt-20 pb-20">
      <SectionTitle title="Experiences" />
      <div>
        {DATA?.experience?.map?.((project) => (
          <Card
            key={project?.key}
            title={project?.title}
            titleInfo={project?.titleInfo}
            info={project?.info}
            link={project?.link}
            linkText={project?.linkText}
            image={project?.image}
            technology={project?.technology}
          />
        ))}
      </div>
    </div>
  )
}