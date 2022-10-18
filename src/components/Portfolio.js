import React from 'react';
// import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';

import './Portfolio.css';
import info from './Information';

function Portfolio() {
  return (
    <div className="portfolio">
      {
            info.portfolio.map((portfolioInfo) => (
              <div className="portfolio_card" key={uuid()}>
                <div className="container">
                  <div className="card">
                    <div className="slide slide1">
                      <div className="content">
                        <div className="icon">
                          <img src={portfolioInfo.image} alt="portfolioImage" />
                        </div>
                      </div>
                    </div>
                    <div className="slide slide2">
                      <div className="content">
                        <h3>
                          {portfolioInfo.title}
                        </h3>
                        <button type="button" onClick={() => { window.location.href = portfolioInfo.live; }}>
                          Live Link
                        </button>
                        <button type="button" onClick={() => { window.location.href = portfolioInfo.source; }}>
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
    </div>
  );
}

export default Portfolio;
