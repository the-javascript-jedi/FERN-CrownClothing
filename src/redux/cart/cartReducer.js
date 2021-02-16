import CartActionTypes from "./cartTypes";
import { addItemToCart } from "./cartUtils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    // add item to cart array
    case CartActionTypes.ADD_ITEM:
      // spread existing items to cart and add item to cart array
      return {
        ...state,
        // cartItems: [...state.cartItems, action.payload],
        //a utility function to add items to cart
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
