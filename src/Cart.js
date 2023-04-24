import React from "react"; // Imports the necessary React library to define a component.
import CartItem from "./CartItem"; // Imports the CartItem component that will be used inside the Cart component.

const Cart = (props) => { // Defines a functional component named Cart that accepts a props object as its argument.
  
  const {products} = props; // Destructures the products array from the props object passed to the Cart component.
  return ( //  Returns the JSX code to render the Cart component.
    // jsx
    <div className="cart">
      {/* we are accessing CartItem component inside Cart component */}
      {products.map((product) => { //  iterate over each product in the products array
        return (
        <CartItem 
          product={product} // Passes the current product object as the product prop to the CartItem component.
          key={product.id}  // Passes a unique identifier based on the current product object's id property to the CartItem component.
          onIncreaseQuantity = {props.onIncreaseQuantity}
          onDecreaseQuantity = {props.onDecreaseQuantity}
          onDeleteProduct = {props.onDeleteProduct}
          // passing down the props onIncreaseQuantity, onDecreaseQuantity, and onDeleteProduct to the CartItem component from the Cart component.
        />
        )
        })
      }
    </div>
  );

}
export default Cart; // Exports the Cart component for use in other parts of the application.

