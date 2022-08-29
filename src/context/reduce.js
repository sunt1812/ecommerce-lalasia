import {ADD_TO_CART, DECREASE_CART, GET_TOTALS, INCREASE_CART, REMOVE_CART } from "./action";
const cartReduce = (state ,action) => {
    switch(action.type) {
        case ADD_TO_CART:
          const nextCart = [...state.cart];
          const existingIndex = nextCart.findIndex((item) => item.id === action.payload.id);
    
          if (existingIndex >= 0) {
            const newQuantity = parseInt(nextCart[existingIndex].amount + action.payload.amount);
    
            nextCart[existingIndex] = {
              ...action.payload,
              amount: newQuantity,
            };
          } else {
            nextCart.push(action.payload);
          }
          return { ...state, cart: nextCart};
        case REMOVE_CART:
            return {...state,cart:state.cart.filter((item) => item.id !== action.payload)}
        case INCREASE_CART:
            const increase = state.cart.map((item) => {
                if (item.id === action.payload) {
                  return { ...item, amount: item.amount + 1 };
                }
                return item;
              });
              return { ...state, cart: increase };
        case DECREASE_CART:
            const decrease = state.cart.map((item) => {
                if (item.id === action.payload) {
                return { ...item, amount: item.amount === 1 ? item.amount = 1: item.amount -1 };
                }
                return item;
            })
            return { ...state, cart: decrease };
        case GET_TOTALS:
            let { total, amount } = state.cart.reduce(
                (accum, curVal) => {
                  let { price, amount } = curVal;
          
                  let updateTotal = price * amount;
                  accum.total += updateTotal;
          
                  accum.amount += amount;
                  return accum;
                },
                {
                  total: 0,
                  amount: 0,
                }
              );
              total = parseFloat(total.toFixed(2))
            return { ...state, total, amount };
        default:
            return state    
    }
}

export default cartReduce;