import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Home.css';
import info from './Information';
import myImage from '../assets/my_image-removebg-preview.png';

function Home() {
  const twitter = () => {
    window.location.href = 'https://twitter.com/ekene070';
  };
  const linkedin = () => {
    window.location.href = 'https://www.linkedin.com/in/nwachukwuekene/';
  };
  const github = () => {
    window.location.href = 'https://github.com/ekenecf';
  };

  return (
    <div className="home_card">
      <motion.div
        initial={{ opacity: 0, x: '-100vh' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', bounce: 0.2 }}
        className="developer_image"
      >
        <img src={myImage} alt="developerImage" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: '100vh' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', bounce: 0.2 }}
        className="developer_short_detail"
      >
        <h1>
          Hi, I&apos;m
          {' '}
          <span className="developer_name">Ekene</span>
          <span className="hand_wave">🤚</span>
        </h1>
        <h2>I&apos;m a Full Stack Developer.</h2>
        {info.miniBio.map((bio) => (
          <div key={bio.id} className="developers_bio">
            <p>{bio.emoji}</p>
            <span>{bio.text}</span>
          </div>
        ))}
        <div className="developers_socials">
          <h3 onClick={twitter} onKeyDown={twitter} role="presentation">
            {' '}
            <FiTwitter />
          </h3>
          <h3 onClick={github} onKeyDown={github} role="presentation">
            {' '}
            <FaGithub />
          </h3>
          <h3 onClick={linkedin} onKeyDown={linkedin} role="presentation">
            <NavLink to="https://github.com/ekenecf" />
            {' '}
            <FaLinkedin />
          </h3>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
  <motion.div
    initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: 'spring', bounce: 0.6 }}
  >
    <h1>Hi</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      perspiciatis voluptates nihil dolores eum architecto eligendi
    </p>
  </motion.div>;
