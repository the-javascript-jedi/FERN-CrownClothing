import React from "react";
// connect
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropDownSASS.scss";
import CartItem from "../CartItem/CartItem";
// import selectCartItems selector for memoization of state
import { selectCartItems } from "../../redux/cart/cartSelector";

const CartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} item={cartItem} />;
        })}
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropDown);
