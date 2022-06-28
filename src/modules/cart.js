const ADD_TO_CART = 'cart/ADD_TO_CART';

export const add_to_cart = (item) => ({ type: ADD_TO_CART, item });

let nextId = 1;
const cartState = [];

export default function cart(state = cartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state,
        {
          totalPrice: action.item.totalPrice,
          amout: action.item.amount,
          info: action.item.info,
          pref: action.item.pref,
          id: nextId++,
        },
      ];
    default:
      return state;
  }
}
