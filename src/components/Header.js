import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  const [changeMode, setchangeMode] = useState(false);

  const handleChange = () => {
    setchangeMode(!changeMode);
    // document.body.style.background = 'red';
    return changeMode;
  };

  // useEffect(() => {
  //   document.body.style.backgroundColor = 'salmon';
  // }, []);

  console.log(changeMode);

  return (
    <header>
      <nav className="navigation">
        <ul className="navigation_list">
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          {
            changeMode ? <span className="toggleWhite" onClick={handleChange} onKeyDown={handleChange} aria-label="Full Moon" role="presentation">🌑</span>
              : <span className="toggleDark" onClick={handleChange} onKeyDown={handleChange} aria-label="New Moon" role="presentation"> 🌕 </span>
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
