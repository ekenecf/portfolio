import React from 'react';
import uuid from 'react-uuid';
import info from './Information';
import './About.css';

function About() {
  return (
    <div>
      <div className="developer_about">
        <div className="colors">
          <div className="red" />
          <div className="green" />
          <div className="yellow" />
        </div>
        <div className="developer_detail">
          <p>
            {info.bio}
          </p>

        </div>
      </div>
      <div className="developer_skills">
        <div className="colors">
          <div className="red" />
          <div className="green" />
          <div className="yellow" />
        </div>
        <div className="developer_skill_detail">
          <div className="developer_skill_detail_card">
            <h2>Proficient With</h2>
            {
            info.skills.proficientWith.map((proficiency) => (
              <div className="proficiency" key={uuid()}>
                {proficiency}
              </div>
            ))
          }
          </div>
          <div className="exposed_to">
            <h2>Exposed To</h2>
            {
               info.skills.exposedTo.map((proficiency) => (
                 <div className="proficiency" key={uuid()}>
                   {proficiency}
                 </div>
               ))
            }
          </div>

        </div>

      </div>
      <div className="developers_interest">
        <div className="colors">
          <div className="red" />
          <div className="green" />
          <div className="yellow" />
        </div>
        <div className="developers_interest_detail">
          <h2>Hobbies</h2>
          {
               info.hobbies.map((hobby) => (
                 <div className="developers_interest_card" key={uuid()}>
                   <p>
                     {' '}
                     {hobby.label}
                   </p>
                   <p>
                     {' '}
                     {hobby.emoji}
                   </p>
                 </div>
               ))
            }

        </div>
      </div>
    </div>
  );
}

export default About;
