import React, { useState } from 'react';
import './About.css';
import batman from '../assets/img/batman.png';
import bat4 from '../assets/img/bat4.png';
import batwhite from '../assets/img/batlogo-white.png';
import ButtonBack from './base/ButtonBack';

const About = () => {
  return (
    <div className="grid container-about">
      <ButtonBack logo={batwhite} theme="--background-color-left" />
      <div className="row no-gutters">
        <div className="col l-12">
          <div className="about-background-title">ABOUT</div>
          <div className="about-content">
            <div className="about-content-title">About Me</div>
            <div className="about-content-text">
              With my background knowledge in Java, ReactJS. I am seeking for a career
              opportunity to fulfill the passion for being a amazing coder. Learning in
              school equips me with teamwork, flexibility, organizational ability. ready
              all time to learn new things every day.
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
      </div>
    </div>
  );
};

export default About;
