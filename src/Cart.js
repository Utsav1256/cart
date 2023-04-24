import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 1,
          img: "",
          id: 3,
        }
      ]
    };
  }
  render() {
    const {products} = this.state;
    return (
      // jsx
      <div className="cart">
        {/* we are accessing CartItem component inside Cart component */}
        {products.map((product) => {
          return (
          <CartItem 
            product={product} 
            key={product.id} 
          />
          )
         })
        }
      </div>
    );
  }
//   In this code example, the render method of the Cart component is being defined. The render method returns a JSX template that renders a list of CartItem components.

// Here's how the code works:

// The const {products} = this.state; line extracts the products array from the component's state.

// The render method returns a JSX template that contains a div element with a className of cart.

// Inside the div element, the products.map() method is called to iterate over each product in the products array.

// For each product in the products array, a CartItem component is rendered by calling the component with the following props:

// product: The current product being iterated over in the products.map() method.
// key: A unique identifier for the current CartItem component, based on the current product's id.
// The CartItem components are returned as an array of JSX elements, which are then rendered inside the div element with a className of cart.
// So, overall, this code is rendering a list of CartItem components based on the products array in the Cart component's state. Each CartItem component is being passed a product prop that represents a single product from the products array, and a key prop that uniquely identifies that CartItem component.





}
export default Cart;

// This code defines a Cart component class that extends the React.Component class. It has a constructor method that sets the initial state of the component with an array of three product objects, each representing a product with a price, title, qty, img, and id.

// The render() method returns a JSX template that renders a div element with a className of cart. Inside the div, a map function is used to loop through the products array and render a CartItem component for each product.

// The CartItem component is imported and passed a product prop and a key prop, which is set to the product's id.

// In summary, the Cart component renders a list of CartItem components based on the products array defined in its state. The CartItem component is passed a product prop, which is an object representing a product with its properties, and a key prop, which is set to the product's id. This allows React to identify each CartItem component uniquely and optimize the rendering process.