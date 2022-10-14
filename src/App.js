import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Header from './components/Header';

function App() {
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
  ];
  return (

    <Router>
      <Header />
      <Routes>
        {links.map((link) => (
          <Route key={link.id} exact path={link.to} element={<link.element />} />
        ))}
      </Routes>
    </Router>

  );
}
export default App;
