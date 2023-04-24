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
          img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          id: 1,
        },
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
          id: 2,
        },
        {
          price: 9999,
          title: "Laptop",
          qty: 1,
          img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80",
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

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.forEach((product) => { //  Iterating over each product in the products array
      cartTotal =  cartTotal + (product.qty * product.price) // Calculating the total cost of each product by multiplying its quantity with price and adding it to cartTotal
    })

    return cartTotal;
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
          onDeleteProduct = {this.handleDeleteProduct}
        /> {/*now we are using 'CartItem' component over here */}

      <div style={ {padding: 10, fontSize: 20} }>Total: {this.getCartTotal()} </div>
      </div>
      
    );
  }
}

export default App;
