import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import { Section1 } from '../Section1/Section1';
import { Section2 } from '../Section2/Section2';
import { Section3 } from '../Section3/Section3';
import { Section4 } from '../Section4/Section4';
import { Section5 } from '../Section5/Section5';
import { Section6 } from '../Section6/Section6';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { ScrollDiscover } from '../ScrollDiscover/ScrollDiscover';
import { DetailsNavigation } from '../DetailsNavigation/DetailsNavigation';
import { DiscoverButton } from '../DiscoverButton/DiscoverButton';
import { NoMatch } from '../NoMatch/NoMatch';

import { Route, Routes } from 'react-router-dom';

const MainPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [mainNavigation, setMainNavigation] = useState(false);
  const [showText, setShowText] = useState(true);
  const [currentProject, setCurrentProject] = useState({
    name: 'Portraits',
    id: 1,
    time: 'April, 2020',
    description:
      'Bordering Sudan from the northen side, the city of Halayeb has\n its own distincive cultute and language; Shot digitally, this \n project primarily aims to capture the soul of the city and \n documents an annual camel trading event secondarily.',
    gallery: [
      'https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/D85_1193-2%201.png?alt=media&token=e2eece33-28a1-4f79-ace4-290d1fe8449e',

      'https://firebasestorage.googleapis.com/v0/b/anas-558b9.appspot.com/o/WhatsApp%20Image%202022-12-27%20at%2012.55.35.jpeg?alt=media&token=33fb159a-4d87-44bc-9c16-88897f151cb9',
    ],
  });
  const [toggleDetails, setToggleDetails] = useState(false);

  // Method to handle scroll events and switch between sections
  const handleScroll = (event: { deltaY: number }) => {
    setMainNavigation(true);

    // Check if the user is scrolling up or down
    if (event.deltaY > 0) {
      // Scrolling down, switch to the next section or the first section if on the last one
      setShowText(false);
      if (currentSection < 6) {
        setCurrentSection(currentSection + 1);
      } else {
        setCurrentSection(1);
      }
    } else {
      // Scrolling up, switch to the previous section or the last section if on the first one
      if (currentSection > 1) {
        setCurrentSection(currentSection - 1);
      } else {
        setCurrentSection(6);
      }
    }
  };

  const navigationClick = (e: any) => {
    setCurrentSection(Number(e.target.id));
  };
  // Render the currently displayed section based on the state
  let displayedSection;
  if (currentSection === 1) {
    displayedSection = <Section1 />;
  } else if (currentSection === 2) {
    displayedSection = <Section2 />;
  } else if (currentSection === 3) {
    displayedSection = <Section3 />;
  } else if (currentSection === 4) {
    displayedSection = <Section4 />;
  } else if (currentSection === 5) {
    displayedSection = <Section5 />;
  } else if (currentSection === 6) {
    displayedSection = <Section6 />;
  }

  const discoverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggleDetails(!toggleDetails);
  };

  return (
    <div className="app" onWheel={handleScroll}>
      <MainNavigation name={mainNavigation} handleClick={navigationClick} />
      <DetailsNavigation
        toggle={toggleDetails}
        setToggleDetails={setToggleDetails}
        project={currentProject}
      ></DetailsNavigation>
      {displayedSection}
      {showText && <ScrollDiscover />}
      {!showText && <DiscoverButton handleClick={discoverHandler} />}
    </div>
  );
};

export default MainPage;
