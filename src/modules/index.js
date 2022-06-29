import { combineReducers } from 'redux';
import food from './food';
import cart from './cart';
import lang from './json';

const rootReducer = combineReducers({
  food,
  cart,
  lang,
});

export default rootReducer;
