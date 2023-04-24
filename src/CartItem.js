import React from "react";

class CartItem extends React.Component {
  
  render() {
    console.log('this.props', this.props.product);
    const { price, title, qty } = this.props.product;
    //This code is logging the product prop passed to the CartItem component, using console.log(). The product prop is being destructured to extract the price, title, and qty properties.
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: "#777" }}>Rs {price} </div>
          <div style={{ color: "#777" }}>Qty : {qty} </div>

          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
              // onClick is a prop in React that is used to attach a click event handler to an element. In this specific code snippet, the onClick prop is being used to attach an arrow function as the click event handler to an img element.

              // The arrow function being passed as an argument to onClick is using this.props.onIncreaseQuantity(this.props.product) as its body. This means that when the img element is clicked, the onIncreaseQuantity function that was passed down to the component as a prop from its parent component will be called with the product prop of this component as an argument.

              // This is a common pattern in React for passing data and functions down from parent components to child components as props. By using props to pass data and functions between components, you can create a modular and reusable codebase.
              // I am giving the reference of the fn.-> increaseQuantity() to this 'onClick' listener, so that whenever we click on the 'plus' button this fn. will be called
            />

            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
// in jsx we can style our elements using objects
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
