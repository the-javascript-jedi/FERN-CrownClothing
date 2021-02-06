import React from "react";
import "./custom-button.styles.scss";
function CustomButton({ children, ...otherProps }) {
  return (
    //   in ...otherProps we can receive the props values
    //we can check if we receive a type=submit being passed inside the component
    //the button children text is displayed in {children}
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
}
export default CustomButton;
