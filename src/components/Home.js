import React, { useState, useEffect } from 'react';
import './Home.css';
import batmanLogin from '../assets/img/batmanlogo.png';
import avt from '../assets/img/avtcat.png';
import { NavLink, useNavigate } from 'react-router-dom';
import BrandHeader from './base/BrandHeader';
import Between from './base/Between';

const Home = () => {
  const [close, setClose] = useState(false);
  const navigate = useNavigate();
  const [between, setBetween] = useState(false);

  const projectHandler = () => {
    setClose(true);
    setTimeout(() => {
      navigate('/project');
    }, 1000);
  };
  const betweenOnclick = () => {
    setBetween(true);
  };
  return (
    <div className={`grid container-home ${close ? 'container-home--close' : ''}`}>
      <div className="row no-gutters">
        <div className="col l-6 m-6 c-12">
          <div className="home-left">
            <BrandHeader />
            <div className="home-left-main">
              <div
                className={`home-left-main-content ${
                  between ? 'home-left-main-content--show' : ''
                }`}
              >
                <img src={avt} alt="" />
              </div>
            </div>
            <div className="home-left-footer">
              <div className="home-left-footer-name">Trần Minh Hòa</div>
              <NavLink
                to="/about"
                className="home-left-footer-about"
                style={{
                  color: between
                    ? 'var(--background-color-right)'
                    : 'var(--background-color-left)',
                }}
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col l-6 m-6 c-12">
          <div className={`home-right ${between ? 'home-right--click' : ' '}`}>
            <div className="home-right-header">
              <div className="home-right-header-hi">Hi ...</div>
            </div>
            <div className="home-right-main">
              <div
                className={`home-right-main-content ${
                  between ? 'home-right-main-content--show' : ''
                }`}
              >
                <div className="right-main-content-hi">Hello</div>
                <div className="right-main-content-title">I'm Coder</div>
                <div className="right-main-content-end">
                  I am passionate about FrontEnd programming and website effects
                </div>
              </div>
            </div>
            <div className="home-right-footer">
              <div className="home-right-footer-skill" onClick={() => projectHandler()}>
                Project
              </div>
            </div>
          </div>
        </div>
        <Between
          between={between}
          betweenOnclick={betweenOnclick}
          logo={batmanLogin}
          spin={true}
        />
        <div
          className="batman-between-title"
          style={{ display: between ? 'none' : 'block' }}
        >
          Click here
        </div>
      </div>
    </div>
  );
};

export default Home;
