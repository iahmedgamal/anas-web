import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Section1 } from './components/Section1/Section1';
import { Section2 } from './components/Section2/Section2';
import { Section3 } from './components/Section3/Section3';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { ScrollDiscover } from './components/ScrollDiscover/ScrollDiscover';
import { DetailsNavigation } from './components/DetailsNavigation/DetailsNavigation';
const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [mainNavigation, setMainNavigation] = useState(false);
  const [showText, setShowText] = useState(true);
  const [currentProject, setCurrentProject] = useState( {
      name: 'Portraits',
      id: 1,
    });
    const [toggleDetails, setToggleDetails] = useState(false);


  // Method to handle scroll events and switch between sections
  const handleScroll = (event: { deltaY: number }) => {
    setMainNavigation(true);

    // Check if the user is scrolling up or down
    if (event.deltaY > 0) {
      // Scrolling down, switch to the next section or the first section if on the last one
      setShowText(false);
      if (currentSection < 3) {
        setCurrentSection(currentSection + 1);
      } else {
        setCurrentSection(1);
      }
    } else {
      // Scrolling up, switch to the previous section or the last section if on the first one
      if (currentSection > 1) {
        setCurrentSection(currentSection - 1);
      } else {
        setCurrentSection(3);
      }
    }
  };

  // Render the currently displayed section based on the state
  let displayedSection;
  if (currentSection === 1) {
    displayedSection = <Section1 />;
  } else if (currentSection === 2) {
    displayedSection = <Section2 />;
  } else if (currentSection === 3) {
    displayedSection = <Section3 />;
  }

  const discoverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggleDetails(!toggleDetails);
  }
  
  return (
    <div className="app" onWheel={handleScroll}>
      <button className="btn-open" onClick={discoverHandler}>
        discover
      </button>
      <MainNavigation name={mainNavigation}></MainNavigation>
      <DetailsNavigation
        toggle={toggleDetails}
        project={currentProject}
      ></DetailsNavigation>
      {displayedSection}
      {showText && <ScrollDiscover />}
    </div>
  );
};

export default App;
