import React from 'react';
import '../../scss/cart.scss';
import { Link } from 'react-router-dom';

// 각각의 아이템
const Item = ({ food, onIncreaseAmount, onDecreaseAmount }) => {
  return (
    <div className='item'>
      <div className='itemBox'>
        <div className='img'></div>
        <div className='itemInfo'>
          <div>{food.name}</div>
          <div>{food.totalPrice}원</div>
        </div>
      </div>
      <div className='fcBox'>
        <button
          onClick={() => (food.amount !== 1 ? onDecreaseAmount(food.id) : null)}
        >
          -
        </button>
        <b>{food.amount}</b>
        <button onClick={() => onIncreaseAmount(food.id)}>+</button>
      </div>
    </div>
  );
};

const Items = ({ currentCart, onIncreaseAmount, onDecreaseAmount }) => {
  return (
    <div className='itemContainer'>
      <div className='listText'>Items</div>
      {currentCart.map((v) => {
        return (
          <Item
            key={v.id}
            food={v}
            onIncreaseAmount={onIncreaseAmount}
            onDecreaseAmount={onDecreaseAmount}
          />
        );
      })}
      <div className='addBtnBox'>
        <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className='addItemBtn'>Add more items</button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
