import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase_amount, decrease_amount, plus_item } from '../modules/food';
import { FoodInfo } from '../components/order';
import { Add } from '../components/order';

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
  const onChangePrice = (price, event) => dispatch(plus_item(price, event));

  return <Add currentFood={currentFood} onChangePrice={onChangePrice} />;
};
