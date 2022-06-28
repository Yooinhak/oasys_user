import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_cart } from '../modules/cart';
import GoCart from '../components/order/GoCart';

export const AddItemToCart = () => {
  const currentFood = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const onAddItem = (item) => dispatch(add_to_cart(item));

  return <GoCart onAddItem={onAddItem} currentFood={currentFood} />;
};
