import CartItem from "./CartItem"; // importing cart item from CartItem.js
import Cart from "./Cart";
import Navbar from "./Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart /> {/*now we are using 'CartItem' component over here */}
    </div>
  );
}

export default App;
