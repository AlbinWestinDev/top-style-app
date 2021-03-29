import React from "react";
import "./Checkout.css";
import ProductCart from "./ProductCart";
import { useStateValue } from "./Stateprovider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket.lenght === 0 ? (
          <div>
            <h2 className="checkout_title">Your shopping basket is empty.</h2>
            <p>You have no items in your basket. Buy one.</p>
          </div>
        ) : (
          <div>
            <h2 className="shoppingbaskettitle">Items in the cart</h2>
            {basket.map((item) => (
              <ProductCart
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
