import { INCREASE, DECREASE, REMOVE, CLEAR, TOTAL } from "./actions";

export function cartReducer(state, action) {
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      //   console.log(cartItem, "increase");
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((singleCart) => {
        return singleCart.id !== action.payload.id;
      });
    } else {
      tempCart = state.cart.map((cartItem) => {
        //   console.log(cartItem, "increase");
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter((singleCart) => {
        return singleCart.id !== action.payload.id;
      }),
    };
  }
  if (action.type === CLEAR) {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === TOTAL) {
    let amount = 0;
    let total = 0;
    // const({amount : 0,total:0}) = state.reduce((prevValue,currValue) => {
    //     return prevValue
    // },{amount,total})
    return {
      ...state,
      cart: state.cart.forEach((item) => {
        amount += item.amount;
        total += item.total;
        item.amount = amount;
        item.total = total;
      }),
    };
  }

  return state;
}
