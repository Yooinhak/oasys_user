import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increase_amount,
  decrease_amount,
  plus_item,
  set_pref,
  set_add_pref,
} from '../modules/food';
import { FoodInfo, Add, Preference } from '../components/order';

export const AdjAmount = () => {
  const currentFood = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const onIncreaseAmount = () => dispatch(increase_amount());
  const onDecreaseAmount = () => dispatch(decrease_amount());

  return (
    <FoodInfo
      currentFood={currentFood}
      onIncreaseAmount={onIncreaseAmount}
      onDecreaseAmount={onDecreaseAmount}
    />
  );
};

export const AddContainer = () => {
  const currentFood = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const onChangePrice = (price, event, item) =>
    dispatch(plus_item(price, event, item));

  return <Add currentFood={currentFood} onChangePrice={onChangePrice} />;
};

export const PrefContainer = () => {
  const currentFood = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const onChangePref = (text) => dispatch(set_pref(text));
  const onAddPref = (text, bool) => dispatch(set_add_pref(text, bool));

  return (
    <Preference
      currentFood={currentFood}
      onChangePref={onChangePref}
      onAddPref={onAddPref}
    />
  );
};
