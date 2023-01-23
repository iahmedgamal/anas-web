import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../models/Project';
import './DetailsNavigation.css';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Back from '../../assets/back.svg';

interface DetailsNavigationProps {
  project: Project;
  toggle: boolean;
  setToggleDetails: (toggle: boolean) => void;
}

export const DetailsNavigation: React.FC<DetailsNavigationProps> = ({
  project,
  toggle,
  setToggleDetails,
}) => {
  const navRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const closeHandler = () => {
    setToggleDetails(false);
  };

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
            <div className="details-content">
              <div>
                <div className="details-time">{project.time}</div>
                <div className="details-title">{project.name}</div>
                <div className="divider" />
                <div className="details-description">{project.description}</div>
              </div>
              <div className="buttons">
                <button className="back-btn">
                  <img
                    src={Back}
                    alt="back icon"
                    className="back-icon"
                    onClick={closeHandler}
                  />
                  Back
                </button>
                <button className="more-btn">More</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
