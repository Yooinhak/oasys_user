import { combineReducers } from 'redux';
import food from './food';
import cart from './cart';

const rootReducer = combineReducers({
  food,
  cart,
});

export default rootReducer;
