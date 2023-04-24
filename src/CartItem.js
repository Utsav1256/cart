import React from "react";

class CartItem extends React.Component {
  

  increaseQuantity = () => {
    // console.log('test')
    this.setState((previousState) => {
      return {
        qty: previousState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    // console.log('test')
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1,
      };
    });
  };

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
              onClick={this.increaseQuantity}
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
