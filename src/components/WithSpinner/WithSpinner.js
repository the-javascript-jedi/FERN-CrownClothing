import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./WithSpinner.styles";
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    // if isLoading prop is true return the spinner or else return the WrapedComponent which will get the data
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
