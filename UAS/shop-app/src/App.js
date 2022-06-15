import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./components/Auth";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import Profiles from "./components/profile/Profiles";
import ShopList from "./components/shop-list/ShopList";



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
          <Route path="/shoplist" component={ShopList} />
          <Route path="/profiles" component={Profiles} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;