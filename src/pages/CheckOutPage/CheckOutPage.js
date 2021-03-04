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
// import CheckOutItem
import CheckOutItem from "../../components/CheckOutItem/CheckOutItem";
// import stripe button
import StripeButton from "../../components/StripeButton/StripeButton";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {/*  */}
      {cartItems.map((cartItem) => {
        return (
          <CheckOutItem key={cartItem.id} cartItem={cartItem}></CheckOutItem>
        );
      })}
      <div className='total'>
        <span>total: ${total}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 -- Exp:01/22 -- CW:123
      </div>
      <StripeButton price={total} />
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOutPage);
