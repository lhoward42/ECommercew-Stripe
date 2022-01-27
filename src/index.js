import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsContextProvider from "./context/products-context";
import CartContextProvider from "./context/cart-context";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);


ReactDOM.render(
  <BrowserRouter>
    <ProductsContextProvider>
      <CartContextProvider>
        {/* //This Element tag with the stripe child now gives us access to stripe throughout our app!! */}
        <Elements stripe={stripePromise}>
        <App />
        </Elements>
      </CartContextProvider>
    </ProductsContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
