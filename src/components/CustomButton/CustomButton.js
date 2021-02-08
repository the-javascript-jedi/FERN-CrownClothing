import React from "react";
import "./custom-button.styles.scss";
function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
  return (
    //   in ...otherProps we can receive the props values
    //we can check if we receive a type=submit being passed inside the component
    //the button children text is displayed in {children}
    // render a className google-sign-in to the button if isGoogleSignIn prop is used
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
export default CustomButton;
