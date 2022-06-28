import React from 'react';
import '../../scss/cart.scss';
import { Link } from 'react-router-dom';

// 각각의 아이템
const Item = () => {
  return (
    <div className='item'>
      <div className='img'></div>
      <div className='itemInfo'>
        <div>Bulgogi</div>
        <div>$ 20</div>
      </div>
    </div>
  );
};

const Items = () => {
  return (
    <div className='itemContainer'>
      <div className='listText'>Items</div>
      <Item />
      <Item />
      <Link to='/home' style={{ textDecoration: 'none', color: 'inherit' }}>
        <button className='addItemBtn'>Add more items</button>
      </Link>
    </div>
  );
};

export default Items;
