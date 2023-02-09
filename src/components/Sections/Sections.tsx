import './Sections.css';
import { Project } from '../models/Project';
import { DiscoverButton } from '../DiscoverButton/DiscoverButton';

type Props = {
  projects: Array<Project>;
  handleDiscover: React.MouseEventHandler<HTMLButtonElement>;
  setShowTex: any;
};

export const Sections = ({ projects, handleDiscover, setShowTex }: Props) => {
  return (
    <>
      <div className="section" onScroll={() => setShowTex(false)}>
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
    </>
  );
};
