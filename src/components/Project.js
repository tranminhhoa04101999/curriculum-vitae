import React, { useState, useEffect } from 'react';
import Between from './base/Between';
import BrandHeader from './base/BrandHeader';
import './Project.css';
import batlogo from '../assets/img/batmanlogo.png';
import ButtonBack from './base/ButtonBack';
import batwhite from '../assets/img/batlogo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = () => {
  const [test, setTest] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [spin, setSpin] = useState(0);

  useEffect(() => {
    const target = document.querySelector('div.project-content');
    if (target !== null) {
      target.addEventListener('wheel', (event) => {
        const toLeft = event.deltaY < 0 && target.scrollLeft > 0;
        const toRight =
          event.deltaY > 0 && target.scrollLeft < target.scrollWidth - target.clientWidth;

        if (toLeft || toRight) {
          event.preventDefault();
          target.scrollLeft += event.deltaY;
        }
      });
    }
  }, []);

  const onWheelHandler = (event) => {
    if (event.deltaY > 0) {
      setSpin(spin + 30);
    } else {
      setSpin(spin - 30);
    }
  };

  return (
    <div className="grid container-project">
      <BrandHeader themeIcon="--text-color-right" logo="white" />
      <Between
        between={true}
        logo={batlogo}
        styleImg={{ transform: `rotate(${spin}deg)` }}
      />
      <ButtonBack logo={batwhite} theme="--text-color-right" />

      <div className="row no-gutters project-row">
        <div className="col l-10 l-o-1 project-content" onWheel={onWheelHandler}>
          {test.map((item, index) => (
            <div key={index} className="project-card">
              <span className="project-card__title">Todo List</span>
              <div className="project-card-content">
                it's built with reactjs and add new task, mark it as done
              </div>
              <div className="project-card__tags">
                <span>#reacjs</span>
                <span>#styleComponenet</span>
                <span>#reacjs</span>
              </div>
              <div className="project-card__footer">
                <a
                  href="https://tranminhhoa04101999.github.io/todo-list/"
                  rel="noreferrer"
                  target={'_blank'}
                  className="project-card__footer-visit"
                >
                  Visit
                </a>
                <a
                  href="https://github.com/tranminhhoa04101999/todo-list"
                  rel="noreferrer"
                  target={'_blank'}
                  className="project-card__footer-icon"
                >
                  <FontAwesomeIcon
                    className="project-card__footer-icon-git"
                    icon={faGithub}
                    size="3x"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
