import React from "react";
import { connect } from "react-redux";
// import action
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIconSASS.scss";
// we get the toggleCartHidden action as props
const CartIcon = ({ toggleCartHidden, cartItems, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

// access the cartItems state
//we can destructure the cartItems as ({cart:{cartItems}})
const mapStateToProps = (state) => {
  console.log("I am being Called!");
  return {
    itemCount: state.cart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    ),
  };
};
// dispatch the action to toggle the cart
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
