import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Section1 } from './components/Section1/Section1';
import { Section2 } from './components/Section2/Section2';
import { Section3 } from './components/Section3/Section3';
import { Section4 } from './components/Section4/Section4';
import { Section5 } from './components/Section5/Section5';
import { Section6 } from './components/Section6/Section6';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { ScrollDiscover } from './components/ScrollDiscover/ScrollDiscover';
import { DetailsNavigation } from './components/DetailsNavigation/DetailsNavigation';
import { DiscoverButton } from './components/DiscoverButton/DiscoverButton';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [mainNavigation, setMainNavigation] = useState(false);
  const [showText, setShowText] = useState(true);
  const [currentProject, setCurrentProject] = useState({
    name: 'Portraits',
    id: 1,
    time: 'April, 2020',
    description:
      'Bordering Sudan from the northen side, the city of Halayeb has\n its own distincive cultute and language; Shot digitally, this \n project primarily aims to capture the soul of the city and \n documents an annual camel trading event secondarily.',
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
  }
  
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

export default App;
