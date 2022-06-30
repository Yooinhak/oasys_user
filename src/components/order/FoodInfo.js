import React from 'react';
import '../../scss/order.scss';
import { useSelector } from 'react-redux';

const FoodInfo = ({ currentFood, onIncreaseAmount, onDecreaseAmount }) => {
  const lang = useSelector((state) => state.lang);
  return (
    <div className='FoodInfoContainer'>
      <h1>{currentFood.info.name}</h1>
      <div className='info'>{currentFood.info.info}</div>
      <div className='FoodPriceContainer'>
        {lang.slice(-7, -5) === 'kr' ? '가격' : 'Price'}
        <b>{currentFood.totalPrice.toLocaleString('ko-KR')}</b>
      </div>
      <div className='FoodAmountContainer'>
      {lang.slice(-7, -5) === 'kr'
            ? '수량'
            : 'Amount'}
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
