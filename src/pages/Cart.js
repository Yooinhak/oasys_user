import React from 'react';
import '../scss/cart.scss';
import { Items, TotalPrice, Preference } from '../components/cart/index';

const Order = () => {
  return (
    <div className='cartHoleContainer'>
      <Items />
      <TotalPrice />
      <Preference />
    </div>
  );
};

export default Order;
