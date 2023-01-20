import './Sections.css';
import { Project } from '../models/Project';
import { DiscoverButton } from '../DiscoverButton/DiscoverButton';
import { ScrollDiscover } from '../ScrollDiscover/ScrollDiscover';

type Props = {
  projects: Array<Project>;
  handleDiscover: React.MouseEventHandler<HTMLButtonElement>;
};

export const Sections = ({ projects, handleDiscover }: Props) => {
  return (
    <div className="section">
      <ScrollDiscover />
      {projects.map((project: Project) => {
        return (
          <div id={project.name} key={project.id}>
            <img src={project.url} />
            <DiscoverButton
              handleClick={handleDiscover}
              id={String(project.id)}
            />
          </div>
        );
      })}
    </div>
  );
};
