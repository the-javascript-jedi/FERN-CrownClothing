import React from "react";
import "./CheckOutItemSASS.scss";
// import connect
import { connect } from "react-redux";
// import action
import { clearItemFromCart } from "../../redux/cart/cartActions";
const CheckOutItem = ({ cartItem, clearItemAction }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
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
});
export default connect(null, mapDispatchToProps)(CheckOutItem);
