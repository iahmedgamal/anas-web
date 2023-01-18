import React, { Component, useEffect, useRef, useState } from 'react';
import './MainNavigation.css';
import MenuLogo from '../../assets/menu.svg';
import { Project } from '../models/Project';
import { Projects } from '../models/Projects';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
interface MainNavigationProps {
  name: boolean;
  projectIndex?: number;
}

export const MainNavigation: React.FC<MainNavigationProps> = ({ name }) => {
  const navRef = useRef<HTMLInputElement>(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (navRef.current && name) {
      setToggle(true);
      navRef.current.style.width = '64px';
      navRef.current.style.borderRight = '1px solid #ffffffb4';
    }
  }, [name]);

  const toggleNav = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggle(!toggle);
    console.log('toggle', toggle);
    if (navRef.current) {
      navRef.current.style.width = '64px';
      navRef.current.style.borderRight = '1px solid #ffffffb4';
    }
  };

  const renderProjects = () => {
    return Projects.map((project) => {
      return (
        <div className="vertical" key={project.id}>
          <a href={`#${project.name}`} id={String(project.id)}>
            {project.name}
          </a>
        </div>
      );
    });
  };

  return (
    <div>
      <div ref={navRef} className={`overlay ${toggle ? 'overlay' : 'close'}`}>
        <div className="vertical-line"></div>
        <div className="overlay-content">{renderProjects()}</div>
      </div>

      <span className="humbugger-menu" onClick={toggleNav}>
        <img src={MenuLogo} className="mainNavImg" alt="Menu Logo" />
      </span>
    </div>
  );
};
