import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { db, auth } from "./firebase";
import styled from "styled-components";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
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

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  return (
    <Router>
      <div className="App">
        {!user ? (
          <Login setUser={setUser} />
        ) : (
          <Container>
            <Header user={user} cartItems={cartItems} signOutUser={signOut} />
            <Switch>
              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
        )}
      </div>
    </Router>
  );
}

export default App;

const Container = styled.div``;
