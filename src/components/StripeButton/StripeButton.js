import React from "react";
import StripeCheckout from "react-stripe-checkout";
//import logo
import crown from "../../assets/crown.svg";
const StripeButton = ({ price }) => {
  // stripe needs the price in cents/paisa so we multiply the passed in price by 100
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HVeYiHO8ZYP0QcQXhOlSbYnEksSbfxhwSOCc26a5hXAGnPR46Q3XOowIzweR1AAPdLfE2ylhDQPcBlSDE1gTZBU00mUyqT3nY";
  //triggers when we SVGNumberList, we get a token for successful payment which we can use in the backend for payment confirmation
  const onToken = (token) => {
    console.log("token", token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress={true}
      shippingAddress
      image={crown}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='pay Now'
      // triggers when we get the token after submission
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
