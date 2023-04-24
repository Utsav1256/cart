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

  handleIncreaseQuantity = (product) => {
    console.log('Hey please inc the qty of ', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products: products
    })
  }
  handleDecreaseQuantity = (product) => {
    const {products} = this.state; //retrieving the products array from the component's state
    const index = products.indexOf(product); // finding the index of the product argument within the array

    if(products[index].qty == 0) {
      return;
    }
    products[index].qty -= 1; // decreasing the qty property of the product by 1.

    this.setState({
      products: products //updating the products array in the component's state with the modified product object
    })

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
            onIncreaseQuantity = {this.handleIncreaseQuantity}
            onDecreaseQuantity = {this.handleDecreaseQuantity}
          />
          )
         })
        }
      </div>
    );
  }





}
export default Cart;

