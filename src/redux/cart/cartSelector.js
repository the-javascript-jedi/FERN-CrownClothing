import { createSelector } from "reselect";
// input selector - returns a piece of state
const selectCart = (state) => state.cart;

//first argument is a collection of input selectors
//second argument will return the value we want out of the selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
// memoized function to return the hidden piece of state
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//reduce the cartItems quantity into a single value
export const selectCartItemsCount = createSelector(
  // reference the selectCartItems output selector which will return the cartItems value
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
