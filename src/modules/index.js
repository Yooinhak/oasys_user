import { combineReducers } from 'redux';
import food from './food';
import cart from './cart';
import data from './data';

const rootReducer = combineReducers({
  food,
  cart,
  data,
});

export default rootReducer;
