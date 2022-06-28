import React from 'react';
import '../scss/languageChoicePopUp.scss';
import { Link } from 'react-router-dom';

const LanguageChoicePopUp = () => {
  return (
    <div className='LCPUholeContainer'>
      <div className='LCPUBox'>
        <h3 className=''>Language</h3>
        <select>
          <option key='english' value='english'>
            영어
          </option>
          <option key='Japanese' value='Japanese'>
            일본어
          </option>
          <option key='chinese' value='chinese'>
            중국어
          </option>
        </select>
        <Link to='/home'>
          <button style={{ marginTop: '20%' }}>Go!</button>
        </Link>
      </div>
    </div>
  );
};

export default LanguageChoicePopUp;
