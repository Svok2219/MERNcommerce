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
      <Route path="/contackt">
        <Contackt/>
      </Route>
      <Route path="/Cart">
        <Cart/>
      </Route>
      <Route path="/Checkout">
        <Checkout/>
      </Route>
      {/* <Route path="/contact-us">
        <Record/>
      </Route> */}
    </Switch>
  </Router>
   
  );
}

export default App;
