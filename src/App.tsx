import './App.css';
import React, { useEffect, useState } from 'react';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { ScrollDiscover } from './components/ScrollDiscover/ScrollDiscover';
import { DetailsNavigation } from './components/DetailsNavigation/DetailsNavigation';
import { Sections } from './components/Sections/Sections';
import { Projects } from './components/models/Projects';

const App: React.FC = () => {
  const [mainNavigation, setMainNavigation] = useState(false);
  const [showText, setShowText] = useState(true);
  const [toggleDetails, setToggleDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState(Projects);

  // Method to handle scroll events and switch between sections
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setMainNavigation(true);
    setShowText(false);
    if (event.type === 'scroll')
      console.log(document.documentElement.scrollTop);
  };

  useEffect(() => {
    setShowText(false);

    return () => {
      setShowText(true);
    };
  }, []);

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
      <ScrollDiscover />
      <Sections projects={Projects} handleDiscover={discoverHandler} />
    </div>
  );
};

export default App;
