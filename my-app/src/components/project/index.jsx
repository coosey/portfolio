import {
  Card,
  SectionTitle
} from '.././index';
import { DATA } from '../../data/projects';

export const Project = () => {
  return (
    <div className="mx-auto flex flex-col pt-20 pb-20">
      <SectionTitle title="Projects" width="160px" />
      <div>
        {DATA?.projects?.map?.((project) => (
          <Card
            key={project?.key}
            title={project?.title}
            titleInfo={project?.titleInfo}
            info={project?.info}
            link={project?.link}
            linkText={project?.linkText}
          />
        ))}
      </div>
    </div>
  )
}