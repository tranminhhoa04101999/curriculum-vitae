import React, { useState } from 'react';
import './About.css';
import batman from '../assets/img/batman.png';
import bat4 from '../assets/img/bat4.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className="container-about">
      <NavLink to="/" className="about-back">
        <FontAwesomeIcon
          icon={faArrowUpFromBracket}
          size={'3x'}
          style={{ color: '#fff' }}
        />
      </NavLink>
      <div className="about-background-title">ABOUT</div>
      <div className="about-content">
        <div className="about-content-title">About Me</div>
        <div className="about-content-text">
          With my background knowledge in Java, ReactJS. I am seeking for a career
          opportunity to fulfill the passion for being a amazing coder. Learning in school
          equips me with teamwork, flexibility, organizational ability. ready all time to
          learn new things every day
        </div>
        <div className="about-content-title">Education</div>
        <div className="about-content-text">
          Post and Telecomunucation Institue of Technology Software engineer | Tháng
          8/2017 - 12/2022
        </div>
      </div>
      <div className="abount-batman">
        <img src={batman} alt="" />
      </div>
      <div className="about-batrandom">
        <img className="about-batrandom-img" src={bat4} alt="" />
      </div>
      <div className="about-batrandom2">
        <img className="about-batrandom-img2" src={bat4} alt="" />
      </div>
    </div>
  );
};

export default About;
