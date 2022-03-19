import React, { useState, useEffect } from 'react';
import '../Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import batmanLoginWhite from '../../assets/img/batlogo-white.png';
import batmanLogin from '../../assets/img/batmanlogo.png';
import './BrandHeader.css';

import bat4 from '../../assets/img/bat4.png';

const BrandHeader = (props) => {
  const [iconClick, setIconClick] = useState(false);
  useEffect(() => {
    setIconClick(true);
  }, []);
  const { themeIcon, logo } = props;
  return (
    <div className="home-header">
      <div className="container-line-home">
        <div
          className={`${iconClick && 'line-home--click'} line-home`}
          style={{ color: `var(${themeIcon})` }}
        ></div>
        <a
          href="https://www.facebook.com/hoatran0410/"
          rel="noreferrer"
          target={'_blank'}
          className="line-home-brand-face"
          style={{ display: iconClick ? 'block' : 'none' }}
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" color={`var(${themeIcon})`} />
        </a>
        <a
          className="line-home-brand-youtube"
          style={{ display: iconClick ? 'block' : 'none' }}
          href="https://github.com/tranminhhoa04101999"
          rel="noreferrer"
          target={'_blank'}
        >
          <FontAwesomeIcon icon={faGithub} size="3x" color={`var(${themeIcon})`} />
        </a>
        <a
          href="https://www.linkedin.com/in/h%C3%B2a-tr%E1%BA%A7n-80b779218/"
          rel="noreferrer"
          target={'_blank'}
          className="line-home-brand-instagram"
          style={{ display: iconClick ? 'block' : 'none' }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="3x" color={`var(${themeIcon})`} />
        </a>
        <div className={`${iconClick && 'line-home-icon-click'} line-home-icon`}>
          <img
            src={logo === 'white' ? batmanLoginWhite : batmanLogin}
            alt=""
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
