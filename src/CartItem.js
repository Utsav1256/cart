import React from 'react'; //importing React from the React package

//creating our very 1st class component -> name: CartItem -> {using camelCase}
class CartItem extends React.Component { // we are inheriting using 'extends' keyword from a class called 'Component' inside the 'React' package -> for cartItem
                                             // so this is a class based component, whereas 'App' is a functional based component
    render() { // for a class component to get React component we need to give it one method -> render()
        return( // and this render() method should return some jsx that will basically describe the UI for that component
        // here we  write some jsx code
            <div className='cart-item'>
                <div className='left-block'>
                     <img style={styles.image} /> {/* in style = {}-> in this bracket we can write js code, styles.image -> passing 'styles' object with 'image' property */}
                </div>
                <div className='right-block'>
                     <div style={ { fontSize: 25 } }>Phone</div> {/*  { fontSize: 25 }-> passing an object with style*/}
                    <div style={ { color: '#777' } }>Rs 999</div>
                    <div style={ { color: '#777' } }>Qty : 1</div>
                    
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        )
    }
}
// in jsx we can style our elements using objects
const styles = { // creating 'styles' object
    image: { // giving properties(image ia a property) to object
        height: 110, // adding styles
        width: 110, // we don't need to add pixels(px) over here javascrpt will add automatically for us
        borderRadius: 4, // we are using 'commas' bcz, it is an javascript object
        background: '#ccc' // we are using 'camelCase' becz. in js we cannot do 'back-radius'
    }
}
// exporting the (CartItem) component -> and we will import it in my 'App' component
export default CartItem;