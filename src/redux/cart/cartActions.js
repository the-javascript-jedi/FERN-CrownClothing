import CartActionTypes from "./cartTypes";

//payload property is an optional parameter
// we dont pass any payload in this scenario because in the reducer we toggle the state
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
