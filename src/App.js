import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { db } from "./firebase";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const items = snapshot.docs.map((data) => ({
        id: data.id,
        product: data.data(),
      }));
      setCartItems(items);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(cartItems);

  return (
    <Router>
      <div className="App">
        <Header cartItems={cartItems} />
        <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
