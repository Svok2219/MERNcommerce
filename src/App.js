import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contackt from './Contact/Contact';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import MyAcount from './MyAcount/MyAcount';
import ShopDetail from './ShopDetail/ShopDetail';
import Shop from './Shop/Shop';
import Wishlist from './Wishlist/Wishlist';
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
       <Homepage/>
      </Route>
      <Route path="/Homepage">
        <Homepage/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/gallery">
        <Gallery/>
      </Route>
      <Route path="/contact">
        <Contackt/>
      </Route>
      <Route path="/Cart">
        <Cart/>
      </Route>
      <Route path="/checkOut">
        <Checkout/>
      </Route>
      <Route path="/myAcount">
        <MyAcount/>
      </Route>
      <Route path="/shopDetail">
        <ShopDetail/>
      </Route>
      <Route path="/shop">
        <Shop/>
      </Route>
      <Route path="/wishList">
        <Wishlist/>
      </Route>
    </Switch>
  </Router>
   
  );
}

export default App;
