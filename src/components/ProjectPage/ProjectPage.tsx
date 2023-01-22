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
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
interface MainNavigationProps {
  name: boolean;
  projectIndex?: number;
  handleClick: React.MouseEventHandler<HTMLAnchorElement>;
  // project:Project
}

export const ProjectPage: React.FC<MainNavigationProps> = ({
  name,
  handleClick,
}) => {
  const navRef = useRef<HTMLInputElement>(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  let [currentIndex, setCurrentIndex] = useState(0);

  const project: Project = {
    name: 'Portraits',
    id: 1,
    time: '2019',
    description: 'test portrait',
    gallery: [
      'https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/D85_1193-2%201.png?alt=media&token=e2eece33-28a1-4f79-ace4-290d1fe8449e',
      'https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2012.55.35.jpeg?alt=media&token=33fb159a-4d87-44bc-9c16-88897f151cb9',
    ],
  };

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
    setCurrentIndex(currentIndex - 1);
    if (currentIndex <= 0) {
      setCurrentIndex(project.gallery.length - 1);
    }
  };

  const handleNextImage = (event: any) => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex == project.gallery.length - 1) {
      setCurrentIndex(0);
    }
  };

  const closeNavigation = () => {
          setToggle(false);

  }
  return (
    <div
      data-aos="slide-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="600"
      style={{
        //TODO: change the background image by passing the project image
        backgroundImage: `url(${project.gallery[currentIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
      }}
    >
      <div className="main-buttons-container">
      {  !toggle &&<div className="left-arrow" onClick={handlePreviousImage}>
          <BsArrowLeft></BsArrowLeft>
        </div>}
        {!toggle && <div>
    
          {currentIndex + 1} / {project.gallery.length}
        </div>}

        {!toggle && <div className="right-arrow" onClick={handleNextImage}>
          <BsArrowRight></BsArrowRight>
        </div>}
      </div>

      <div ref={navRef} className={`overlay ${toggle ? 'overlay' : 'close'}`}>
        <div className="main-break-line"></div>
        <div className="project-content">
          <div className="vertical-word">
            {/* Todo: change the project name by passing the project name */}
            <button onClick={handlePreviousImage}>
              <HiArrowNarrowUp></HiArrowNarrowUp>{' '}
            </button>

            <a>{project.name}</a>
            <button onClick={handleNextImage}>
              <HiArrowNarrowDown></HiArrowNarrowDown>{' '}
            </button>

            <br></br>
            <a>
              {currentIndex + 1} / {project.gallery.length}
            </a>
          </div>
          <div>
            <div className="break-line"></div>
            <div className="btn-action">
              <a onClick={closeNavigation}>View in fullscreen</a>
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
