import React from 'react';
import { AmountButton } from '../common/Button';
import '../../scss/order.scss';

function FoodInfo({
  currentLang,
  currentFood,
  onIncreaseAmount,
  onDecreaseAmount,
}) {
  return (
    <div className='FoodInfoContainer'>
      <h1>{currentFood.info.name}</h1>
      <div className='info'>{currentFood.info.info}</div>
      <div className='FoodPriceContainer'>
        {currentLang === 'kr' ? '가격' : 'Price'}
        <b>{currentFood.totalPrice.toLocaleString('ko-KR')}</b>
      </div>
      <div className='FoodAmountContainer'>
        {currentLang === 'kr' ? '수량' : 'Amount'}
        <AmountButton
          increaseBtn={onIncreaseAmount}
          decreaseBtn={onDecreaseAmount}
          amount={currentFood.amount}
        />
      </div>
    </div>
  );
}

export default FoodInfo;
