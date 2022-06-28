import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/order.scss';
import { Preference } from '../components/order/index';
import { AdjAmount, AddContainer } from '../containers/AddFoodContainer';

const OrderInfo = () => {
  return (
    <div className='orderMainContainer'>
      <AddContainer />
      <Preference />
    </div>
  );
};

const Order = () => {
  return (
    <div className='orderHoleContainer'>
      <div className='foodImg' />
      <AdjAmount />
      <OrderInfo />
      <Link to='/home' style={{ textDecoration: 'none' }}>
        <button className='addBtn'>Add to cart!</button>
      </Link>
    </div>
  );
};

export default Order;
