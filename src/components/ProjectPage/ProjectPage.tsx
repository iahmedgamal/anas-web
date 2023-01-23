import React, { Component, useEffect, useRef, useState } from 'react';
import './ProjectPage.css';
import MenuLogo from '../../assets/menu.svg';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { HiArrowNarrowUp } from 'react-icons/hi';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { Projects } from '../models/Projects';

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
  let [currentIndex, setCurrentIndex] = useState(0);

  let [project, setProject] = useState(Projects[0]);

 
  const params = useParams();
  const id:any = params.id;


  useEffect(() => {
    if (id) {
        setProject(Projects[id]);

    }
    }, [id]);


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
    if (navRef.current) {
      navRef.current.style.width = '100px';
      navRef.current.style.borderRight = '1px solid #ffffffb4';
    }
  };

  const nextProject = (event: any) => {
    if (project.id < Projects.length-1)
      navigate(`/project/${project.id + 1}`);
  };

  const PreviousProject = (event: any) => {
    if (project.id > 0) navigate(`/project/${project.id - 1}`);
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
        {!toggle && (
          <div className="left-arrow" onClick={handlePreviousImage}>
            <BsArrowLeft></BsArrowLeft>
          </div>
        )}
        {!toggle && (
          <div>
            {currentIndex + 1} / {project.gallery.length}
          </div>
        )}

        {!toggle && (
          <div className="right-arrow" onClick={handleNextImage}>
            <BsArrowRight></BsArrowRight>
          </div>
        )}
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
            <a className="project-index">
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
