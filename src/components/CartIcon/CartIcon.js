import React from "react";
import { connect } from "react-redux";
// import action
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIconSASS.scss";
// import selectCartitemsCount selector for memoization of state
import { selectCartItemsCount } from "../../redux/cart/cartSelector";

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
    // we pass in the state to memoized Selector-reselect library
    itemCount: selectCartItemsCount(state),
  };
};
// dispatch the action to toggle the cart
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
