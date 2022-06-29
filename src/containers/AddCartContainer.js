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
  const [currentFood, language] = useSelector((state) => [
    state.food,
    state.lang,
  ]);
  const dispatch = useDispatch();
  const onAddItem = (item) => dispatch(add_to_cart(item));

  return (
    <GoCart
      onAddItem={onAddItem}
      language={language}
      currentFood={currentFood}
    />
  );
};

export const ItemContainer = () => {
  const [currentCart, lang] = useSelector((state) => [
    state.cart.items,
    state.lang,
  ]);
  const dispatch = useDispatch();
  const onIncreaseAmount = (id) => dispatch(adj_increase_amount(id));
  const onDecreaseAmount = (id) => dispatch(adj_decrease_amount(id));
  const onDeleteItem = (id) => dispatch(delete_item(id));

  return (
    <Items
      currentCart={currentCart}
      lang={lang}
      onIncreaseAmount={onIncreaseAmount}
      onDecreaseAmount={onDecreaseAmount}
      onDeleteItem={onDeleteItem}
    />
  );
};

export const TotalPriceContainer = () => {
  const [currentTotalPrice, lang] = useSelector((state) => [
    state.cart.sumPrice,
    state.lang,
  ]);
  return <TotalPrice currentTotalPrice={currentTotalPrice} lang={lang} />;
};

export const PreferenceContainer = () => {
  const [currentFoods, lang] = useSelector((state) => [
    state.cart.items,
    state.lang,
  ]);
  return <Preference lang={lang} currentFoods={currentFoods} />;
};
