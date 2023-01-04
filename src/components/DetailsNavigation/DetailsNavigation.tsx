import React, {  useEffect, useRef, useState } from 'react';
import { Project } from '../models/Project';
import './DetailsNavigation.css';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

interface DetailsNavigationProps {
  project: Project;
  toggle: boolean;
}

export const DetailsNavigation: React.FC<DetailsNavigationProps> = ({
  project,
  toggle,
}) => {
  const navRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <div>
      {toggle && (
        <>
          <div
            ref={navRef}
            className="details-navigation"
            data-aos="slide-right"
            data-aos-delay="100"
          >
            <div className="overlay-content">{project.name}</div>
          </div>
        </>
      )}
    </div>
  );
};
