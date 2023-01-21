import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../models/Project';
import './DetailsNavigation.css';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Back from '../../assets/back.svg';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeHandler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeHandler = () => {
    setToggleDetails(false);
  };

  const moreHandler = () => {
    setToggleDetails(!toggle);
    navigate('/project/1');
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
                <button className="more-btn" onClick={moreHandler}>
                  More
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
function componentDidMount() {
  throw new Error('Function not implemented.');
}
