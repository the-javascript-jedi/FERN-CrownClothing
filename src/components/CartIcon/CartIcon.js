import React from "react";
import { connect } from "react-redux";
// import action
import { toggleCartHidden } from "../../redux/cart/cartActions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIconSASS.scss";
// we get the toggleCartHidden action as props
const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
