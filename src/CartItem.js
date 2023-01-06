import React from 'react'; 

class CartItem extends React.Component {

    constructor() { 
        super(); 
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity = this.increaseQuantity.bind(this); -> if we have multiple event handlers (like onClick ) we can bind it over here in the constructor
    }

    // Defining 'increaseQuantity' function
    increaseQuantity = () => { // we can use arrow fn. -> it will automatically bind the value of 'this' to the instance of to instace of 'cartItem' clsaa
        console.log('this.state', this.state);
    }

    render() { 
        const {price, title, qty} = this.state; 
        return( 
            <div className='cart-item'>
                <div className='left-block'>
                     <img style={styles.image} /> 
                </div>
                <div className='right-block'>
                     <div style={ { fontSize: 25 } }> {title} </div>       
                    <div style={ { color: '#777' } }>Rs {price} </div>
                    <div style={ { color: '#777' } }>Qty : {qty} </div>
                    
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                            alt='increase' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                            onClick = {this.increaseQuantity} 
                            // I am giving the reference of the fn.-> increaseQuantity() to this 'onClick' listener, so that whenever we click on the 'plus' button this fn. will be called
                        />
                            
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' 
                        />
                    </div>
                </div>
            </div>
        )
    }
}
// in jsx we can style our elements using objects
const styles = { 
    image: { 
        height: 110, 
        width: 110, 
        borderRadius: 4, 
        background: '#ccc' 
    }
}

export default CartItem;