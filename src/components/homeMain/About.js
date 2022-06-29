import React from 'react';
import '../../scss/homeMain.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const About = () => {
  const language = useSelector((state) => state.lang);
  const storeName = require(`../../sampleData/${language}`).storeInfo.storeName;
  return (
    <div className='introContainer'>
      <h1>{storeName}</h1>
      <div className='guideBtnContainer'>
        <div className='guideBtnExplain'>
          {language.slice(-7, -5) === 'kr'
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
