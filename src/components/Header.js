import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import PropTypes from "prop-types";

import MobileMenu from "./MobileMenu";
import "./Header.css";

function Header({ prop }) {
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
            <NavLink
              style={{ backgroundColor: prop ? "white" : "black" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ backgroundColor: prop ? "white" : "black" }}
              to="/about"
            >
              About me
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ backgroundColor: prop ? "white" : "black" }}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ backgroundColor: prop ? "white" : "black" }}
              to="/contactMe"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
        <div className="hamburger">
          <div
            role="button"
            tabIndex={0}
            onClick={handleChange}
            onKeyDown={handleChange}
          >
            {changeMode ? "" : <GiHamburgerMenu />}
          </div>
        </div>
        {changeMode ? (
          <div className="MobileContainer">
            <MobileMenu CancelMenu={handleChange} prop={prop} />
          </div>
        ) : null}
      </nav>
    </header>
  );
}

Header.propTypes = {
  prop: PropTypes.bool.isRequired,
};

export default Header;
