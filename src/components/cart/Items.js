import React from 'react';
import '../../scss/cart.scss';
import { Link } from 'react-router-dom';

// 각각의 아이템
const Item = ({ food, onIncreaseAmount, onDecreaseAmount, onDeleteItem }) => {
  return (
    <div className='item'>
      <div className='itemBox'>
        {/* <div className='img'></div> */}
        <div className='itemInfo'>
          <div>{food.name}</div>
          <div>{food.totalPrice.toLocaleString('ko-KR')}원</div>
        </div>
        <div className='addItemInfoBox'>
          {food.add_item.map((v) => {
            return <div>{v.item}</div>;
          })}
        </div>
      </div>
      <div className='fcBox'>
        <div className='deleteItemFcBox'>
          <button onClick={() => onDeleteItem(food.id)}>x</button>
        </div>
        <div className='adjAmountFcBox'>
          <button
            onClick={() =>
              food.amount !== 1 ? onDecreaseAmount(food.id) : null
            }
          >
            -
          </button>
          <b>{food.amount}</b>
          <button onClick={() => onIncreaseAmount(food.id)}>+</button>
        </div>
      </div>
    </div>
  );
};

const Items = ({
  currentCart,
  onIncreaseAmount,
  onDecreaseAmount,
  onDeleteItem,
  lang,
}) => {
  return (
    <div className='itemContainer'>
      {currentCart.map((v) => {
        return (
          <Item
            key={v.id}
            food={v}
            onIncreaseAmount={onIncreaseAmount}
            onDecreaseAmount={onDecreaseAmount}
            onDeleteItem={onDeleteItem}
          />
        );
      })}
      <div className='addBtnBox'>
        <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className='addItemBtn'>
            {lang.slice(-7, -5) === 'kr' ? '추가하러 가기' : 'Add more items'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
