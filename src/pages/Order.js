import React from 'react';
import '../scss/order.scss';
import {
  AdjAmount,
  AddContainer,
  PrefContainer,
} from '../containers/AddFoodContainer';

const OrderInfo = () => {
  return (
    <div className='orderMainContainer'>
      <AddContainer />
      <PrefContainer />
    </div>
  );
};

const Order = () => {
  return (
    <div className='orderHoleContainer'>
      {/* <div className='foodImg' /> */}
      <AdjAmount />
      <OrderInfo />
    </div>
  );
};

export default Order;
