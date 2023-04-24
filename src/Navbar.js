import React from "react";

class Navbar extends React.Component {
  
  render() {
    
    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/4290/4290701.png" alt="cart-icon" />
            <span style={styles.cartCount}> {this.props.count} </span>
            {/* this.props object refers to the props passed down to the component from its parent
            In this case, the count prop is passed down to the Navbar component from the parent component App as count={this.getCartCount()}, where this.getCartCount() is a method that returns the total count of items in the cart. */}
        </div>
      </div>
    );
  }
}
// in jsx we can style our elements using objects
const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '1px 5px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

export default Navbar;
