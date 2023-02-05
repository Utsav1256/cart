import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  render() {
    return (
      // jsx
      <div className="cart">
        {/* we are accessing CartItem component inside Cart component */}
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    );
  }
}
export default Cart;
