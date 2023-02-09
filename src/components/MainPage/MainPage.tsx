import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import { MainNavigation } from '../MainNavigation/MainNavigation';
import { ScrollDiscover } from '../ScrollDiscover/ScrollDiscover';
import { DetailsNavigation } from '../DetailsNavigation/DetailsNavigation';
import { DiscoverButton } from '../DiscoverButton/DiscoverButton';
import { Projects } from '../models/Projects';
import { Sections } from '../Sections/Sections';

interface MainProps {
  discoverHandler: React.MouseEventHandler<HTMLButtonElement>;
  id: string
}

export const MainPage = ({ id }: MainProps) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [mainNavigation, setMainNavigation] = useState(false);
  const [showText, setShowText] = useState(true);
  const [toggleDetails, setToggleDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState(Projects[0]);

  // Method to handle scroll events and switch between sections
  const handleScroll = (event: { deltaY: number }) => {
    setMainNavigation(true);
      setShowText(false);

    // Check if the user is scrolling up or down
    if (event.deltaY > 0) {
      // Scrolling down, switch to the next section or the first section if on the last one
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
    console.log('navigationClick');
    setShowText(false);
    setCurrentSection(Number(e.target.id));
  };
  // Render the currently displayed section based on the state
  let displayedSection;

  const discoverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("discoer clicked")

    const target = event.target as HTMLButtonElement;
    const id = Number(target.id);
    setCurrentProject(Projects[id]);
    setToggleDetails(!toggleDetails);
    setShowText(false);

  };

  return (
    <div className="app" onWheel={handleScroll}>
      <MainNavigation
        name={mainNavigation}
        handleClick={navigationClick}
        setShowTex={setShowText}
      />
      <DetailsNavigation
        toggle={toggleDetails}
        setToggleDetails={setToggleDetails}
        project={currentProject}
      ></DetailsNavigation>
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
