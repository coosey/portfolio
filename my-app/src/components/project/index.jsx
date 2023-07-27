import {
  Card,
  SectionTitle
} from '.././index';
import { DATA } from '../../data/projects';

export const Project = () => {
  return (
    <div class="mx-auto flex flex-col pt-20 pb-20">
      <SectionTitle title="Projects" width="140px" />
      <div>
        {DATA.projects.map((project) => (
          <Card
            title={project.title}
            titleInfo={project.titleInfo}
            info={project.info}
            link={project.link}
            linkText={project.linkText}
          />
        ))}
      </div>
    </div>
  )
}