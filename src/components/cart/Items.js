import React from 'react';
import { AmountButton } from '../common/Button';
import '../../scss/cart.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const Items = ({
  currentCart,
  onIncreaseAmount,
  onDecreaseAmount,
  onDeleteItem,
  currentLang,
}) => {
  const [mkSentences, setMkSentences] = useState('');
  const [anotherLangSentences, setAnotherLangSentences] = useState('');
  const [reverseLang, setReverseLang] = useState(false);

  useEffect(() => {
    setMkSentences(currentCart.map());
  });

  return (
    <div className='itemContainer'>
      <div style={{ marginBottom: '5%' }}>Order</div>
      {currentCart.map((food) => {
        return (
          <div className='item'>
            <div className='itemBox'>
              {/* <div className='img'></div> */}
              <div className='itemInfo'>
                <div>{food.name}</div>
                <div>{food.totalPrice.toLocaleString('ko-KR')}원</div>
              </div>
              <ul className='addItemInfoBox'>
                {food.add_item.map((v) => {
                  return <li key={v.id}>{v.item}</li>;
                })}
              </ul>
            </div>
            <div className='fcBox'>
              <div className='deleteItemFcBox'>
                <button onClick={() => onDeleteItem(food.id)}>x</button>
              </div>
              <AmountButton
                increaseBtn={() => onIncreaseAmount(food.id)}
                decreaseBtn={() => onDecreaseAmount(food.id)}
                amount={food.amount}
              />
            </div>
          </div>
        );
      })}
      <div className='addBtnBox'>
        <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
          <button className='addItemBtn'>
            {currentLang === 'kr' ? '추가하러 가기' : 'Add more items'}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Items;
