import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropDownSASS.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>Go To Checkout</CustomButton>
      </div>
    </div>
  );
};

export default CartDropDown;
