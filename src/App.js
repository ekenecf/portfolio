import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Form from './components/Form';
import './components/Header.css';

function App() {
  const [isActive, setIsActive] = useState(false);
  const changeColor = () => {
    setIsActive(!isActive);
  };

  const links = [
    {
      id: 1,
      to: '/',
      element: Home,
    },
    {
      id: 2,
      to: '/about',
      element: About,
    },
    {
      id: 3,
      to: '/portfolio',
      element: Portfolio,
    },
    {
      id: 4,
      to: '/contactMe',
      element: Form,
    },
  ];
  return (
    <div
      style={{
        background: isActive ? 'black' : '#f8f8f8',
        height: 'max-content',
        color: isActive ? '#f8f8f8' : 'black',
      }}
    >
      <Router>
        {isActive ? (
          <MdLightMode
            style={{ fontSize: '30px', cursor: 'pointer' }}
            onClick={changeColor}
          />
        ) : (
          <MdDarkMode
            style={{ fontSize: '30px', cursor: 'pointer' }}
            onClick={changeColor}
          />
        )}

        <Header prop={isActive} />

        <Routes>
          {links.map((link) => (
            <Route
              key={link.id}
              exact
              path={link.to}
              element={<link.element />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
