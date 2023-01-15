import React from 'react';
import './App.css';

import  {NoMatch}  from './components/NoMatch/NoMatch';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import { ProjectPage } from './components/ProjectPage/ProjectPage';

const App: React.FC = () => {
  
  
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/project/:id" element={<ProjectPage name={false} handleClick={function (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
          throw new Error('Function not implemented.');
        } } />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
