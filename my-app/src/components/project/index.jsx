import {
  Card,
  SectionTitle
} from '.././index';
import { DATA } from '../../data/projects';

export const Project = () => {
  return (
    <div class="mx-auto h-min sm:h-screen flex flex-col pt-20 pb-20">
      <SectionTitle title="Projects" width="140px" />
      <div class="flex flex-col flex-wrap items-center pb-20 sm:flex-row">
        {DATA.projects.map((project) => (
          <Card
            title={project.title}
            info={project.info}
            link={project.link}
            linkText={project.linkText}
          />
        ))}
      </div>
    </div>
  )
}