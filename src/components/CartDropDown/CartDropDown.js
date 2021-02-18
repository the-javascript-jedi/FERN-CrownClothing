import React from "react";
// connect
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropDownSASS.scss";
import CartItem from "../CartItem/CartItem";
// import selectCartItems selector for memoization of state
import { selectCartItems } from "../../redux/cart/cartSelector";
//import from reselect library
import { createStructuredSelector } from "reselect";
// import for router
import { withRouter } from "react-router-dom";
// import action
import { toggleCartHidden } from "../../redux/cart/cartActions";
const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} item={cartItem} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go To Checkout
      </CustomButton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
// we pass the entire connect hoc component inside the withRouter hoc
// withRouter passes the match,location, history props into the component that is being wrapped
//so we want what comes out of the connect component to receive those props
export default withRouter(connect(mapStateToProps)(CartDropDown));
