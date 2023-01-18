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
    const target = event.target as HTMLButtonElement;
    const id = Number(target.id);
    setCurrentProject(Projects[id]);
    setToggleDetails(!toggleDetails);
  };

  return (
    <div className="app">
      <MainNavigation name={mainNavigation} />
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
