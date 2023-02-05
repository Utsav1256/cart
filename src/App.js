import CartItem from "./CartItem"; // importing cart item from CartItem.js
import Cart from "./Cart";

function App() {
  return (
    <div className="App">
      <Cart /> {/*now we are using 'CartItem' component over here */}
    </div>
  );
}

export default App;
