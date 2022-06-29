import React from 'react';
import '../../scss/cart.scss';

const TotalPrice = ({ currentTotalPrice, lang }) => {
  return (
    <div className='totalContainer'>
      <div>{lang.slice(-7, -5) === 'kr' ? '가격' : 'Price'}</div>
      <div className='totalPrice'>
        {currentTotalPrice.toLocaleString('ko-KR')}{' '}
        {lang.slice(-7, -5) === 'kr' ? '원' : 'won'}
      </div>
    </div>
  );
};

export default TotalPrice;
