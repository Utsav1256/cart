import React from 'react'; 

class CartItem extends React.Component {

    constructor() { //defining state
        super(); // in js whenever you are inheriting from another class -> we 1st need to call the constructor of that parent class -> by calling 'super()'
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }

    render() { 
        const {price, title, qty} = this.state; // Object Destructuring
        return( 
            <div className='cart-item'>
                <div className='left-block'>
                     <img style={styles.image} /> 
                </div>
                <div className='right-block'>
                     <div style={ { fontSize: 25 } }> {title} </div>       {/* {this.state.title} */}
                    <div style={ { color: '#777' } }>Rs {price} </div>
                    <div style={ { color: '#777' } }>Qty : {qty} </div>
                    
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992651.png' />
                        <img alt='decrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png' />
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' />
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