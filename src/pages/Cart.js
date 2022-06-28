import React from 'react';
import '../scss/cart.scss';
import {
  ItemContainer,
  TotalPriceContainer,
  PreferenceContainer,
} from '../containers/AddCartContainer';

const Order = () => {
  return (
    <div className='cartHoleContainer'>
      <ItemContainer />
      <TotalPriceContainer />
      <PreferenceContainer />
    </div>
  );
};

export default Order;
