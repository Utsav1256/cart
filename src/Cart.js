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
  handleDeleteProduct = (id) => {
    const {products} = this.state; //retrieving the products array from the component's state
    const items = products.filter((item) => item.id !== id);
    // In the products.filter() method, item is a variable that represents each element of the products array one by one.

    // So, for each iteration of the filter method, the item variable represents one element of the products array, and then the filter method applies the condition provided inside the parentheses to check if the item.id is not equal to the id parameter. If the condition is true, it keeps that element in the new items array, and if it is false, it removes that element from the new items array.
    this.setState({
      products: items
    })
  }
  // the handleDeleteProduct function is defined to handle the deletion of a product from the cart.

  // First, it retrieves the products array from the component's state. Then, it uses the filter method to create a new array called items that includes all the products except the one with the id that was passed to the function.
  
  // Finally, the setState method is called to update the component's state by setting the products array to the new items array without the deleted product.
  
  // Overall, this function deletes a product from the cart by updating the component's state.

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
            onDeleteProduct = {this.handleDeleteProduct}
          />
          )
         })
        }
      </div>
    );
  }





}
export default Cart;

