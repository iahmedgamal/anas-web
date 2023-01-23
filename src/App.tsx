import './App.css';
import React, { useState } from 'react';
import { MainNavigation } from './components/MainNavigation/MainNavigation';
import { DetailsNavigation } from './components/DetailsNavigation/DetailsNavigation';
import { Sections } from './components/Sections/Sections';
import { Projects } from './components/models/Projects';
import { Route, Routes } from 'react-router-dom';
import { ProjectPage } from './components/ProjectPage/ProjectPage';
import { NoMatch } from './components/NoMatch/NoMatch';
import { MainPage } from './components/MainPage/MainPage';

const App: React.FC = () => {
  const [toggleDetails, setToggleDetails] = useState(false);
  const [currentProject, setCurrentProject] = useState(Projects[0]);
  const [id, setId] = useState('');

  const discoverHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const targetId = Number(target.id);
    setId(id.toString())
    setCurrentProject(Projects[targetId]);
    setToggleDetails(!toggleDetails);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<MainPage discoverHandler={discoverHandler} id={id} />}
        />
        <Route
          path="/project/:id"
          element={
            <ProjectPage
        
              name={false}
              handleClick={function (
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
              ): void {
                throw new Error('Function not implemented.');
              }}
            />
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
