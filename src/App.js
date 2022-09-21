import * as React from 'react';
import './App.css';
import { Routes, Route, Link, BrowserRouter ,  BrowserRouter as Router,} from "react-router-dom";
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
import Authentication from './Authentication/Authentication';
import PrivateRoutes from './PrivateRoute/PrivateRoutes';
import data from './data'
import { useState ,createContext, useContext} from 'react';
import HeaderComp from './Components/HeaderComponent';
export const UserContext = createContext();
// const CartContext = createContext();
function App() {
  const [Loggedin,setLoggedin]=useState()

  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const removeFromCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  console.log(Loggedin)
  return (
    <UserContext.Provider  value={[Loggedin,setLoggedin,cartItems]}>
     
        <Router> 
          
      <Routes>

        <Route path="/" element={<Homepage products={products} addToCart={addToCart} />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contackt />} />
        <Route path="shopDetail" element={<ShopDetail />} />
        <Route path="shop" element={<Shop/> } />
        <Route path="wishList" element={<Wishlist />} />

        <Route element={<PrivateRoutes />}>
        <Route element={<Cart addToCart={addToCart} removeFromCart={removeFromCart}  cartItems={cartItems} />} path="/cart" />
                <Route element={<Checkout/>} path="/checkOut"/>
                <Route element={<MyAcount/>} path="myAcount"/>
        </Route>
        
        <Route path="login" element={<Authentication />} />

       
      </Routes>
      </Router>
       </UserContext.Provider>
   
  );
}

export default App;
