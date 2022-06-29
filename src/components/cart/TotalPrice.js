import React from 'react';
import '../../scss/cart.scss';

const TotalPrice = ({ currentTotalPrice }) => {
  return (
    <div className='totalContainer'>
      <div>Price</div>
      <div className='totalPrice'>
        {currentTotalPrice.toLocaleString('ko-KR')} won
      </div>
    </div>
  );
};

export default TotalPrice;
