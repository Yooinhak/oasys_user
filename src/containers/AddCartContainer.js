import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  add_to_cart,
  adj_increase_amount,
  adj_decrease_amount,
  delete_item,
} from '../modules/cart';
import GoCart from '../components/order/GoCart';
import { Items, TotalPrice, Preference } from '../components/cart';

export const AddItemToCart = () => {
  const [currentFood, currentLang] = useSelector((state) => [
    state.food,
    state.data.currentLang,
  ]);
  const dispatch = useDispatch();
  const onAddItem = (item) => dispatch(add_to_cart(item));

  return (
    <GoCart
      onAddItem={onAddItem}
      currentLang={currentLang}
      currentFood={currentFood}
    />
  );
};

export const ItemContainer = () => {
  const [currentCart, currentLang] = useSelector((state) => [
    state.cart.items,
    state.data.currentLang,
  ]);
  const dispatch = useDispatch();
  const onIncreaseAmount = (id) => dispatch(adj_increase_amount(id));
  const onDecreaseAmount = (id) => dispatch(adj_decrease_amount(id));
  const onDeleteItem = (id) => dispatch(delete_item(id));

  return (
    <Items
      currentCart={currentCart}
      currentLang={currentLang}
      onIncreaseAmount={onIncreaseAmount}
      onDecreaseAmount={onDecreaseAmount}
      onDeleteItem={onDeleteItem}
    />
  );
};

export const TotalPriceContainer = () => {
  const [currentTotalPrice, currentLang] = useSelector((state) => [
    state.cart.sumPrice,
    state.data.currentLang,
  ]);
  return (
    <TotalPrice currentTotalPrice={currentTotalPrice} lang={currentLang} />
  );
};

export const PreferenceContainer = () => {
  const [currentFoods, currentLang] = useSelector((state) => [
    state.cart.items,
    state.data.currentLang,
  ]);
  return <Preference currentLang={currentLang} currentFoods={currentFoods} />;
};
