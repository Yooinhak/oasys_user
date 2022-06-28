import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  add_to_cart,
  adj_increase_amount,
  adj_decrease_amount,
} from '../modules/cart';
import GoCart from '../components/order/GoCart';
import { Items, TotalPrice, Preference } from '../components/cart';

export const AddItemToCart = () => {
  const currentFood = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const onAddItem = (item) => dispatch(add_to_cart(item));

  return <GoCart onAddItem={onAddItem} currentFood={currentFood} />;
};

export const ItemContainer = () => {
  const currentCart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const onIncreaseAmount = (id) => dispatch(adj_increase_amount(id));
  const onDecreaseAmount = (id) => dispatch(adj_decrease_amount(id));

  return (
    <Items
      currentCart={currentCart}
      onIncreaseAmount={onIncreaseAmount}
      onDecreaseAmount={onDecreaseAmount}
    />
  );
};

export const TotalPriceContainer = () => {
  const currentTotalPrice = useSelector((state) => state.cart.sumPrice);
  return <TotalPrice currentTotalPrice={currentTotalPrice} />;
};

export const PreferenceContainer = () => {
  const currentFoods = useSelector((state) => state.cart.items);
  return <Preference currentFoods={currentFoods} />;
};
