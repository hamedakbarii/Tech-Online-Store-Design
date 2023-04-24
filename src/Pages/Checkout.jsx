import React from "react";
import CheckoutRouter from "../components/Checkout/CheckoutRouter";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import OrderSummery from "../components/Checkout/OrderSummery";


const Checkout = () => {
  return (
    <div>
      <CheckoutRouter />
      <h1 className="mt-1 text-2xl font-semibold p-2">Checkout</h1>
      <h3 className="border-b my-2 font-semibold p-2">Shipping Address</h3>
      <CheckoutForm />
      <OrderSummery />
      
    </div>
  );
};

export default Checkout;
