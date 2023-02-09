import React, { useState } from 'react';
import '../../App.css';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { DetailsNavigation } from '../DetailsNavigation/DetailsNavigation';
import { Projects } from '../models/Projects';
import { Sections } from '../Sections/Sections';

interface MainProps {
  discoverHandler: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
}

export const MainPage = ({ id }: MainProps) => {
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
