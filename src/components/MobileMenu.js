import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import { NavLink } from 'react-router-dom';

function MobileMenu(props) {
  const { CancelMenu } = props;

  return (
    <div className="mobile">
      <div className="Mobile-List">
        <NavLink to="/">
          <div role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>Home</div>
        </NavLink>
        <NavLink to="/about">
          <div role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>About me</div>
        </NavLink>
        <NavLink to="/portfolio">
          <div className="link-remove" role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>Portfolio</div>
        </NavLink>
        <NavLink to="/contactMe">
          <div className="link-remove" role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>Contact Me</div>
        </NavLink>
      </div>
      <div className="cancel" role="button" tabIndex={0} onClick={CancelMenu} onKeyDown={CancelMenu}>X</div>
    </div>
  );
}

MobileMenu.propTypes = {
  CancelMenu: PropTypes.func.isRequired,
};
export default MobileMenu;
