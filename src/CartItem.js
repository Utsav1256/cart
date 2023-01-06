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
    }

    
    increaseQuantity = () => { 
        // this.state.qty += 1; // it is increasing our 'qty' by 1, but React does not know that this 'qty' is increasing, so id does not refresh or rerender our component, thats why we see the old value. 
                                                        // So, we have to tell 'React' that, Hey! we want to increase this 'qty', then please re-render our component. 
                                                        // And to do that 'React' gives us a function called 'setState()'and it s inherited from the 'Component' and we can use simply in our component.
        // console.log('this.state', this.state);

        // two ways to call setState fn.
        // setState form 1   // let's say if we simply want to chane the title, no previous state required, then we will use this form
        // this.setState({
        //     qty: this.state.qty + 1  // this.state.qty -> by this we get the current 'qty' 
                                        // it will do 'shallow merging', it will only chage the 'qty' in the state and don't touch other properties
        // });

        // setState form 2  // when we require the 'previous state', we will use this form
        this.setState((previousState) => { // we are passing a fn.
            return {
                qty: previousState.qty + 1 // previousState -> by this we get the current 'qty' 
            }
        });
    }

    decreaseQuantity = () => {
        // console.log('test')
        const { qty } = this.state; // grabbing the 'qty' from 'state', we are using 'Object Destructuring'
        if(qty === 0) {
            return;
        }
        this.setState((prevState) => {
            return {
                qty: prevState.qty - 1
            }
        });
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
                            onClick = {this.decreaseQuantity}
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