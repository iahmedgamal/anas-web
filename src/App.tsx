import './App.css';
import React, { useEffect, useState } from 'react';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { ScrollDiscover } from './components/ScrollDiscover/ScrollDiscover';
import { DetailsNavigation } from './components/DetailsNavigation/DetailsNavigation';
import { Sections } from './components/Sections/Sections';
import { Projects } from './components/models/Projects';

const App: React.FC = () => {
  const [mainNavigation, setMainNavigation] = useState(false);
  const [toggleDetails, setToggleDetails] = useState(false);

  // Method to handle scroll events and switch between sections
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setMainNavigation(true);
    if (event.type === 'scroll')
      console.log(document.documentElement.scrollTop);
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
      <ScrollDiscover />
      <Sections projects={Projects} handleDiscover={discoverHandler} />
    </div>
  );
};

export default App;
