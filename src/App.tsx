import './App.css';
import React, { useEffect, useState } from 'react';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { DetailsNavigation } from './components/DetailsNavigation/DetailsNavigation';
import { Sections } from './components/Sections/Sections';
import { Projects } from './components/models/Projects';

const App: React.FC = () => {
  const [mainNavigation, setMainNavigation] = useState(false);
  const [toggleDetails, setToggleDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState(Projects[0]);

  const discoverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToggleDetails(!toggleDetails);
  };

  const detailsHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    const id = Number(target.id);
    setCurrentProject(Projects[id]);
  };

  return (
    <div className="app">
      <MainNavigation name={mainNavigation} clickHandler={detailsHandler} />
      <DetailsNavigation
        toggle={toggleDetails}
        setToggleDetails={setToggleDetails}
        project={currentProject}
      ></DetailsNavigation>
      <Sections projects={Projects} handleDiscover={discoverHandler} />
    </div>
  );
};

export default App;
