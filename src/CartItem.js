import React from "react";

const CartItem = (props) => {
  
  const { price, title, qty } = props.product;
  // logging the product prop passed to the CartItem component, using console.log(). The product prop is being destructured to extract the price, title, and qty properties.
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct
  } = props;
  // using object destructuring syntax to extract the product, onIncreaseQuantity, onDecreaseQuantity, and onDeleteProduct props from the props object that was passed down to the CartItem component.

  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
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
            onClick={() => onIncreaseQuantity(product)}
            
          />

          <img
            alt="decrease"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick= {() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
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
