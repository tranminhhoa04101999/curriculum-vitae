import React, { useState, useEffect } from 'react';
import './Home.css';
import batmanLogin from '../assets/img/batmanlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import avt from '../assets/img/avtcat.png';
import { NavLink } from 'react-router-dom';
const Home = () => {
  const [iconClick, setIconClick] = useState(false);
  const [between, setBetween] = useState(false);
  useEffect(() => {
    setIconClick(true);
  }, []);
  const betweenOnclick = () => {
    setBetween(true);
  };

  return (
    <div className="container-home">
      <div className="home-left">
        <div className="home-header">
          <div className="container-line-home">
            <div className={`${iconClick && 'line-home--click'} line-home`}></div>
            <a
              href="https://www.facebook.com/hoatran0410/"
              rel="noreferrer"
              target={'_blank'}
              className="line-home-brand-face"
              style={{ display: iconClick ? 'block' : 'none' }}
            >
              <FontAwesomeIcon icon={faFacebook} size="3x" />
            </a>
            <a
              className="line-home-brand-youtube"
              style={{ display: iconClick ? 'block' : 'none' }}
              href="https://github.com/tranminhhoa04101999"
              rel="noreferrer"
              target={'_blank'}
            >
              <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a
              href="https://www.linkedin.com/in/h%C3%B2a-tr%E1%BA%A7n-80b779218/"
              rel="noreferrer"
              target={'_blank'}
              className="line-home-brand-instagram"
              style={{ display: iconClick ? 'block' : 'none' }}
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
            </a>
            <div className={`${iconClick && 'line-home-icon-click'} line-home-icon`}>
              <img src={batmanLogin} alt="" width={50} height={50} />
            </div>
          </div>
        </div>
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
            Giới thiệu bản thân
          </NavLink>
        </div>
      </div>
      <div
        className={`batman-between ${between ? 'batman-between--click' : ''}`}
        onClick={betweenOnclick}
      >
        <img src={batmanLogin} alt="" />
      </div>
      <div
        className="batman-between-title"
        style={{ display: between ? 'none' : 'block' }}
      >
        Bấm vào đây
      </div>
      <div className={`home-right ${between ? 'home-right--click' : ' '}`}>
        <div className="home-right-header">
          <div className="home-right-header-hi">Xin Chào ...</div>
        </div>
        <div className="home-right-main">
          <div
            className={`home-right-main-content ${
              between ? 'home-right-main-content--show' : ''
            }`}
          >
            <div className="right-main-content-hi">Xin chào</div>
            <div className="right-main-content-title">Tôi là Coder</div>
            <div className="right-main-content-end">
              Tôi đam mê lập trình FrontEnd và tạo ra các hiệu ứng cho website
            </div>
          </div>
        </div>
        <div className="home-right-footer">
          <div className="home-right-footer-skill">Kỹ năng</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
