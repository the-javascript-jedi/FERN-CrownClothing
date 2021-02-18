import React from "react";
import "./CheckOutSASS.scss";
import { connect } from "react-redux";
//import from reselect library
import { createStructuredSelector } from "reselect";
// import selectCartItems selector and selectCartTotal price for memoization of state
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cartSelector";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {/*  */}
      {cartItems.map((cartItem) => {
        return <div>{cartItem.name}</div>;
      })}
      <div className="total">
        <span>total: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOutPage);
