import React, { useContext, useEffect, useReducer } from 'react'
import { ADD_TO_CART, DECREASE_CART, GET_TOTALS, INCREASE_CART, REMOVE_CART } from './action';
import cartReduce from './reduce';
const CartContext = React.createContext()

export const useCartContext = () => useContext(CartContext);
const items = JSON.parse(localStorage.getItem('cartItems')) !== null? JSON.parse(localStorage.getItem('cartItems')) : []
 const initialState = {
  cart: items,
  total:0,
  amount:0
}
const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReduce,initialState)

    const addToCart = (newItem) => {
      return dispatch({type:ADD_TO_CART,payload:newItem})
    }
    const removeCart = (id) => {
      return dispatch({type:REMOVE_CART,payload:id})
    }
    const increaseCart = (id) => {
      return dispatch({type:INCREASE_CART,payload:id})
    }
    const decreaseCart = (id) => {
      return dispatch({type:DECREASE_CART,payload:id})
    }
    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(state.cart))
      dispatch({ type: GET_TOTALS})
    }, [state.cart]);
  return (
    <CartContext.Provider value={{...state,addToCart,removeCart,increaseCart,decreaseCart}}>
        {children}
    </CartContext.Provider>
  )
}


export {CartContextProvider,CartContext}