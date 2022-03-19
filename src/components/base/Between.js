import React, { useState } from 'react';
import './Between.css';

const Between = (props) => {
  const { spin, logo, between, betweenOnclick, style, styleImg } = props;

  return (
    <div
      className={`batman-between ${between ? 'batman-between--click' : ''} ${
        spin ? 'spin' : ''
      }`}
      onClick={betweenOnclick}
      style={style}
    >
      <img src={logo} alt="" style={styleImg} />
    </div>
  );
};

export default Between;
