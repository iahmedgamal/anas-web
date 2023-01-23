import './Sections.css';
import { Project } from '../models/Project';
import { DiscoverButton } from '../DiscoverButton/DiscoverButton';
import { ScrollDiscover } from '../ScrollDiscover/ScrollDiscover';
import { useState } from 'react';

type Props = {
  projects: Array<Project>;
  handleDiscover: React.MouseEventHandler<HTMLButtonElement>;
};

export const Sections = ({ projects, handleDiscover }: Props) => {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && <ScrollDiscover />}
      <div className="section" onScroll={() => setShow(false)}>
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
