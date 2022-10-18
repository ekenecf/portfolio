import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import MobileMenu from './MobileMenu';

import './Header.css';

function Header() {
  const [changeMode, setchangeMode] = useState(false);

  const handleChange = () => {
    setchangeMode(!changeMode);
    return changeMode;
  };

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
          <li>
            <NavLink to="/contactMe">
              Contact Me
            </NavLink>
          </li>

        </ul>
        <div className="hamburger">
          <div role="button" tabIndex={0} onClick={handleChange} onKeyDown={handleChange}>
            {
              changeMode ? '' : <GiHamburgerMenu />
            }
          </div>
        </div>
        {
            changeMode ? (
              <div className="MobileContainer">
                <MobileMenu CancelMenu={handleChange} />
              </div>
            )
              : null
          }
      </nav>
    </header>
  );
}

export default Header;
