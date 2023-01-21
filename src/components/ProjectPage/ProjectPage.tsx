import React, { Component, useEffect, useRef, useState } from 'react';
import './ProjectPage.css';
import MenuLogo from '../../assets/menu.svg';
import { Project } from '../models/Project';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { HiArrowNarrowDown } from 'react-icons/hi';
interface MainNavigationProps {
  name: boolean;
  projectIndex?: number;
  handleClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export const ProjectPage: React.FC<MainNavigationProps> = ({
  name,
  handleClick,
}) => {
  const navRef = useRef<HTMLInputElement>(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setToggle(true);
      navRef.current.style.width = '100px';
      navRef.current.style.borderRight = '1px solid #ffffffb4';
    }
  }, []);

  const toggleNav = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(!toggle);
    console.log('toggle', toggle);
    if (navRef.current) {
      navRef.current.style.width = '100px';
      navRef.current.style.borderRight = '1px solid #ffffffb4';
    }
  };

  const nextProject = (event: any) => {
    console.log('next project');
    //TODO: change the project id by passing the project id and increment it
    // navigate('/project/2');
  };

  const PreviousProject = (event: any) => {
    console.log('Previous project');
    //TODO: change the project id by passing the project id and decrement it
    // navigate('/project/2');
  };

  const handlePreviousImage = (event: any) => {
    console.log('Previous image');
  };

  const handleNextImage = (event: any) => {
    console.log('Next image');
    //TODO: handle next image handle
  };

  return (
    <div
      data-aos="slide-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="600"
      style={{
        //TODO: change the background image by passing the project image
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/ds_6332.jpg?alt=media&token=cb76bf7c-8af5-45b3-bb8d-f65cff834125')`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
      }}
    >
      <div ref={navRef} className={`overlay ${toggle ? 'overlay' : 'close'}`}>
        <div className="main-break-line"></div>
        <div className="project-content">
          <div className="vertical-word">
            {/* Todo: change the project name by passing the project name */}
            <button onClick={handlePreviousImage}>
              <HiArrowNarrowUp></HiArrowNarrowUp>{' '}
            </button>

            <a>Project Name</a>
            <button onClick={handleNextImage}>
              {' '}
              <HiArrowNarrowDown></HiArrowNarrowDown>{' '}
            </button>

            <br></br>
            <a>1 / 10</a>
          </div>
          <div>
            <div className="break-line"></div>
            <div className="btn-action">
              <a>View in fullscreen</a>
            </div>
            <div className="break-line"></div>
            <div className="btn-action">
              <a onClick={PreviousProject}>Previous project</a>
            </div>
            <div className="break-line"></div>
            <div className="btn-action">
              <a onClick={nextProject}>Next project</a>
            </div>
          </div>
        </div>
      </div>

      <span className="humbugger-menu" onClick={toggleNav}>
        <img src={MenuLogo} className="projectNavImg" alt="Menu Logo" />
      </span>
    </div>
  );
};
