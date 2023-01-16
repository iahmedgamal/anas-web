import './Sections.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { Project } from '../models/Project';
import { DiscoverButton } from '../DiscoverButton/DiscoverButton';
import { ScrollDiscover } from '../ScrollDiscover/ScrollDiscover';

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
      <div
        data-aos="slide-up"
        data-aos-offset="300"
        data-aos-delay="200"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="top-center"
        data-aos-mirror="true"
      >
        <ScrollDiscover />
        <img src="https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/ds_6332.jpg?alt=media&token=cb76bf7c-8af5-45b3-bb8d-f65cff834125" />
      </div>
      {projects.map((project: Project) => {
        return (
          <div
            data-aos="slide-up"
            data-aos-offset="300"
            data-aos-delay="200"
            data-aos-duration="600"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
            data-aos-mirror="true"
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
