const ADD_TO_CART = 'cart/ADD_TO_CART';
const ADJ_INCREASE_AMOUNT = 'cart/ADJ_INCREASE_AMOUNT';
const ADJ_DECREASE_AMOUNT = 'cart/ADJ_DECREASE_AMOUNT';
const DELETE_ITEM = 'cart/DELETE_ITEM';

export const add_to_cart = (item) => ({ type: ADD_TO_CART, item });
export const adj_increase_amount = (id) => ({
  type: ADJ_INCREASE_AMOUNT,
  id,
});
export const adj_decrease_amount = (id) => ({
  type: ADJ_DECREASE_AMOUNT,
  id,
});
export const delete_item = (id) => ({
  type: DELETE_ITEM,
  id,
});

let nextId = 1;
const cartState = {
  items: [],
  sumPrice: 0,
};

export default function cart(state = cartState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.item;
      return {
        sumPrice: state.sumPrice + action.item.totalPrice,
        items: [
          ...state.items,
          {
            totalPrice: item.totalPrice,
            eachPrice: item.info.price,
            name: item.info.name,
            amount: item.amount,
            pref: item.pref,
            add_item: item.items,
            id: nextId++,
          },
        ],
      };
    case ADJ_INCREASE_AMOUNT:
      return {
        sumPrice:
          state.sumPrice +
          state.items.filter((v) => v.id === action.id)[0].eachPrice,
        items: state.items.map((v) => {
          if (v.id === action.id) {
            return {
              ...v,
              totalPrice: v.totalPrice + v.eachPrice,
              amount: v.amount + 1,
            };
          } else {
            return v;
          }
        }),
      };
    case ADJ_DECREASE_AMOUNT:
      const currentFood = state.items.filter((v) => v.id === action.id)[0];
      return {
        sumPrice: state.sumPrice - currentFood.eachPrice,
        items: state.items.map((v) => {
          if (v.id === action.id) {
            return {
              ...v,
              totalPrice: v.totalPrice - v.eachPrice,
              amount: v.amount - 1,
            };
          } else return v;
        }),
      };
    case DELETE_ITEM:
      return {
        sumPrice:
          state.sumPrice -
          state.items.filter((v) => v.id === action.id)[0].totalPrice,
        items: state.items.filter((v) => v.id !== action.id),
      };
    default:
      return state;
  }
}
