import './Sections.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Project } from '../models/Project';
import { DiscoverButton } from '../DiscoverButton/DiscoverButton';

type Props = {
  projects: Array<Project>;
  handleDiscover: React.MouseEventHandler<HTMLButtonElement>;
};

export const Sections = ({ projects, handleDiscover }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="section">
      {projects.map((project: Project) => {
        return (
          <div
            data-aos="slide-up"
            data-aos-offset="250"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            id={project.name}
            key={project.id}
          >
            <img src={project.url} />
            <DiscoverButton handleClick={handleDiscover} />
          </div>
        );
      })}
    </div>
  );
};
