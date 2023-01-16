import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Project } from '../models/Project';
import './Sections.css';

export const Sections = ({ projects }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {projects.map((project: Project) => {
        return (
          <div
            data-aos="slide-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="600"
          >
            <img src={project.url} alt="" />
          </div>
        );
      })}
    </>
  );
};
