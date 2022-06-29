import React from 'react';
import '../../scss/order.scss';

const FoodInfo = ({ currentFood, onIncreaseAmount, onDecreaseAmount }) => {
  return (
    <div className='FoodInfoContainer'>
      <h1>{currentFood.info.name}</h1>
      <div className='info'>{currentFood.info.info}</div>
      <div className='FoodPriceContainer'>
        price
        <b>{currentFood.totalPrice.toLocaleString('ko-KR')}</b>
      </div>
      <div className='FoodAmountContainer'>
        Amount
        <div className='amountBtn'>
          <button onClick={onDecreaseAmount}>-</button>
          <b>{currentFood.amount}</b>
          <button onClick={onIncreaseAmount}>+</button>
        </div>
      </div>
    </div>
  );
};

export default FoodInfo;
