import React from "react";
import CartItem from "./CartItem"; // importing cart item from CartItem.js
import Cart from "./Cart";
import Navbar from "./Navbar"

class App extends React.Component {

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
    this.setState({
      products: items
    })
  }

  getCartCount= () => {
    const {products} = this.state; // This extracts the products array from the component's state object.

    let count = 0;

    products.forEach((product) => { //  iterates over each product object in the products array using the forEach method, and adds the value of each product object's qty property to the count variable.
      count += product.qty;
    })
    return count; //  returns the final count value
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} /> {/* passing a prop called count to the Navbar component, with the value being the result of the getCartCount() method. */}
        <Cart 
        products={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}/> {/*now we are using 'CartItem' component over here */}
      </div>
    );
  }
}

export default App;
