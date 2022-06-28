import React from 'react';
import '../../scss/homeMain.scss';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='introContainer'>
      <div className='intro'>About the restuarant</div>
      <div className='guideBtnContainer'>
        <div className='guideBtnExplain'>{`First Here?\nHow to enjoy ->`}</div>
        <Link to='/info' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className='goGuideBtn'>go</button>
        </Link>
      </div>
    </div>
  );
};

export default About;
