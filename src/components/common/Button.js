import React from 'react';
import './button.scss';

export function AmountButton({ increaseBtn, decreaseBtn, amount }) {
  return (
    <div className='BtnContainer'>
      <button onClick={amount > 1 ? decreaseBtn : null}>-</button>
      <b>{amount}</b>
      <button onClick={increaseBtn}>+</button>
    </div>
  );
}
