import React from "react";
import CheckoutRouter from "../components/Checkout/CheckoutRouter";
import CheckoutForm from "../components/Checkout/CheckoutForm";

const Checkout = () => {
  return (
    <div className="p-2">
      <CheckoutRouter />
      <h1 className="mt-1 text-2xl font-semibold">Checkout</h1>
      <h3 className="border-b m-2 font-semibold">Shipping Address</h3>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
