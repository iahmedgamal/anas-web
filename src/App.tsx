import React, {  useEffect, useRef, useState  } from 'react';
import './App.css';
import { Section1 } from './components/Section1/Section1';
import { Section2 } from './components/Section2/Section2';
import { Section3 } from './components/Section3/Section3';
import { MainNavigation } from './components/MainNavigation/MainNavigation';

const App : React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
const [mainNavigation, setMainNavigation] = useState(false);


  // Method to handle scroll events and switch between sections
  const handleScroll = (event: { deltaY: number; }) => {
    setMainNavigation(true)
    
    // Check if the user is scrolling up or down
    if (event.deltaY > 0) {
      // Scrolling down, switch to the next section or the first section if on the last one
      if (currentSection < 3) {
          setCurrentSection(currentSection + 1)
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
  }

  // Render the currently displayed section based on the state
  let displayedSection;
  if (currentSection === 1) {
    displayedSection = <Section1 />;
  } else if (currentSection === 2) {
    displayedSection = <Section2 />;
  } else if (currentSection === 3) {
    displayedSection = <Section3 />;
  }

  return (
    <div className='app' onWheel={handleScroll}>
      <MainNavigation name={mainNavigation}></MainNavigation>
      {displayedSection}
    </div>
  );
}

export default App;