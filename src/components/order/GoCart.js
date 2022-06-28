import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/order.scss';

export default function GoCart({ onAddItem, currentFood }) {
  return (
    <Link to='/home' style={{ textDecoration: 'none' }}>
      <button className='addBtn' onClick={() => onAddItem(currentFood)}>
        Add to cart!
      </button>
    </Link>
  );
}
