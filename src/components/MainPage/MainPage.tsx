import React, { useState } from 'react';
import '../../App.css';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { DetailsNavigation } from '../DetailsNavigation/DetailsNavigation';
import { Projects } from '../models/Projects';
import { Sections } from '../Sections/Sections';
import { About } from '../About/About';
import { ScrollDiscover } from '../ScrollDiscover/ScrollDiscover';
import { DiscoverButton } from '../DiscoverButton/DiscoverButton';

interface MainProps {
  discoverHandler: React.MouseEventHandler<HTMLButtonElement>;
  id: string;

}

export const MainPage = ({ id }: MainProps) => {
  const [mainNavigation, setMainNavigation] = useState(false);
  const [toggleDetails, setToggleDetails] = useState(false);
  const [toggleAbout, setToggleAbout] = useState(false);
  const [showText, setShowText] = useState(true);
  const [currentSection, setCurrentSection] = useState(1);

  const [currentProject, setCurrentProject] = useState(Projects[0]);

  const navigationClick = (e: any) => {
    console.log('navigationClick');
    setShowText(false);
    setCurrentSection(Number(e.target.id));
  };

  const handleAboutClick = (e: any) => {
    console.log('about Click');

    setToggleAbout(!toggleAbout);
  };
  // Render the currently displayed section based on the state
  let displayedSection;

  const discoverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('discoer clicked');

    const target = event.target as HTMLButtonElement;
    const id = Number(target.id);
    setCurrentProject(Projects[id]);
    setToggleDetails(!toggleDetails);
    setShowText(false);
  };

  return (
    <div className="app">
      <MainNavigation
        name={mainNavigation}
        handleClick={navigationClick}
        setShowTex={setShowText}
        handleAboutClick={handleAboutClick}
      />

      <DetailsNavigation
        toggle={toggleDetails}
        setToggleDetails={setToggleDetails}
        project={currentProject}
      ></DetailsNavigation>

      <About toggle={toggleAbout} setToggleAbout={setToggleAbout}></About>

      {displayedSection}
      {showText && <ScrollDiscover />}
      {!showText && <DiscoverButton handleClick={discoverHandler} id={id} />}
      <Sections
        setShowTex={setShowText}
        projects={Projects}
        handleDiscover={discoverHandler}
      />
    </div>
  );
};
