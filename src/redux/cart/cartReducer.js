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
    // remove item from array
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        // place the item which does not match the payload.id to the cartItems state
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    // filter example
    // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    // const result = words.filter(word => word.length > 6);
    // console.log(result);// expected output: Array ["exuberant", "destruction", "present"]
    default:
      return state;
  }
};
export default cartReducer;
