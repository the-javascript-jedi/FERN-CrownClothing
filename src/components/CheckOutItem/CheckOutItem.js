import React from "react";
import "./CheckOutItemSASS.scss";
// import connect
import { connect } from "react-redux";
// import action
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cartActions";
const CheckOutItem = ({
  cartItem,
  clearItemAction,
  addItemAction,
  removeItemAction,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemAction(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemAction(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          clearItemAction(cartItem);
        }}
      >
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItemAction: (item) => dispatch(clearItemFromCart(item)),
  addItemAction: (item) => dispatch(addItem(item)),
  removeItemAction: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
