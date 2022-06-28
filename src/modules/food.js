const INCREASE_AMOUNT = 'food/INCREASE_AMOUNT';
const DECREASE_AMOUNT = 'food/DECREASE_AMOUNT';
const SET_STATE = 'food/SET_STATE';
const PLUS_ITEM = 'food/PLUS_ITEM';

export const increase_amount = () => ({ type: INCREASE_AMOUNT });
export const decrease_amount = () => ({ type: DECREASE_AMOUNT });
export const set_state = (state) => ({
  type: SET_STATE,
  food: state,
});
export const plus_item = (price, bool) => ({
  type: PLUS_ITEM,
  price,
  bool,
});

const initialState = { totalPrice: 0, amount: 1, info: {} };

export default function food(state = initialState, action) {
  switch (action.type) {
    case INCREASE_AMOUNT:
      return {
        ...state,
        amount: state.amount + 1,
        totalPrice: state.totalPrice + state.info.price,
      };
    case DECREASE_AMOUNT:
      if (state.amount > 1) {
        return {
          ...state,
          amount: state.amount - 1,
          totalPrice: state.totalPrice - state.info.price,
        };
      } else return state;
    case SET_STATE:
      return {
        ...state,
        info: action.food,
        totalPrice: action.food.price,
        amount: 1,
      };
    case PLUS_ITEM:
      const sip = state.info.price;
      const sa = state.amount;
      const ap = action.price;
      return {
        ...state,
        totalPrice: action.bool ? sip * sa + ap * sa : sip * sa - ap * sa,
        info: {
          ...state.info,
          price: action.bool ? sip + ap : sip - ap,
        },
      };
    default:
      return state;
  }
}
