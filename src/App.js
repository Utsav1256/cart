import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
// importing the Firebase app module from the "firebase/compat/app" package.
// This package contains the new modular SDK that is compatible with the latest version of Firebase.
import {Firestore} from "./Firebase";
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount() { // a lifecycle method in a React class component that is called after the component is mounted.(i.e., rendered on the screen).
    Firestore //  refers to the Firestore instance that was previously defined using the Firebase SDK in the module.
     .collection("products") // This specifies the name of the Firestore collection to query. In this case, it is the "products" collection.
     .onSnapshot((snapshot) => { // This sets up a real-time listener on the "products" collection in Firestore, which triggers a callback function whenever a change occurs in the collection. The onSnapshot method takes a callback function as an argument, which will be called whenever a change is detected in the collection.
      // console.log("snapshot", snapshot)
        const products = snapshot.docs.map((doc) => { // This creates a new array called products by iterating over the documents in the snapshot object (which represents the collection at the time of the snapshot) using the map() method.
          console.log("doc", doc) //This logs the doc object to the console. The doc object represents a single document in the collection
          const data = doc.data(); // This extracts the data from the document and stores it in the data object.
          data["id"] = doc.id; // This adds a new property called "id" to the data object and sets its value to the id of the document. it will be used for deleting purpose.
          // console.log(data);
          return data; // This returns the data object for each document in the snapshot array. The map() method creates a new array by applying this function to each element in the snapshot array.
        });
        this.setState({
          products: products, // This updates the state of the React component by setting the products property to the new products array created by the map() method. This will trigger a re-render of the component and update the UI to display the new data.
          loading: false
        }) 

     }) 
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

    if(products[index].qty === 0) {
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
      cartTotal =  cartTotal + (product.qty * product.price); // Calculating the total cost of each product by multiplying its quantity with price and adding it to cartTotal
    })

    return cartTotal;
  }

addProduct = () => {
  Firestore
    .collection("products")  
    .add({
      img: '',
      price: 9999,
      qty: 1,
      title: "Washing Machine"
    })
    .then((docRef) => {
      console.log('Product has been added', docRef);
    })
    .catch((error) => {
      console.log('Error : ', error);
    })
}
// This code calls the add() method on a Firestore collection object.
// The collection method takes a string argument that specifies the name of the collection to add a new document to.
// The add() method takes an object argument that contains the data to be added to the new document.
// In this case, the object contains four key-value pairs: img (an empty string), price (9999), qty (1), and title ("Washing Machine").
// The then() method is called on the add() method's return value, which is a promise that resolves to a docRef object.
// The then() method takes a callback function that is executed when the promise is resolved.
// In this case, the callback logs a message to the console, indicating that the product has been added, along with the docRef object that was returned by the add() method.
// The catch() method is called on the add() method's return value, which is a promise that rejects with an error object if there is an error.
// The catch() method takes a callback function that is executed when the promise is rejected.
// In this case, the callback logs an error message to the console, along with the error object that was returned by the add() method.

render() {
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} /> {/* passing a prop called count to the Navbar component, with the value being the result of the getCartCount() method. */}
        <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a product</button>
        <Cart 
          products={products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        /> {/*now we are using 'CartItem' component over here */}
        {loading && <h1>Loading Products ...</h1>}
      <div style={ {padding: 10, fontSize: 20} }>Total: Rs {this.getCartTotal()} </div>
      </div>
      
    );
  }
}

export default App;
