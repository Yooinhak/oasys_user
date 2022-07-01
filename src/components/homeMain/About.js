import React from 'react';
import '../../scss/homeMain.scss';
import { Link } from 'react-router-dom';

const About = ({ currentStore, currentLang }) => {
  return (
    <div className='introContainer'>
      <h1>{currentStore}</h1>
      <div className='guideBtnContainer'>
        <div className='guideBtnExplain'>
          {currentLang === 'kr'
            ? '처음이신가요? ->'
            : `First Here?\nHow to enjoy ->`}
        </div>
        <Link to='/info' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className='goGuideBtn'>go</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
