import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { Provider } from "react-redux";
// items
import cartItems from "./cart-items";
// redux stuff
import { createStore } from "redux";
import { cartReducer } from "./Reducer";

const initialStore = {
  cart: cartItems,
  amount: 7,
  total: 105,
};

let store = createStore(cartReducer, initialStore);
console.log(store);
function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
      {/* <CartContainer cart={cartItems} /> */}
    </Provider>
  );
}

export default App;
