import React from 'react';
import uuid from 'react-uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';

import info from './Information';
import './About.css';

function About() {
  AOS.init({
    duration: 1200,
  });

  return (
    <div>
      <div
        className="developer_about"
        data-aos="zoom-in-up"
        data-aos-delay="70"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
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
      <div
        className="developer_skills"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
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
      <div
        className="developers_interest"
        data-aos="flip-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
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
