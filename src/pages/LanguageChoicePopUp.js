import React from 'react';
import '../scss/languageChoicePopUp.scss';
import { Link } from 'react-router-dom';
import { ChangeLanguageContainer } from '../containers/ChangeJsonContainer';

const LanguageChoicePopUp = () => {
  return (
    <div className='LCPUholeContainer'>
      <div className='LCPUBox'>
        <h3 className=''>Language</h3>
        <ChangeLanguageContainer />
        <Link to='/home'>
          <button style={{ marginTop: '20%' }}>Go!</button>
        </Link>
      </div>
    </div>
  );
};

export default LanguageChoicePopUp;
