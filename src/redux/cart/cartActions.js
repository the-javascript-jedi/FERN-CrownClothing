import CartActionTypes from "./cartTypes";

//payload property is an optional parameter
// we dont pass any payload in this scenario because in the reducer we toggle the state
// toggle the shopping cart component
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// add item to the cart action
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
// remove the selected item from cart
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
