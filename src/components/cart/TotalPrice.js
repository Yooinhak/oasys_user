import React from 'react';
import '../../scss/cart.scss';

const TotalPrice = ({ currentTotalPrice, currentLang }) => {
  return (
    <div className='totalContainer'>
      <div>{currentLang === 'kr' ? '가격' : 'Price'}</div>
      <div className='totalPrice'>
        {currentTotalPrice.toLocaleString('ko-KR')}{' '}
        {currentLang === 'kr' ? '원' : 'won'}
      </div>
    </div>
  );
};

export default TotalPrice;
