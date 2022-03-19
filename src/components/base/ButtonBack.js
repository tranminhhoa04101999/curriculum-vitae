import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './ButtonBack.css';

const ButtonBack = (props) => {
  const [batHover, setBatHover] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [batHover2, setBatHover2] = useState([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  const { logo, theme } = props;

  return (
    <NavLink to="/" className="about-back">
      <FontAwesomeIcon
        className="about-back-icon"
        icon={faArrowUpFromBracket}
        size={'3x'}
        style={{ color: `var(${theme})` }}
      />
      <div className="backhover-left">
        {batHover.map((item, index) => (
          <img
            key={index}
            className="backhover-left-img"
            src={logo}
            alt=""
            style={{ animationDelay: `${item * 0.1}s` }}
          />
        ))}
      </div>
      <div className="backhover-right">
        {batHover2.map((item, index) => (
          <img
            key={index}
            className="backhover-right-img"
            src={logo}
            alt=""
            style={{ animationDelay: `${item * 0.1}s` }}
          />
        ))}
      </div>
    </NavLink>
  );
};

export default ButtonBack;
