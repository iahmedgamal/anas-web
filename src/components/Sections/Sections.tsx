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
    <div className="section">
      {projects.map((project: Project) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            id={project.name}
          >
            <img src={project.url} />
          </div>
        );
      })}
    </div>
  );
};
