import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { ScrollDiscover } from './components/ScrollDiscover/ScrollDiscover';
import { DetailsNavigation } from './components/DetailsNavigation/DetailsNavigation';
import { DiscoverButton } from './components/DiscoverButton/DiscoverButton';
import { Sections } from './components/Sections/Sections';
import { Projects } from './components/models/Projects';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [mainNavigation, setMainNavigation] = useState(false);
  const [showText, setShowText] = useState(true);
  const [toggleDetails, setToggleDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState(Projects);

  // Method to handle scroll events and switch between sections
  const handleScroll = () => {
    setMainNavigation(true);
    setShowText(false);
  };

  const discoverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggleDetails(!toggleDetails);
  };

  return (
    <div className="app" onScroll={handleScroll}>
      <MainNavigation name={mainNavigation} />
      <DetailsNavigation
        toggle={toggleDetails}
        setToggleDetails={setToggleDetails}
        project={Projects[0]}
      ></DetailsNavigation>
      <Sections projects={Projects} />;{showText && <ScrollDiscover />}
      {!showText && <DiscoverButton handleClick={discoverHandler} />}
    </div>
  );
};

export default App;
