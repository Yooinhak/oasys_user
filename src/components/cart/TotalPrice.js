import React from 'react';
import '../../scss/cart.scss';

const TotalPrice = ({ currentTotalPrice }) => {
  return (
    <div className='totalContainer'>
      <div>Price</div>
      <div className='totalPrice'>{currentTotalPrice}원</div>
    </div>
  );
};

export default TotalPrice;
