import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/order.scss';

export default function GoCart({ onAddItem, currentFood, language }) {
  return (
    <Link
      to='/home'
      style={{ textDecoration: 'none', height: 0, marginBottom: '20%' }}
    >
      <button className='addBtn' onClick={() => onAddItem(currentFood)}>
        {language.slice(-7, -5) === 'kr' ? '장바구니에 넣기!' : 'Add to cart!'}
      </button>
    </Link>
  );
}
